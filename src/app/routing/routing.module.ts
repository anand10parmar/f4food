import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegistrationComponent} from '../registration/registration.component';
import {OrderComponent} from '../order/app.order.component';
import {AppPageNotFoundComponent} from '../app.page.not.found.component';
import {BrowserModule} from '@angular/platform-browser';



const appRoutes: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'order', component: OrderComponent},
  {path: 'page-not-found', component: AppPageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'}
]


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class RoutingModule { }
