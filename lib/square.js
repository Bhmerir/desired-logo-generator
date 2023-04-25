const Shape = require("./shape");

class Square extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return `<rect x="50" y="0" width="200" height="200" ${this.setColor(this.color)}/>`;
    }
}

module.exports = Square;