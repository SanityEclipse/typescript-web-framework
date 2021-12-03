import { User } from '../../models/User';
import UserProps from '../../interfaces/UserProps';
import { BaseView } from '../BaseView';

export class UserForm extends BaseView<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
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

  onSaveClick = (): void => {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input name="name" placeholder="${this.model.get('name')}"/>
        <button class="set-name">Update Name</button/>
        <button class="set-age">Set Random Age</button/>
        <button class="save-model">Save User</button/>
      </div>`;
  }
}
