const Shape = require("./shape");

class Square extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return `<rect x="60" y="10" width="180" height="180" fill="${this.color}"/>`;
    }
}

module.exports = Square;