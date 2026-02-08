const path = require('path');

const greet = require(path.join(__dirname, '..', 'src', 'app'));

const EXPECTED = 'Hello, Test!';
const OUTPUT = greet('Test');

if (OUTPUT === EXPECTED) {
  console.log('Test passed!');
  process.exit(0);
} else {
  console.error(`Test failed! Expected '${EXPECTED}' but got '${OUTPUT}'`);
  process.exit(1);
}
