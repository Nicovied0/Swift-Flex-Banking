import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDateHour'
})
export class CustomDateHourPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) { }

  transform(value: string): string {
    const parsedDate = new Date(value);
    let formattedTime = this.datePipe.transform(parsedDate, 'hh:mm a')!;

    return formattedTime;
  }
}
