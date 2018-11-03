import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/app.order.component';
import {AppOrderItemsComponent} from './order/app.order.items.component';
import {AppOrderService} from './order/app.order.service';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {AppService} from './services/app.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AppPageNotFoundComponent} from './app.page.not.found.component';
import {RoutingModule} from './routing/routing.module';
import {RouterModule} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';
import {AlertService} from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    AppOrderItemsComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    AppPageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
    RouterModule,
  ],
  providers: [AppService, AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
