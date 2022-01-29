import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToNumber'
})
export class StringToNumberPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return parseInt(value);
  }

}
