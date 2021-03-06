const stringLength = (string) => {
  if (string.length < 1 || string.length > 10 ) {
    throw new Error( 'Please use string that has length between 1 and 10 characters');
  }
  return string.length;
}

const reverseString = (string) => string.split('').reverse().join('');

class Calculator {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    if (!this.a || !this.b) {
      throw new Error('Please enter the missing parameter');
    }
    if (typeof this.a !== 'number' || typeof this.b !== 'number' ) {
      throw new Error('Please enter the accurate input');
    }
    return this.a + this.b;
  };

  subtract() {
    if (!this.a || !this.b) {
      throw new Error('Please enter the missing parameter');
    }
    if (typeof this.a !== 'number' || typeof this.b !== 'number' ) {
      throw new Error('Please enter the accurate input');
    }
    return this.a - this.b;
  }

  divide() {
    if (!this.a || !this.b) {
      throw new Error('Please enter the missing parameter');
    }
    if (typeof this.a !== 'number' || typeof this.b !== 'number' ) {
      throw new Error('Please enter the accurate input');
    }
    return this.a / this.b;
  }

  multiply() {
    if (!this.a || !this.b) {
      throw new Error('Please enter the missing parameter');
    }
    if (typeof this.a !== 'number' || typeof this.b !== 'number' ) {
      throw new Error('Please enter the accurate input');
    }
    return this.a * this.b;
  }
}

const capitalize = (string) => {
  if (!string) {
    throw new Error('Please enter the missing parameter');
  }
  if (typeof string !== 'string') {
    throw new Error('Please enter the accurate input');
  }
  return (string.charAt(0).toUpperCase() + string.slice(1));
}

exports.stringLength = stringLength;
exports.reverseString = reverseString;
exports.Calculator = Calculator;
exports.capitalize = capitalize;