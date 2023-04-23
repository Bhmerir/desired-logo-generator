const Circle = require("../lib/circle.js");

describe("Circle", () => {
    describe("render", () => {
        it('should take a color and return a svg text for making a circle with that color', () => {
            
            const circle = new Circle("red");
            const result = `<circle cx="150" cy="100" r="90" fill="red"/>`;

            expect(circle.render()).toEqual(result);
        });
    });
});