const Square = require("../lib/square.js");

describe("Square", () => {
    describe("render", () => {
        it('should take a color and return a svg text for making a square with that color', () => {
            
            const square = new Square("pink");
            const result = `<rect x="60" y="10" width="180" height="180" fill="pink"/>`;

            expect(square.render()).toEqual(result);
        });
    });
});