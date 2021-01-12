import { Injectable } from '@angular/core';
import {GetUserService} from '../services/get-user.service';
import {Resolve} from '@angular/router';
import {IGetUsers} from '../interfaces/iget-user.interface';
import {Observable} from 'rxjs';

@Injectable()
export class GetUserInfoResolver implements Resolve<IGetUsers>{

  constructor(private service: GetUserService) { }

  resolve(): Observable<IGetUsers> {
    return this.service.getUser();
  }
}
