const Square = require("../lib/square.js");

describe("Square", () => {
    describe("render", () => {
        it('should take a color and return a svg text for making a square with that color', () => {
            
            const square = new Square("pink");
            const result = `<rect x="50" y="0" width="200" height="200" fill="pink"/>`;

            expect(square.render()).toEqual(result);
        });
    });
});