import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/internal/operators';
import {AlertService} from '../services/alert.service';
import {AppService} from '../services/app.service';
import {User} from '../model/app.user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private appService: AppService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(loginForm: NgForm) {
    console.log(this.loginForm.value.username);
    this.appService.logInUser(this.loginForm.value.username, this.loginForm.value.password).subscribe((user: User) => {
      this.router.navigate(['/order']);
      // console.log('done');
    });
  }

}
