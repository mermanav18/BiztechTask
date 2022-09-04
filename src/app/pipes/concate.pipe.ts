import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concate'
})
export class ConcatePipe implements PipeTransform {

  transform(firstName: string, lastName: string): string {
    return firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1);
  }

}
