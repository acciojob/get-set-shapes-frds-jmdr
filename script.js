//complete this code
class Rectangle {
    constructor(width, height) {
        if (width < 0 || height < 0) {
            throw new Error("Width and height must be positive values.");
        }
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        if (side < 0) {
            throw new Error("Side length must be a positive value.");
        }
        super(side, side); // Pass side as both width and height
    }

    getPerimeter() {
        return 4 * this.width; // Use the getter method
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
