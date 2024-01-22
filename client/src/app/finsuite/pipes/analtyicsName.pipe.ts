import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'analyticsType'
})
export class AnalyticsTipe implements PipeTransform {
  transform(value: string): string {
    const currencyMappings: { [key: string]: string } = {
      "profits": 'Ingresos',
      "exprenses": 'Egresos',
      "saving": 'Ahorros',
    };

    return currencyMappings[value] || value;
  }
}
