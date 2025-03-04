import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select
  public name:string = 'Brayan';
  public invitationMap={
    'male':'invitarlo',
    'female':'invitarla',
  };
  public gender:'male'|'female'= 'male';
  changeClient():void
  {
    this.name = 'Yaleny';
    this.gender = 'female';
  }
  //i18Plural
  public clients:string[]=['Yaleny','Ena','Ambar','Keyrin','Dunnor','Merary','Maria','Nancy'];
  public clientsMap={
    '=0':'No tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.',
  }
  deleteClient():void
  {
    this.clients.shift();
  }
  //keyvalue pipe
  public person={
    name:'Yaleny',
    age:28,
    address:'Valle de Angeles F.M'
  }
  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value=>console.log('tap: ', value)),
  )
  public promiseValue:Promise<string> = new Promise ((resolve,reject)=>{
    setTimeout(() => {
      resolve('Renemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Otro nombre';
    },3500)
  })




}
