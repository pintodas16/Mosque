import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
})
export class DonationComponent {
  amountOptions: any = ['$100', '$200', '$500', '$1000'];
  selectedIndex: number | null = null;
  selectedValue: string = '';

  radioValue = 'A';
  validateForm: FormGroup<{
    email: FormControl<string>;
    name: FormControl<string>;
    mobile: FormControl<string>;
    amount: FormControl<string>;
    message: FormControl<string>;
    agree: FormControl<boolean>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      amount: ['', Validators.required],
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false],
    });
  }

  onListItemClick(event: Event, index: number) {
    this.selectedIndex = index;
    const clickedListItem = event.target as HTMLLIElement;
    this.selectedValue = clickedListItem.textContent || '';
    console.log(this.selectedValue);
  }
}
