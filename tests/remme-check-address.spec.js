const {checkAddress, generateAddress} = require ("../packages/remme-utils");
const expect = require("chai").expect;


describe("Check Address", () => {

    it('Address should not be an empty string', () => {
        const wrongAddress = '';
        expect (() => checkAddress(wrongAddress)).to.throw('Address was not provided, please set the address');
    });

    it('Address should be a sting', () => {
        const rightAddress = generateAddress('abcdifj', "abc123");
        expect (() => checkAddress(rightAddress));
        expect (rightAddress).to.be.a('string');
    });

    it('Address should not be a number', () => {
        const wrongAddress = 123;
        expect (() => checkAddress(wrongAddress)).to.throw('Given address is not a valid');
    });

    it('Check address without data', () => {
        const address = generateAddress('7341f3f4a921d36ce9ce', '');
        expect (() => checkAddress(address)).to.not.throw('Given address is not a valid');
    });

});