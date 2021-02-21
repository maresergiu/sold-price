const { iterator } = require('core-js/fn/symbol');
const { default: expectCt } = require('helmet/dist/middlewares/expect-ct');
const serverHelpers = require('../helpers.js');

describe("serverHelpers.readFileSync", () => {
    const data = serverHelpers.readFileSync(
        `./mocks/mockJson.json`,
        'utf8'
    );

    it("should read a json file and return the value", () => {
        const data = serverHelpers.readFileSync(
            `./mocks/mockJson.json`,
            'utf8'
        );

        expect(typeof data).toBe('object');
    });

    it("should throw and error if the file doesn't exist", () => {
        const data = serverHelpers.readFileSync(
            `./mocks/mockJson_does_not_exist.json`,
            'utf8'
        );

        expect(data.message).toBe("ENOENT: no such file or directory, open 'C:\\SEM\\it\\projects\\tech-tests\\sd\\utils\\server\\mocks\\mockJson_does_not_exist.json'");
    });
});