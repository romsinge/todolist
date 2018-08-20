import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    if (status) {
      return "C'est fait"
    } else {
      return "Ce n'est pas fait"
    }
  }

}
