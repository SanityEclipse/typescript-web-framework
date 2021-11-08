import { AxiosPromise } from 'axios';
import * as userClient from '../user-client';
import HasId from '../interfaces/HadId';

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) { }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return userClient.updateExistingUser(this.rootUrl, id, data);
    } else {
      return userClient.saveNewUser(this.rootUrl, data);
    }
  }

  fetch(id: number): AxiosPromise {
    return userClient.getUserById(this.rootUrl, id);
  }
}
