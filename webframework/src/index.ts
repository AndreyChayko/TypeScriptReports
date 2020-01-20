import { User } from './models/User';
const user = new User({ name: 'new record', age: 33 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User changed');
});

user.trigger('change');
