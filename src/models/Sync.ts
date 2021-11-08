import * as userClient from '../user-client';
import { User } from './User';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  save(data: T): Promise<void> {
    const { id } = data;
    if (id) {
      return userClient.updateExistingUser(this.rootUrl, id, data);
    } else {
      return userClient.saveNewUser(this.rootUrl, data);
    }
  }

  fetch(id: number): Promise<User> {
    return userClient.getUserById(this.rootUrl, id);
  }
}
