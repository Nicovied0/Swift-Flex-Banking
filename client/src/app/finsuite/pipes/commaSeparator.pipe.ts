import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparator'
})
export class CommaSeparatorPipe implements PipeTransform {
  transform(value: string | number): string {
    if (typeof value === 'string') {
      return value.replace('.', ',');
    } else if (typeof value === 'number') {
      return value.toString().replace('.', ',');
    } else {
      return '';
    }
  }
}
