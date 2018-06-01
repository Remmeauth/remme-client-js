var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var chaiMatch = require("chai-match");
chai.use(chaiAsPromised);
chai.use(chaiMatch);
chai.should();

describe("RemmeAtomicSwap", function() {
  this.timeout(15000);
  beforeEach(() => {
    window.onbeforeunload = () => 'Oh no!';
  });

  it("Init Atomic Swap [reciever address not a valid]", async () => {
    const { swap } = new Remme.Client();
    await swap.init({
      recieverAddress: "111",
      senderAddress: "000",
      amount: 1,
      swapId: "asd",
      email: "asd@asd.com",
      secretLock: "secret-lock",
      createdAt: 3,
    }).should.be.rejectedWith("recieverAddress is not a valid");
  });

  it("Init Atomic Swap [swapId not a valid]", async () => {
    const { swap } = new Remme.Client();
    await swap.init({
      recieverAddress: "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9bd8f7b",
      senderAddress: "000",
      amount: 1,
      swapId: "asd",
      email: "asd@asd.com",
      secretLock: "secret-lock",
      createdAt: 3,
    }).should.be.rejectedWith("swapId is not a valid");
  });

  it("Init Atomic Swap [secret-lock not a valid]", async () => {
    const { swap } = new Remme.Client();
    await swap.init({
      recieverAddress: "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9bd8f7b",
      senderAddress: "000",
      amount: 1,
      swapId: "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9",
      email: "asd@asd.com",
      secretLock: "secret-lock",
      createdAt: 3,
    }).should.be.rejectedWith("secretLock is not a valid");
  });

  it("Init Atomic Swap [attr missing]", async () => {
    const { swap } = new Remme.Client();
    await swap.init({
      recieverAddress: "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9bd8f7b",
      senderAddress: "000",
      swapId: "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9",
      email: "asd@asd.com",
      secretLock: "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db79f",
      createdAt: 3,
    }).should.be.rejectedWith("Attribute amount was not specified");
  });

  it("Init Atomic Swap [all good]", async () => {
    const { swap } = new Remme.Client();
    const result = await swap.init({
      recieverAddress: "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9bd8f7b",
      senderAddress: "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9bd8fb7",
      amount: 1,
      swapId: "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9",
      email: "asd@asd.com",
      secretLock: "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db79f",
      createdAt: 3,
    });
    result.should.have.property("batchId");
    result.should.have.property("connectToWebSocket");
    result.should.have.property("closeWebSocket");
  });

  it("Approve Atomic Swap [bad swapId]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "not a valid swap id";
    await swap.approve(swapId).should.be.rejectedWith("Given swapId is not a valid");
  });

  it("Approve Atomic Swap [all good]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9";
    const result = await swap.approve(swapId);
    result.should.have.property("batchId");
    result.should.have.property("connectToWebSocket");
    result.should.have.property("closeWebSocket");
  });

  it("Expire Atomic Swap [bad swapId]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "not a valid swap id";
    await swap.expire(swapId).should.be.rejectedWith("Given swapId is not a valid");
  });

  it("Expire Atomic Swap [all good]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9";
    const result = await swap.expire(swapId);
    result.should.have.property("batchId");
    result.should.have.property("connectToWebSocket");
    result.should.have.property("closeWebSocket");
  });

  it("Get info Atomic Swap [bad swapId]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "not a valid swap id";
    await swap.getInfo(swapId).should.be.rejectedWith("Given swapId is not a valid");
  });

  it("Get info Atomic Swap [all good]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9";
    const result = await swap.getInfo(swapId);
    result.should.have.property("amount");
    result.should.have.property("createdAt");
    result.should.have.property("email");
    result.should.have.property("isInitiator");
    result.should.have.property("isClosed");
    result.should.have.property("isApproved");
    result.should.have.property("receiverAddress");
    result.should.have.property("secretKey");
    result.should.have.property("secretLock");
  });

  it("Get public key Atomic Swap [all good]", async () => {
    const { swap } = new Remme.Client();
    const result = await swap.getPublicKey();
    result.should.match(/^[a-f0-9]{66}$/);
  });

  it("Set secret lock Atomic Swap [bad swapId]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "not a valid swap id";
    const secretLock = "not a valid secret lock";
    await swap.setSecretLock(swapId, secretLock).should.be.rejectedWith("Given swapId is not a valid");
  });

  it("Set secret lock Atomic Swap [bad secretLock]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9";
    const secretLock = "not a valid secret lock";
    await swap.setSecretLock(swapId, secretLock).should.be.rejectedWith("Given secretLock is not a valid");
  });

  it("Set secret lock Atomic Swap [missing secretLock]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9";
    await swap.setSecretLock(swapId).should.be.rejectedWith("The 'secretLock' was missing in parameters");
  });

  it("Set secret lock Atomic Swap [all good]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9";
    const secretLock = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db79f";
    const result = await swap.setSecretLock(swapId, secretLock);
    result.should.have.property("batchId");
    result.should.have.property("connectToWebSocket");
    result.should.have.property("closeWebSocket");
  });

  it("Close Atomic Swap [bad swapId]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "not a valid swap id";
    const secretKey = "not a valid secret lock";
    await swap.close(swapId, secretKey).should.be.rejectedWith("Given swapId is not a valid");
  });

  it("Close Atomic Swap [bad secretKey]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9";
    const secretKey = "not a valid secret lock";
    await swap.close(swapId, secretKey).should.be.rejectedWith("Given secretKey is not a valid");
  });

  it("Close Atomic Swap [missing secretLock]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9";
    await swap.close(swapId).should.be.rejectedWith("The 'secretKey' was missing in parameters");
  });

  it("Close Atomic Swap [all good]", async () => {
    const { swap } = new Remme.Client();
    const swapId = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db7f9";
    const secretKey = "abdafd787fd8fdad687afd6af87d8af7df7ad6a8fd67a8a7bd68ab7d698db79f";
    const result = await swap.close(swapId, secretKey);
    result.should.have.property("batchId");
    result.should.have.property("connectToWebSocket");
    result.should.have.property("closeWebSocket");
  });

});