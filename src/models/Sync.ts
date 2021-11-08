import * as userService from '../user-service';
import { User } from './User';
import UserProps from '../interfaces/UserProps';

export class Sync {
  constructor(public rootUrl: string) {}

  save(data: UserProps): Promise<void> {
    if (data.id) {
      return userService.updateExistingUser(data.id, data);
    } else {
      return userService.saveNewUser(data);
    }
  }

  fetch(id: number): Promise<User> {
    return userService.getUserById(id);
  }
}
