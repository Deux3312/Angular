import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})
export class CanFly implements PipeTransform {
    transform(value: boolean): 'Vuela' | 'No Vuela' {
        return value ? 'Vuela' : 'No Vuela';
    }
}
