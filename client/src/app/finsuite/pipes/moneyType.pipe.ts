import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyType'
})
export class MoneyTypePipe implements PipeTransform {
  transform(value: string): string {
    const currencyMappings: { [key: string]: string } = {
      'Pesos Argentinos': 'ARS',
      USD: 'USD',
      EUR: 'EUR',
      'Pesos Chilenos': 'CLP',

    };

    return currencyMappings[value] || value;
  }
}
