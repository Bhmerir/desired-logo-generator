const Shape = require("../lib/shape.js");

describe("Shape", () => {
    describe("render", () => {
        it('should return a message', () => {
            
            const shape = new Shape("green");
            const result = `I am a bossy father who gives only the property of color and its value (green) as inheritance to my children, and makes them do everything on their own while I am resting!`;

            expect(shape.render()).toEqual(result);
        });
    });
});