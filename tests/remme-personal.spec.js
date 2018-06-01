var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var chaiMatch = require("chai-match");
chai.use(chaiAsPromised);
chai.use(chaiMatch);
chai.should();

describe("RemmePersonal", function() {
  this.timeout(15000);
  beforeEach(() => {
    window.onbeforeunload = () => 'Oh no!';
  });

  it("Generate Account Personal", () => {
    const { personal } = new Remme.Client();
    const account = personal.generateAccount();
    account.should.have.property("remChainAddress").match(/^[a-f0-9]{66}$/);
    account.should.have.property("privateKey").not.equal(undefined);
    account.should.have.property("sign");
  });

  it("Generate Account Personal [not valid privateKey]", () => {
    const { personal } = new Remme.Client();
    const privateKey = "not a valid private key";
    (() => personal.generateAccount(privateKey)).should.to.throw("Given privateKey is not a valid");
  });

  it("Generate Account Personal [valid privateKey]", () => {
    const { personal } = new Remme.Client();
    const privateKey = "4a6350123a33419391de65abd221acc7a1b8bd28da27c59f938cf813dbf5def8";
    const account = personal.generateAccount(privateKey);
    account.should.have.property("remChainAddress").match(/^[a-f0-9]{66}$/);
    account.should.have.property("privateKey").not.equal(undefined);
    account.should.have.property("sign");
  });

  it("Set Account Personal [not a valid account]", () => {
    const { personal } = new Remme.Client();
    const account = "not a valid account";
    (() => personal.setAccount(account)).should.to.throw("Given remmeAccount is not a valid");
  });

  it("Set Account Personal [without account]", () => {
    const { personal } = new Remme.Client();
    (() => personal.setAccount()).should.to.throw("Account is missing in attributes. Please give the account.");
  });

  it("Set Account Personal [valid account]", () => {
    const { personal } = new Remme.Client();
    const oldAccount = personal.getAccount();
    const privateKey = "4a6350123a33419391de65abd221acc7a1b8bd28da27c59f938cf813dbf5def8";
    const newAccount = personal.generateAccount(privateKey);
    personal.setAccount(newAccount);
    newAccount.privateKey.asHex().should.not.equal(oldAccount.privateKey.asHex());
  });

  it("Get Account Personal", () => {
    const { personal } = new Remme.Client();
    const account = personal.getAccount();
    account.should.have.property("remChainAddress").match(/^[a-f0-9]{66}$/);
    account.should.have.property("privateKey").not.equal(undefined);
    account.should.have.property("sign");
  });

  it("Get Address Personal", () => {
    const { personal } = new Remme.Client();
    const address = personal.getAddress();
    address.should.match(/^[a-f0-9]{66}$/);
  });

  it("Get Balance Personal", async () => {
    const { personal } = new Remme.Client();
    const balance = await personal.getBalance();
    balance.should.be.a("number")
  });
});