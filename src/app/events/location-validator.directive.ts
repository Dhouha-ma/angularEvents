import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true },
  ],
})
export class LocationValidator implements Validators {
  validate(formGroup: FormGroup): { [key: string]: any } {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null;
    } else {
      return { validateLocation: false };
    }
  }
}