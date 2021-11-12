
import { BaseModel } from './BaseModel';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Collection } from './Collection';
import UserProps from '../interfaces/UserProps';

const rootUrl = 'http://localhost:3000';

export class User extends BaseModel<UserProps>{
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootUrl,
      (json: UserProps) => User.buildUser(json)
    );
  }
}
