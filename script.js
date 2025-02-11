//complete this code
class Rectangle {
	constructor(width, height) {
		if(width<0 || height<0){
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

class Square extends Animal {
	constructor(side) {
		if(side<0){
			throw new error("give me positive value")
		}
        super(side, side); 
    }
    getPerimeter(){
        return 4 * this._width;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
