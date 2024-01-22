import { ValidatorFn, AbstractControl } from '@angular/forms';

export function textValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const textPattern = /^[0-9]*$/;

    if (!value || textPattern.test(value)) {
      return null; 
    }

    return { text: true };
  };
}
