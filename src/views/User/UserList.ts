import UserProps from "../../interfaces/UserProps";
import { User } from "../../models/User";
import { BaseCollectionView } from "../BaseCollectionView";
import { UserShow } from "./UserShow";

export class UserList extends BaseCollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}