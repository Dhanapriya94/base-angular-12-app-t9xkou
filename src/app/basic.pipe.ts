import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basepipe'
})

export class BasicPipe implements PipeTransform {
  transform(input) {
    let output = input +10;
    return output;
  }
}