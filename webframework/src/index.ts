import { User } from './models/User';
const user = new User({ id: 2, name: 'Andrey C', age: 32 });

user.on('save', () => {
  console.log(user);
});

user.save();
