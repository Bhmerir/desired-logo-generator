class Shape{
    constructor(color){
        this.color = color;
    }
    render(){
        return `I am a bossy parent who gives only the property of color and its value (${this.color}) as inheritance to my children, and makes them do everything on their own while I am resting!`;
    }
    setColor(color){
        return(`fill="${color}"`);
    }
}

module.exports = Shape;