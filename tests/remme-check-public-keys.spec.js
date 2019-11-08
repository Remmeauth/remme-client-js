const {checkPublicKey} = require("../packages/remme-utils");
const expect = require("chai").expect;
const { KeyType } = require("../packages/remme-keys");
const Remme = require("../packages/remme");

describe("Remme Keys", () => {

    it('Check public key by RSA is throwing an exception if key is Uint8Array type', async () => {
        const { publicKey } = await Remme.Keys.generateKeyPair(KeyType.RSA);
        expect(publicKey).to.be.a( 'Uint8Array');
        expect(() => checkPublicKey(publicKey)).to.throw("Given public key is not a valid");
    });

    it('Check public key by ECDSA is throwing an exception if key is Uint8Array type',  async () => {
        const { publicKey } = await Remme.Keys.generateKeyPair(KeyType.ECDSA);
        expect(publicKey).to.be.a( 'Uint8Array');
        expect(() => checkPublicKey(publicKey)).to.throw("Given public key is not a valid");
    });

    it('Check public key is by EdDSA throwing an exception if key is Uint8Array type' ,  async () => {
        const { publicKey } = await Remme.Keys.generateKeyPair(KeyType.EdDSA);
        expect(publicKey).to.be.a( 'Uint8Array');
        expect(() => checkPublicKey(publicKey)).to.throw("Given public key is not a valid");
    });

    it('PublicKey should not be a number',  () => {
        const wrongPublicKey = 123;
        expect(() => checkPublicKey(wrongPublicKey)).to.throw("Given public key is not a valid");
    });

    it('Check public key throwing an exception if publicKey undefined',  async () => {
        const wrongPublicKey = undefined ;
        expect( () => checkPublicKey(wrongPublicKey)).to.throw("Public Key was not provided, please set the address");
    });

    it('Check PublicKey by RSA is checking publicKeyHex',  async () => {
        const { privateKey, publicKey } = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey,
            publicKey
        });
        const { publicKeyHex } = keys;
        expect(publicKeyHex).to.be.a( 'string');
        expect(() => checkPublicKey(publicKeyHex)).to.throw("Given public key is not a valid");
    });

    it('Сheck PublicKey by EdDCA is checking publicKeyHex',  async () => {
        const { privateKey, publicKey } = await Remme.Keys.generateKeyPair(KeyType.EdDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.EdDSA,
            privateKey,
            publicKey
        });
        const { publicKeyHex } = keys;
        expect(publicKeyHex).to.be.a( 'string');
        expect(() => checkPublicKey(publicKeyHex)).to.throw("Given public key is not a valid");
    });

});

