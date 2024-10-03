import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup , FormControl, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;

  submitted = false;
  loginSuccess = false;
  userData = {};

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  // Getter for easy access to form fields
  get f() {
    return this.loginForm.controls as {
      [key: string]: AbstractControl;
      username: FormControl;
      password: FormControl;
    };
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loginSuccess = true;

    this.userData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    console.log(`User Data: ${this.userData}`)

    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 2000);

  }

  ngOnInit(): void {
  }

}
