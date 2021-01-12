import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IGetUsers} from '../interfaces/iget-user.interface';
import {Users} from '../url-config/url';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<IGetUsers> {
    return this.http.get<IGetUsers>(Users.userInfo);
  }
}
