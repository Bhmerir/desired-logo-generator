class Shape{
    constructor(color){
        this.color = color;
    }
    render(){
        return `I am a bossy father who gives only the property of color and its value (${this.color}) as inheritance to my children, and makes them do everything on their own while I am resting!`;
    }
}

module.exports = Shape;