class MyRectangle {
    constructor (width, height, color) {
        this.height = height
        this.width = width
        this.color = color
    }

    calcArea() {
        return Number(this.height * this.width);
    }
}

let rect = new MyRectangle(4, 5, 'Red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());