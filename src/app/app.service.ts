
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './model/app.user.model';


const USER_SERVICE = 'https://webdev-mintex.herokuapp.com/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(USER_SERVICE + 'user', httpOptions);
  }

  // getAllUserById(userId: number): Observable<User> {
  //   return this.http.get<User>(USER_SERVICE + 'user/' + userId, httpOptions);
  // }
  //
  // getUserByFname(fnameSearchText): Observable<User[]> {
  //   return this.http.get<User[]>(USER_SERVICE + 'user?fristName=' + fnameSearchText, httpOptions);
  // }

  //
  // deleteUser(userId: number): Observable<User> {
  //   return this.http.delete<User>(USER_SERVICE + 'user/' + userId, httpOptions);
  // }

  // onAddService(user: User): Observable<User> {
  //   return this.http.put<User>(USER_SERVICE + 'user', user, httpOptions);
  // }

  addNewUser(user: User): Observable<User> {
    return this.http.post<User>(USER_SERVICE + 'register', user , httpOptions);
  }

  isUserAvailable(username: string): Observable<User | null> {
    return this.http.get<User>(USER_SERVICE + 'user/' + username + '/username');
  }

  isUserEmailAvailable(email: string): Observable<User | null> {
    return this.http.get<User>(USER_SERVICE + 'user/' + email + 'email');
  }

}

