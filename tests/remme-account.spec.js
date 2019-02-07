const expect = require("chai").expect;
const Remme = require("../packages/remme");
const { PATTERNS } = require("../packages/remme-utils/dist/constants");

describe("RemmeAccount", () => {
  const { privateKeyHex, publicKeyHex, privateKey, publicKey, address} = Remme.Client.generateAccount();

  it("Generate Account", () => {
    expect(!!privateKeyHex && !!publicKeyHex && !!address && !!privateKey && !!publicKey).to.be.true;
  });

  it("Private Key and Public Key should be im HEX fromat", () => {
    expect(privateKeyHex).match(PATTERNS.PRIVATE_KEY);
    expect(publicKeyHex).match(PATTERNS.PUBLIC_KEY);
  });

  it("Account Address Should be in Valid format", () => {
    expect(address).match(PATTERNS.ADDRESS);
  });
});
