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
    let svgText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="green" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
</svg>`;
    return svgText;
}
module.exports = { createdSvgDocument };