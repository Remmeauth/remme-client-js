const expect = require("chai").expect;
const { KeyType, RSA } = require("../packages/remme-keys");
const Remme = require("../packages/remme");
const { hexToBytes, bytesToHex, toHex} = require ("../packages/remme-utils");


describe("hexToBytes", async () => {

    describe("RSA", async () => {

        it("Conversion PublicKeyHex RSA in Uint8Array format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.RSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.RSA,
                privateKey,
                publicKey
            });
            const {  publicKeyHex } = keys;

            const publicKeyHexToBytes = hexToBytes(publicKeyHex);
            expect(publicKeyHexToBytes).to.be.a( 'Uint8Array');
        });

        it("Conversion PrivateKeyHex RSA to Uint8Array format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.RSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.RSA,
                privateKey,
                publicKey
            });
            const { privateKeyHex } = keys;

            const privateKeyHexToBytes = hexToBytes(privateKeyHex);
            expect(privateKeyHexToBytes).to.be.a( 'Uint8Array');
        });

    });

    describe("ECDSA", async () => {

        it("Conversion PublicKeyHex ECDSA to Uint8Array format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.ECDSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.ECDSA,
                privateKey,
                publicKey
            });
            const {  publicKeyHex } = keys;

            const publicKeyHexToBytes = hexToBytes(publicKeyHex);
            expect(publicKeyHexToBytes).to.be.a( 'Uint8Array');
        });

        it("Conversion PrivateKeyHex ECDSA to Uint8Array format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.ECDSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.ECDSA,
                privateKey,
                publicKey
            });
            const { privateKeyHex } = keys;

            const privateKeyHexToBytes = hexToBytes(privateKeyHex);
            expect(privateKeyHexToBytes).to.be.a( 'Uint8Array');
        });
    });

    describe("EdDSA", async () => {

        it("Conversion PublicKeyHex EdDSA to Uint8Array format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.EdDSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.EdDSA,
                privateKey,
                publicKey
            });
            const {  publicKeyHex } = keys;

            const publicKeyHexToBytes = hexToBytes(publicKeyHex);
            expect(publicKeyHexToBytes).to.be.a( 'Uint8Array');
        });

        it("Conversion PrivateKeyHex EdDSA to Uint8Array format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.EdDSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.EdDSA,
                privateKey,
                publicKey
            });
            const { privateKeyHex } = keys;

            const privateKeyHexToBytes = hexToBytes(privateKeyHex);
            expect(privateKeyHexToBytes).to.be.a( 'Uint8Array');
        });
    });
});

describe("bytesToHex", async () => {

    describe("RSA", async () => {

        it("Conversion Uint8Array RSA to PublicKeyHex format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.RSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.RSA,
                privateKey,
                publicKey
            });
            const {  publicKeyHex } = keys;

            const publicKeyHexToBytes = hexToBytes(publicKeyHex);
            expect(publicKeyHexToBytes).to.be.a( 'Uint8Array');

            const BytesPublicKeyToHex = bytesToHex(publicKeyHexToBytes);
            expect(BytesPublicKeyToHex).to.be.a( 'string');

            expect(publicKeyHex).to.equal(BytesPublicKeyToHex);
        });

        it("Conversion Uint8Array RSA to PrivateKeyHex format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.RSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.RSA,
                privateKey,
                publicKey
            });
            const {  privateKeyHex } = keys;

            const privateKeyHexToBytes = hexToBytes(privateKeyHex);
            expect(privateKeyHexToBytes).to.be.a( 'Uint8Array');

            const BytesPrivateKeyToHex = bytesToHex(privateKeyHexToBytes);
            expect(BytesPrivateKeyToHex).to.be.a( 'string');

            expect(privateKeyHex).to.equal(BytesPrivateKeyToHex);
        });
    });

    describe("ECDSA", async () => {

        it("Conversion Uint8Array ECDSA to PublicKeyHex format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.ECDSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.ECDSA,
                privateKey,
                publicKey
            });
            const {  publicKeyHex } = keys;

            const publicKeyHexToBytes = hexToBytes(publicKeyHex);
            expect(publicKeyHexToBytes).to.be.a( 'Uint8Array');

            const BytesPublicKeyToHex = bytesToHex(publicKeyHexToBytes);
            expect(BytesPublicKeyToHex).to.be.a( 'string');

            expect(publicKeyHex).to.equal(BytesPublicKeyToHex);
        });

        it("Conversion Uint8Array ECDSA to PrivateKeyHex format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.ECDSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.ECDSA,
                privateKey,
                publicKey
            });
            const {  privateKeyHex } = keys;

            const privateKeyHexToBytes = hexToBytes(privateKeyHex);
            expect(privateKeyHexToBytes).to.be.a( 'Uint8Array');

            const BytesPrivateKeyToHex = bytesToHex(privateKeyHexToBytes);
            expect(BytesPrivateKeyToHex).to.be.a( 'string');

            expect(privateKeyHex).to.equal(BytesPrivateKeyToHex);
        });
    });

    describe("EdDSA", async () => {

        it("Conversion Uint8Array EdDSA to PublicKeyHex format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.EdDSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.EdDSA,
                privateKey,
                publicKey
            });
            const {  publicKeyHex } = keys;

            const publicKeyHexToBytes = hexToBytes(publicKeyHex);
            expect(publicKeyHexToBytes).to.be.a( 'Uint8Array');

            const BytesPublicKeyToHex = bytesToHex(publicKeyHexToBytes);
            expect(BytesPublicKeyToHex).to.be.a( 'string');

            expect(publicKeyHex).to.equal(BytesPublicKeyToHex);
        });

        it("Conversion Uint8Array EdDSA to PrivateKeyHex format  ", async () => {
            const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.EdDSA);
            const keys = await Remme.Keys.construct({
                keyType: KeyType.EdDSA,
                privateKey,
                publicKey
            });
            const {  privateKeyHex } = keys;

            const privateKeyHexToBytes = hexToBytes(privateKeyHex);
            expect(privateKeyHexToBytes).to.be.a( 'Uint8Array');

            const BytesPrivateKeyToHex = bytesToHex(privateKeyHexToBytes);
            expect(BytesPrivateKeyToHex).to.be.a( 'string');

            expect(privateKeyHex).to.equal(BytesPrivateKeyToHex);
        });
    });

    it("bytesToHex does not process data in Hex format", async () => {
        const { privateKey, publicKey } =  await Remme.Keys.generateKeyPair(KeyType.ECDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.ECDSA,
            privateKey,
            publicKey
        });
        const { publicKeyHex } = keys;
        expect (() => bytesToHex(publicKeyHex)).to.throw('uint8arr.forEach is not a function');
    });
});

describe("ToHex", async () => {

    it('Hex should be a string', () => {
        const dataHex = toHex('test');
        expect(dataHex).to.be.a('string');
    });
});