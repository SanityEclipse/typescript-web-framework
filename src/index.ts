import { User } from './models/User';

const user = new User({ name: 'myName', age: 20 });

user.set({ name: 'Lisa Simpson' });

console.log(user.get('name'));
console.log(user.get('age'));
