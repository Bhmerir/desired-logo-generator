const Shape = require("./shape");

class Circle extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return `<circle cx="150" cy="100" r="100" ${this.setColor(this.color)}/>`;
    }
}

module.exports = Circle;