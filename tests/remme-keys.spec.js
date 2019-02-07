const expect = require("chai").expect;
const { KeyType } = require("../packages/remme-keys");
const Remme = require("../packages/remme");

describe("RemmeKeys", () => {
    it("Should create ECDSA Key Pair", async () => {
        const { privateKey, publicKey } = await Remme.Keys.generateKeyPair(KeyType.ECDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.ECDSA, privateKey, publicKey
        });
        const { privateKeyHex, publicKeyHex } = keys;
        expect(!!publicKeyHex && !!privateKeyHex).to.be.true;
    });
    it("Should create EdDSA Key Pair", async() => {
        const { privateKey, publicKey } = await Remme.Keys.generateKeyPair(KeyType.EdDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.EdDSA, privateKey, publicKey
        });
        const { privateKeyHex, publicKeyHex } = keys;
        expect(!!publicKeyHex && !!privateKeyHex).to.be.true;
    });
    it("Should create RSA Key Pair", async () => {
        const { privateKey, publicKey } = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA, privateKey, publicKey
        });
        const { privateKeyHex, publicKeyHex } = keys;
        expect(!!publicKeyHex && !!privateKeyHex).to.be.true;
    });
});
