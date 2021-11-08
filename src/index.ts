import { User } from './models/User';

const user = new User({ name: 'myName', age: 20 });

user.on('change', () => {
  console.log('change #1');
});
user.on('meow', () => {
  console.log('meow meow meow');
});

user.trigger('change');
user.trigger('meow');
user.trigger('fail');
