class complexnum {
  constructor(real, imaginary) {
    this._real = real;
    this._imaginary = imaginary;
  }

  get real() {
    return this._real;
  }

  set real(value) {
    this._real = value;
  }

  get imaginary() {
    return this._imaginary;
  }

  set imaginary(value) {
    this._imaginary = value;
  }

  addcomples(c) {
    this._real += c.real;
    this._imaginary += c.imaginary;
  }
  display() {
    if (this.imaginary >= 0) {
      console.log(`${this.real} + ${this.imaginary}i`);
    } else {
      console.log(`${this.real} - ${Math.abs(this.imaginary)}i`);
    }
  }
}

const num = new complexnum(3, 4);
num.display(); // "3 + 4i"
const num2 = new complexnum(1, -2);
num.addcomples(num2);
