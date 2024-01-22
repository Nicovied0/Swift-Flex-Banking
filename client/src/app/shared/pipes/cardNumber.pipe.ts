import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      const numericValue = value.replace(/\D/g, '');
      const formattedValue = numericValue.match(/.{1,4}/g)?.join(' ');
      return formattedValue || value;
    }
    return value;
  }
}
