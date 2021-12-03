import { BaseView } from './BaseView';
import { User } from '../models/User';
import UserProps from '../interfaces/UserProps';

export class UserShow extends BaseView<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1>User Show</h1>
      <div>User Name: ${this.model.get('name')} </div>
      <div>User Name: ${this.model.get('age')} </div>
    </div>
    `;
  }
}