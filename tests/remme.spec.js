var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var chaiMatch = require("chai-match");
chai.use(chaiAsPromised);
chai.use(chaiMatch);
chai.should();

describe("Remme", function() {
  this.timeout(15000);
  beforeEach(() => {
    window.onbeforeunload = () => 'Oh no!';
  });

  it("Create an instance [not a valid privateKey]", () => {
    const privateKeyHex = "not a valid private key";
    (() => new Remme.Client({ privateKeyHex })).should.to.throw("Given privateKey is not a valid");
  });
});