var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe("RemmeToken", function() {
  this.timeout(12000);

  beforeEach(() => {
    window.onbeforeunload = () => 'Oh no!';
  });

  it("Send token [not valid user]", async () => {
    const { token } = new Remme.Client();
    const badRemmeAddress = "bad address";
    await token.transfer(badRemmeAddress, 100).should.be.rejectedWith("Given PublicKey is not a valid");
  });

  it("Send token [not valid amount]", async () => {
    const { token } = new Remme.Client();
    const goodRemmeAddress = "0306796698d9b14a0ba313acc7fb14f69d8717393af5b02cc292d72009b97d8759";
    await token.transfer(goodRemmeAddress, -100).should.be.rejectedWith("amount must be higher than 0");
  });

  it("Send token [all good]", async () => {
    const { token } = new Remme.Client();
    const goodRemmeAddress = "0306796698d9b14a0ba313acc7fb14f69d8717393af5b02cc292d72009b97d8759";
    const balanceBefore = await token.getBalance(goodRemmeAddress);
    const transaction = await token.transfer(goodRemmeAddress, 100);
    const transactionCallback = async () => {
      const balanceAfter = await token.getBalance(goodRemmeAddress);
      console.log("balanceAfter", balanceAfter, "balanceBefore", balanceBefore);
      balanceAfter.should.equal(balanceBefore + 100);
      transaction.closeWebSocket();
    };
    transaction.connectToWebSocket(transactionCallback);
  });

  it("Get Balance [not valid user]", async () => {
    const { token } = new Remme.Client();
    const badRemmeAddress = "bad address";
    await token.getBalance(badRemmeAddress).should.be.rejectedWith("Given PublicKey is not a valid");
  });

  it("Get Balance [valid user]", async () => {
    const { token } = new Remme.Client();
    const goodRemmeAddress = "03058b9e39cedd096f093f0df816776fdc8e5cb392d38a8b9920a801e8a0d25ff5";
    const result = await token.getBalance(goodRemmeAddress);
    result.should.be.a("number");
  });

});