import helpers from "../helpers.js";

describe("helpers.generateColorPrice", () => {
    const invalidParams = [
        [null, null],
        [null, undefined],
        ['a', null]
        ['1', null],
        ['1', undefined]
    ];

    invalidParams.forEach((index, parameters) => {
        it(`should return #FFFFFF if parameters are ${parameters}`, () => {
            const color = helpers.generateColorPrice(parameters[0], parameters[1]);

            expect(color).toBe("#FFFFFF");
        });
    });

    it(`should return #9eb3e8 if parameters are 1500, 10000000`, () => {
        const color = helpers.generateColorPrice(1500, 10000000);

        expect(color).toBe("#9eb3e8");
    });

    it(`should return #5887FF if parameters are 1500000, 10000000`, () => {
        const color = helpers.generateColorPrice(1500000, 10000000);

        expect(color).toBe("#5887FF");
    });

    it(`should return #EEB902 if parameters are 4500000 and 10000000`, () => {
        const color = helpers.generateColorPrice(4500000, 10000000);

        expect(color).toBe("#EEB902");
    });

    it(`should return #EEB902 if parameters are 9500000 and 10000000`, () => {
        const color = helpers.generateColorPrice(9500000, 10000000);

        expect(color).toBe("#F45D01");
    });

    it(`should return #EEB902 if parameters are 9800000 and 10000000`, () => {
        const color = helpers.generateColorPrice(9800000, 10000000);

        expect(color).toBe("#FF0000");
    });
});

describe("helpers.generateStylePosObj", () => {
    it("should return an an object", () => {
        const styleObj = helpers.generateStylePosObj(1422640, 500, 500);

        expect(typeof styleObj).toBe("object");
    });

    it("should return an an object which has 4 properties", () => {
        const styleObj = helpers.generateStylePosObj(1422640, 500, 500);

        expect(Object.keys(styleObj).length).toBe(4);
    });

    it("should return an an object which has the properties width, height, top, left", () => {
        const styleObj = helpers.generateStylePosObj(1422640, 500, 500);
        const styleObjKeys = Object.keys(styleObj);

        expect(styleObjKeys.includes('width')).toBe(true);
        expect(styleObjKeys.includes('height')).toBe(true);
        expect(styleObjKeys.includes('top')).toBe(true);
        expect(styleObjKeys.includes('left')).toBe(true);
    });

    describe("describe the width property", () => {
        it("should assign a valid number to the height property if parentHeight is not zero", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], 500, 500);

            expect(styleObj.height).toBe('5px');
        });

        it("should assign 0px to the width property if parentWidth is zero", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], 0, 500);

            expect(styleObj.width).toBe('0px');
        });

        it("should assign 0px to the width property if parentWidth is null", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], null, 500);

            expect(styleObj.width).toBe('0px');
        });

        it("should assign 0px to the width property if parentWidth is undefined", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], undefined, 500);

            expect(styleObj.width).toBe('0px');
        });

        it("should assign 0px to the width property if parentWidth is a string", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], undefined, 500);

            expect(styleObj.width).toBe('0px');
        });
    });

    describe("describe the height property", () => {
        it("should assign a valid number to the height property if parentHeight is not zero", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], 500, 500);

            expect(styleObj.width).toBe('5px');
        });

        it("should assign 0px to the height property if parentHeight is zero", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], 0, 500);

            expect(styleObj.width).toBe('0px');
        });

        it("should assign 0px to the height property if parentHeight is null", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], null, 500);

            expect(styleObj.width).toBe('0px');
        });

        it("should assign 0px to the height property if parentHeight is undefined", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], undefined, 500);

            expect(styleObj.width).toBe('0px');
        });

        it("should assign 0px to the height property if parentHeight is a string", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], undefined, 500);

            expect(styleObj.width).toBe('0px');
        });
    });

    describe("describe the top property", () => {
        it("should assign valid coordonates to the top and left property if position is not array of positive numbers", () => {
            const styleObj = helpers.generateStylePosObj([15, 15], 0, 500);

            expect(styleObj.left).toBe('15%');
            expect(styleObj.top).toBe('15%');
        });

        it("should assign 0 to the top and left property if position is not an array", () => {
            const styleObj = helpers.generateStylePosObj(1422640, 0, 500);

            expect(styleObj.top).toBe('0');
            expect(styleObj.left).toBe('0');
        });

        it("should assign 0 to the top and leftp property if position is null", () => {
            const styleObj = helpers.generateStylePosObj(1422640, null, 500);

            expect(styleObj.top).toBe('0');
            expect(styleObj.left).toBe('0');
        });

        it("should assign 0px to the top and left property if position is undefined", () => {
            const styleObj = helpers.generateStylePosObj(1422640, undefined, 500);

            expect(styleObj.top).toBe('0');
            expect(styleObj.left).toBe('0');
        });

        it("should assign 0px to the top and left property if position is a string", () => {
            const styleObj = helpers.generateStylePosObj(1422640, undefined, 500);

            expect(styleObj.top).toBe('0');
            expect(styleObj.left).toBe('0');
        });
    });
});