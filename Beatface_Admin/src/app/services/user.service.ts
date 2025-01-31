import { Injectable } from '@angular/core';
import { IApi } from '../shared/common/contracts/api';
import { User } from '../models/user';
import { GenericApi } from '../shared/common/generic-api';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  signIn: IApi<User>;
  users: IApi<User>;

  constructor(http: HttpClient) {
    this.signIn = new GenericApi<User>('users/signin', http);
    this.users = new GenericApi<User>('users', http);
  }

}
