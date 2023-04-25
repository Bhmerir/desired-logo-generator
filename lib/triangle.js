const Shape = require("./shape");

class Triangle extends Shape{
    constructor(color){
        super(color);
    }
    render(){
       return `<polygon points="150, 0 30, 200 270, 200" ${this.setColor(this.color)}/>`;
    }
}

module.exports = Triangle;