const Triangle = require("../lib/triangle.js");

describe("Triangle", () => {
    describe("render", () => {
        it('should take a color and return a svg text for making a triangle with that color', () => {
            
            const triangle = new Triangle("blue");
            const result = `<polygon points="150, 0 30, 200 270, 200" fill="blue"/>`;

            expect(triangle.render()).toEqual(result);
        });
    });
});