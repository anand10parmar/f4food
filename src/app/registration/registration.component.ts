import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, ValidatorFn, Validators} from '@angular/forms';
import {AppService} from '../app.service';
import {RegistrationAsyncValidator} from './validator/registration.async.validator';
import {User} from '../model/app.user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  submitStatus: Boolean = false;


  constructor(private appService: AppService) { }
  isUsernameValidationPending: Boolean = false;

  regestrationForm = new FormGroup({
    username: new FormControl(
      null,
      [Validators.required, Validators.minLength(5)],
      [RegistrationAsyncValidator.isUsernameAvailable(this.appService)]),
    password: new FormControl(null),
    email: new FormControl(null)
    // add otherFields too
  })


  ngOnInit() {
    this.regestrationForm.statusChanges.subscribe((status) => {
      if (this.regestrationForm.get('username').status === 'Pending...') {
        this.isUsernameValidationPending = true;
      } else {
        this.isUsernameValidationPending = false;
      }
    });
  }


  submitRegistration() {
    console.log(this.regestrationForm.value);

    this.appService.addNewUser(this.regestrationForm.value).subscribe((user: User) => {
    });
  }

  addFormControl() {
    this.regestrationForm.addControl('firstname', new FormControl('anand'));
  }
  get username() {
    return this.regestrationForm.get('username');
  }
  validateUsername(regex: RegExp): ValidatorFn {
    return ((control: FormControl) => {
      console.log(control.value);
      if (control.value != null && control.value.length > 5) {
        return  regex.test(control.value) ?  null :  {'regexMismatch' : true};
      } else {
        return {'invalidUsernameSize' : true};
      }
    });

  }



}



