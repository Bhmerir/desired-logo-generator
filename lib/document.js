const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");
const Color = require('color');

//This function adds a # at the begining of the hexadecimal color numbers if they don't have one
function renderColor(textColor, shapeColor) {
    textColor = textColor.toLowerCase();
    shapeColor = shapeColor.toLowerCase();
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
    return {textColor, shapeColor};
}

/*This function renders the svg text based on the chosen shape, it makes an instance of its related class and
calls its render function for that object*/
function renderShapeSvgText(text, textColor, shape, shapeColor){
    let renderedText = "";
    switch (shape) {
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
    return renderedText;
}

/*This functions is responsible for creating the svg document, it takes user criteria as input and 
calls the other functions to handle each part of document based on the asked criteria, and
finally, it returns the whole provided document in order to write in file*/
function createdSvgDocument(desiredLogoProperties) {
    let { text, textColor, shape, shapeColor } = desiredLogoProperties;

    const renderedcolor = renderColor(textColor, shapeColor);
    textColor = renderedcolor.textColor;
    shapeColor = renderedcolor.shapeColor;
    
    let renderedText = renderShapeSvgText(text, textColor, shape, shapeColor);   
    let svgText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="white" />
    ${renderedText}     
</svg>`;
    return svgText;
}
module.exports = { createdSvgDocument };