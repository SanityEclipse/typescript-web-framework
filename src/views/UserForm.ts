import { User } from '../models/User';
import UserProps from '../interfaces/UserProps';
import { BaseView } from '../models/BaseView';

export class UserForm extends BaseView<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      this.model.set({ name: input.value });
    }
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
        <input name="name"/>
        <button class="set-name">Update Name</button/>
        <button class="set-age">Set Random Age</button/>
      </div>`;
  }
}
