const Remme = require("../packages/remme");
const expect = require("chai").expect;
const { publicKeyToPem, privateKeyToPem } = require("../packages/remme-utils");
const { publicKeyFromPem, privateKeyFromPem } = require("../packages/remme-utils");
const { KeyType, RSA } = require("../packages/remme-keys");



describe("Key To Pem", async () => {

    it('Get public Key in PEM', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey,
            publicKey,
        });

        const publicKeyObject = RSA.getObjectFromPublicKey(keys.publicKey);
        const KeyToPem = publicKeyToPem(publicKeyObject);
        expect(KeyToPem).to.be.ok;
    });

    it('Get private Key in PEM', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey,
            publicKey,
        });

        const privateKeyObject = RSA.getObjectFromPrivateKey(keys.privateKey);
        const KeyToPem = privateKeyToPem(privateKeyObject);
        expect(KeyToPem).to.be.ok;
    });
});

describe("Key From Pem", async () => {

    it('Get public key from Pem format', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey,
            publicKey,
        });

        const publicKeyObject = await RSA.getObjectFromPublicKey(keys.publicKey);
        const pemObject = publicKeyToPem(publicKeyObject);

        const KeyFromPem = publicKeyFromPem(pemObject);
        const PublicKeyFromObject = await RSA.getPublicKeyFromObject(KeyFromPem);

        expect(PublicKeyFromObject).to.deep.equal(publicKey);
    });

    it('Get private key from Pem format', async () => {

        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey,
            publicKey,
        });

        const privateKeyObject = await RSA.getObjectFromPrivateKey(keys.privateKey);
        const pemObject = privateKeyToPem(privateKeyObject);

        const KeyFromPem = privateKeyFromPem(pemObject);
        const PrivateKeyFromObject = await RSA.getPrivateKeyFromObject(KeyFromPem);

        expect(privateKey).to.deep.equal(PrivateKeyFromObject);
    });
});