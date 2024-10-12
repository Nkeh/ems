import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup , FormControl, AbstractControl} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserCredentialsInterface } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  submitted = false;
  loginSuccess = false
  userExists = true
  userData: UserCredentialsInterface = {
    username: '',
    password: ''
  };

  users: UserCredentialsInterface[] = [
    {
      username: 'Alice',
      password: '123Alice'
    },
    {
      username: 'Bob',
      password: '123Bob'
    },
    {
      username: 'Charlie',
      password: '123Charlie'
    },
    {
      username: 'Dave',
      password: '123Dave'
    }
  ]

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

    this.userData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    

    const user = this.users.find(user => user.username === this.userData.username && user.password === this.userData.password);
   
    if (typeof user !== 'undefined') {
      this.loginSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
      return this.userData;
    }
    else {
      this.userExists = false;
      return;
    }
    

    
    

  }

  ngOnInit(): void {
  }

}
