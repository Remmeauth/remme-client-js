const expect = require("chai").expect;
const Remme = require("../packages/remme");


describe("RemmeAccount", () => {

  it("Generated account should be a valid", async () => {
    const account = Remme.Client.generateAccount();
    expect(account.address).to.be.a('string' || 'buffer');
  });

  it("Account should have to publicKeyHex", async () => {
    const account = Remme.Client.generateAccount();
    expect(account.publicKeyHex).to.be.a('string' || 'buffer');
  });

  it("Account should have to privateKeyHex", async () => {
    const account = Remme.Client.generateAccount();
    expect(account.privateKeyHex).to.be.a('string' || 'buffer');
  });

  it("Account should have to privateKey", async () => {
    const account = Remme.Client.generateAccount();
    expect(account.privateKey).to.be.a('Uint8Array');
  });

  it("Account should have to publicKey", async () => {
    const account = Remme.Client.generateAccount();
    expect(account.publicKey).to.be.a('Uint8Array');
  });

  it("Account should have to familyName", async () => {
    const account = Remme.Client.generateAccount();
    expect(account.familyName).to.be.a('string');
  });

  it("familyName in account should be 'account'", async () => {
    const account = Remme.Client.generateAccount();
    expect(account.familyName).to.equal('account');
  });

  it("Account should have to key type", async () => {
    const account = Remme.Client.generateAccount();
    console.log(account.keyType);
    expect(account.keyType).to.be.a('string');
  });

  it("Key type in account should be 'ecdsa'", async () => {
    const account = Remme.Client.generateAccount();
    expect(account.keyType).to.equal('ecdsa');
  });




});