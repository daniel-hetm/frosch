import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-favorite-form',
  imports: [],
  templateUrl: './favorite-form.html',
  styleUrl: './favorite-form.sass',
})
export class FavoriteForm implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      input3: ['', Validators.required],
      input4: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // Handle form submission, e.g., send to a service
    }
  }
}
