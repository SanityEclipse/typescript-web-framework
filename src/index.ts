import { User } from './models/User';
import * as userService from './user-service';

// const user = new User({ id: 1 });
// const user = new User({ name: 'Donkey Kong', age: 40 });

// user.set({ name: 'Kandy Kong', age: 21 });
// user.save();

console.log(userService.getUserList());
