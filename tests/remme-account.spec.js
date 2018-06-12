var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var chaiMatch = require("chai-match");
chai.use(chaiAsPromised);
chai.use(chaiMatch);
chai.should();

describe("RemmeAccount", function() {
  this.timeout(15000);
  beforeEach(() => {
    window.onbeforeunload = () => 'Oh no!';
  });

  it("Generate Account Personal", () => {
    const account = Remme.Client.generateAccount();
    account.should.have.property("publicKeyHex").match(/^[a-f0-9]{66}$/);
    account.should.have.property("privateKey").not.equal(undefined);
    account.should.have.property("privateKeyHex").match(/^[a-f0-9]{64}$/);
    account.should.have.property("sign");
  });

});