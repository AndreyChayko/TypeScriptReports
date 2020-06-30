// import express, { Request, Response } from 'express';
// import { router } from './routes/loginRoutes';
// import bodyParser from 'body-parser';
// import cookkieSession from 'cookie-session';

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookkieSession({ keys: [''] }));
// app.use(router);

// app.listen(3000, () => {
//   console.log('Listening on port 3000');
// });


class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key:', key);
}