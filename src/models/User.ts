import * as userService from '../user-service';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  save(): void {
    if (this.get('id')) {
      userService.updateExistingUser(this.get('id'), this.data);
    } else {
      userService.saveNewUser(this.data);
    }
  }

  fetch(): void {
    userService.getUserById(this.get('id'));
  }
}
