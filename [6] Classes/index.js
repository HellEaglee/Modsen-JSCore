class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return this.width * 2 + this.height * 2;
  }
}

const myRectangle = new Rectangle(10, 5);

console.log("Площадь:", myRectangle.getArea());
console.log("Периметр:", myRectangle.getPerimeter());
