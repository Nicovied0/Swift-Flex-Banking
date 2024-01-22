import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) { }

  transform(value: string): string {
    const parsedDate = new Date(value);
    return this.datePipe.transform(parsedDate, 'MMM dd, yyyy')!;
  }
}

