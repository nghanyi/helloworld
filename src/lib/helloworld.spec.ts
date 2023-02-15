import test from 'ava';

import { sayHello } from './helloworld';

test('hello world', (t) => {
  t.is(sayHello('John Doe'), 'Hello from John Doe');
});
