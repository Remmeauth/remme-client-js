const {createHash} = require("crypto");
const expect = require("chai").expect;
const Remme = require("../packages/remme/");
const {checkSha512, checkSha256} = require("../packages/remme-utils");
const {PATTERNS} = require("../packages/remme-utils");
const utils = require("../packages/remme-utils");

describe('Sha', () => {

    it("CreateHash512",() => {
        const data = "123";
        const dataSha512 = createHash("sha512").update(data).digest("hex");
        expect(!!PATTERNS.SHA512.test(dataSha512));
    });

    it("CreateHash256",  () => {
        const data = "123";
        const dataSha256 = createHash("sha256").update(data).digest("hex");
        expect(!!PATTERNS.SHA256.test(dataSha256));
    });

    it("Validation of key sha-512 with checkSha256", () => {
        const wrongData = utils.sha512("");
    expect(() => checkSha256(wrongData)).to.throw("Value should be SHA-256");
    });

    it("Validation of key sha-256 with checkSha512", () => {
        const wrongData = utils.sha256("");
    expect(() => checkSha512(wrongData)).to.throw("Value should be SHA-512");
    });

    it("Verify the right format of SHA-256 value", () => {
        const rightData = utils.sha256('test');
    expect(!!PATTERNS.SHA256.test(rightData)).to.be.true;
    });

    it("Verify the right format of SHA-512 value", () => {
        const rightData = utils.sha512('test');
    expect(!!PATTERNS.SHA512.test(rightData)).to.be.true;
    });

    it('Utils sha256 does nоt return the same value of hash', () => {
        const rightData1 = utils.sha256('test1');
        const rightData2 = utils.sha256('test2');
        expect(rightData1).to.not.equal( rightData2);
    });

    it('Utils sha512 does not return the same value of hash', () => {
        const rightData1 = utils.sha512('test1');
        const rightData2 = utils.sha512('test2');
        expect(rightData1).to.not.equal( rightData2);
    });

    it('Values of sha512 and sha256 are different ', () => {
        const rightData1 = utils.sha512('test1');
        const rightData2 = utils.sha256('test2');
        expect(rightData1).to.not.equal( rightData2);
    });

});