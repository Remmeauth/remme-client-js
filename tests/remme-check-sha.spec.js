const expect = require("chai").expect;
const Remme = require("../packages/remme/");
const {checkSha512, checkSha256} = require("../packages/remme-utils");
const utils = require("../packages/remme-utils");

describe('Check-sha', () => {

    it('Value should be SHA-512', () => {
        const wrongData = "adc0";
        expect(() => checkSha512(wrongData)).to.throw("Value should be SHA-512");
    });

    it('Value should be SHA-256', () => {
        const wrongData = "adc1";
        expect(() => checkSha256(wrongData)).to.throw("Value should be SHA-256");
    });

    it("Exception is not thrown if sha256 key is valid", () => {
        const rightData = utils.sha256('test');
        expect(() => checkSha256(rightData)).to.not.throw("Value should be SHA-256");
    });

    it("Exception is not thrown if sha512 key is valid", () => {
        const rightData = utils.sha512('test');
        expect(() => checkSha512(rightData)).to.not.throw("Value should be SHA-512");
    });

    it("Value sha-256 should not be in uppercase", () => {
        const wrongData = "ABCDEF123456789ABCDEF123456789ABCDEF123456789ABCDEF123456789ABCD";
        expect(() => checkSha256(wrongData)).to.throw("Value should be SHA-256");
    });

    it("Value sha-512 should not be in uppercase", () => {
        const wrongData = "ABCDEF123456789ABCDEF123456789ABCDEF123456789ABCDEF123456789ABCDABCDEF123456789ABCDEF123456789ABCDEF123456789ABCDEF123456789ABCD";
        expect(() => checkSha512(wrongData)).to.throw("Value should be SHA-512");
    });

    it("Value sha-256 could use only letters", () => {
        const wrongData = "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcd";
        expect(() => checkSha256(wrongData)).to.throw("Value should be SHA-256");
    });

    it("Value sha-256 should not with 63 correct symbols", () => {
        const wrongData = utils.sha256("").slice(0, -1);
        expect(() => checkSha256(wrongData)).to.throw("Value should be SHA-256")
    });

    it("Value sha-256 should not with 65 correct symbols", () => {
        const wrongData = utils.sha256("").slice(0, +1);
        expect(() => checkSha256(wrongData)).to.throw("Value should be SHA-256")
    });

    it("Value sha-512 should not with 127 correct symbols", () => {
        const wrongData = utils.sha512("").slice(0, -1);
        expect(() => checkSha512(wrongData)).to.throw("Value should be SHA-512")
    });

    it("Value sha-512 should not with 129 correct symbols", () => {
        const wrongData = utils.sha512("").slice(0, +1);
        expect(() => checkSha512(wrongData)).to.throw("Value should be SHA-512")
    });
});




