const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");
const Color = require('color');

function createdSvgDocument(desiredLogoProperties) {
    let { text, textColor, shape, shapeColor } = desiredLogoProperties;
    try {
        const color = Color(textColor);
    } catch (error) {
        textColor = `#${textColor}`;
    }
    try {
        const color = Color(shapeColor);
    } catch (error) {
        shapeColor = `#${shapeColor}`;
    }
let renderedText = "";

switch (shape){
    case "Circle":
        let circle = new Circle(shapeColor);
        renderedText = circle.render();
        // The y of written text for circle and square is 120
        renderedText += `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>`;
        break;
    case "Square":
        let square = new Square(shapeColor);
        renderedText = square.render();
        renderedText += `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>`;
        break;
    case "Triangle":
        let triangle = new Triangle(shapeColor);
        renderedText = triangle.render();
        // The y of written text for triangle is 150
        renderedText += `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>`;
        break;
}

let svgText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    ${renderedText}     
</svg>`;
    return svgText;
}
module.exports = { createdSvgDocument };