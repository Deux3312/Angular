import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{


    validate(control: AbstractControl): Observable<ValidationErrors | null> {
       const email = control.value;
       
        const httpCallObservable = new Observable<ValidationErrors|null>((subscriber)=>{
            console.log({email})
            if (email === 'brayan.medina@google.com'){
                subscriber.next({emailtaken:true});
                subscriber.complete();
                //return
            }
            subscriber.next(null);
            subscriber.complete();
        }).pipe(delay(300))
        return httpCallObservable;

    }



    //Referencia de codigo modificado
    // validate(control: AbstractControl): Observable<ValidationErrors | null> {
    //     const email = control.value;
    //     console.log({email})
    //     return of({
    //      emailTaken:true
    //     }).pipe(
    //      delay(1000)
    //     );
    //  }

    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error('Method not implemented.');
    // }

    // constructor() { }
    
}

// return this.http.get<any[]>(`http://localhost:3000/users?q=${ email }`)
// .pipe(
//   // delay(3000),
//   map( resp => {
//     return ( resp.length === 0 )
//         ? null
//         : { emailTaken: true }
//   })
// );