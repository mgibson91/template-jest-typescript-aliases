import { getString1 } from 'dir-1/functions';
import { getString2 } from 'dir-2/functions';

describe('Tests', () => {
  test('Test 1', () => {
    console.log(getString1());
  });

  test('Test 2', () => {
    console.log(getString2());
  });
});

