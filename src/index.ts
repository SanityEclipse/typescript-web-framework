import axios from 'axios';
import * as userService from './user-service';

// axios.post('http://localhost:3000/users', {
//   name: 'Thomas',
//   age: 35,
// });

console.log(userService.getUserById(1));
