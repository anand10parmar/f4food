import {AppService} from '../../app.service';
import {FormControl, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {User} from '../../model/app.user.model';
import {catchError, map} from 'rxjs/internal/operators';


export class RegistrationAsyncValidator {

  static isUsernameAvailable(userService: AppService) {
    return (control: FormControl): Observable<ValidationErrors> | null | Promise<ValidationErrors | null> => {
      return userService.isUserAvailable(control.value).pipe(
        map((user: User) =>
        user != null ? {'usernameNotAvailable': true} : null),
        catchError((error) => error)
      );
    };
  }

  // static isEmailAvailable(userService: AppService) {
  //   return (control: FormControl): Observable<ValidationErrors> | null | Promise<ValidationErrors | null> => {
  //     return userService.isUserEmailAvailable(control.value).pipe(
  //       map((user: User) =>
  //         user != null ? {'usernameNotAvailable': true} : null),
  //       catchError((error) => error)
  //     );
  //   };
  // }



}
