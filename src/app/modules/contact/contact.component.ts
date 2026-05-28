import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
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
}
