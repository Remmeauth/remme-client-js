const expect = require("chai").expect;
const { KeyType } = require("../packages/remme-keys");
const Remme = require("../packages/remme");
const { hexToBytes} = require ("../packages/remme-utils");


describe("Remme Keys", async () =>{

    it('Construct RemmeKeys without any params', async () => {
        const keys = await Remme.Keys.construct();

        expect(keys.publicKey).to.be.ok;
        expect(keys.privateKey).to.be.ok;
        expect(keys.keyType).to.be.ok;
        expect(keys.address).to.be.ok;
        expect(keys.privateKeyHex).to.be.ok;
        expect(keys.publicKeyHex).to.be.ok;
    });

    it('keyType should be RSA by default', async () => {
        const keys = await Remme.Keys.construct();
        expect(keys.keyType).to.equal('rsa');
    });

});

describe("RSA", async () =>{

    it("Should create RSA Key Pair", async () => {
        const { privateKey, publicKey } = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey,
            publicKey
        });
        const { privateKeyHex, publicKeyHex } = keys;
        expect(!!publicKeyHex && !!privateKeyHex).to.be.true;
    });

    it('RSA publicKeyHex should be valid', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey,
            publicKey
        });
        const {publicKeyHex} = keys;
        expect(publicKeyHex).match(/^[a-f0-9]{588}$/);
    });

    it('RSA privateKeyHex should be valid', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey,
            publicKey,
        });
        const {privateKeyHex} = keys;
        expect(privateKeyHex).match(/^[a-f0-9]{2048,}$/);
    });

    it('privateKeyHex && publicKeyHex RSA should be a string ', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey, publicKey
        });
        const {privateKeyHex, publicKeyHex} = keys;
        expect(privateKeyHex && publicKeyHex).to.be.a('string');
    });

    it('privateKey && publicKey RSA should be Uint8Array', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.RSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey,
            publicKey,
        });
        expect(privateKey && publicKey).to.be.a('Uint8Array');
    });

    it('Construct RemmeKeys based on privateKey RSA', async () => {
        const privateKey = "308204a30201000282010100b7351b8f442a2fe2f68f74681fc690949bc0bfef286d0690fedd203858cc29e4a980cab0b50891ff4cd63e75f7e050550fba07277b935162ff427d6e3a5ea2176cf536b3f296480bf74708012c6d467cf6885efc4598712ff203f7e0c9465acee09c60bc0e4e72780d9ac470b89c6e1064a22e45a7509abcb4f1ff05471a68142f043c8a6d10e15b1a81c595ca108678fbd46f62dbcbeb82b8d518ee60e4159a67aae1b237312d0cb26f86df3c71ce01be2537623d17729437ee15bb52c62fb2dd5a3f6f0757b13dcd2cd8d286ef0dc5f2e3f5f70309d6461a109b2a311dbdfc7e62778325ee0f3782ab3a2645c0cd0ff662ae8648440a0ed78561a1075f897f02030100010282010100b453fec37e89b3c6c77f9e499af53c7c39ee783d33e2547345996bcc6a82d2bd72a6055bf764ef27867edece08e4eecd3b049564247b75c166951096fdb705fedecd6241af0682f5dc383b45c46feed0b36cb969c02af346090624e749d6092dd5e1b649841f6d06840591538e32d31729a684bb249bef22cd4be10355e0450de67d22f04284df074842ba8f9acd66ef97ae6428f160108e1f574982924b5dbd3a64195b30ff08c62ac7a42fe7ed1c52fda6ff11fa024f49c8e55afe60156b5b2fc34d5576d9ba7480e7ad092faa84e13edfb2c40cd89506ec0b4c897ebb494140a0216b11acc3a3940561e609808f0068efb9ae9cf0d1eebcb4457e44f62f7902818100da33d9ce0c5420cfdc7f9f067501245d251f1fbc547b19b5a82e82847b418bccf2b9d5f7d0ef52c870f1c917086108173c793174971383fd9904cca3d4236a99ce72ebf5a0fa3a6cc492214d404a2015c6bb2af5d2e7560ed06cb72a6679f5ec6c4bf78a9bd542bad07ba44c090ffb499d9c2cae0a090c158cee17c4878db7b502818100d6f16809496ae2ef530086336e4bd045a62624561776362b4f941e535729eefe9b5f30b5c24066a9606526fa7f1b63552555e2fa3057a7d212b28d32842c3b301e7a70b5234cb320378621d6c37c05b7ffddcffa6e5cff794ce8cf715ee7f620b103ee49c37ca583b3afa7b69c15a99cf26dfd6da72a59336c9f10ed1b1d94e302818075e7168573bbf18edf82461763199ee085b26f9f7fb69489c7ba79e3c40602d8573f7b1250df4047f65f6f5cf6b6177d16bc15b0fe01198cea25e1bd945f1eb6c50aebdce982cc17019044564daabff3845296400619e2325704a7644dc310d31321693c883f8fb309fc0526e0aeb6056d187a3c00482b3369d72d1890764f1102818005d0a01ce83491112270b830ba02290f49506cd93b67424de7a83d2dca04e36755f2bc519e80b986498a5304a1ddaed145e24df2b0ce1e472ba452f793e5d27019d2fc2b9a59dfdab645d5b286b55b3e4018d320964dc3c797521112a31ba967f702013753a7929ebe84b907d2af2f5884a27f21b14d0efeba288f7faaa5213b02818041b0c4f942a46d83f3d3c7bf3dc93754391aa4b4b85f3142f795ee50a31b38e1e76b641a1bdeb6660e0197aa9e6ad27495b596f089cb10fad2aac8d6bb7d6c5a5c102550f264739a54e466cea72d12070e5c4d2402e1e352676b55d4c2bf4e12ffaa4b2a711f03eaac00a446e8fc108cce02726aa1427e5740e3ce534fca3790";
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            privateKey: hexToBytes(privateKey),
        });
        expect(keys.publicKey).to.be.ok;
        expect(keys.familyName).to.be.ok;
        expect(keys.keyType).to.be.ok;
        expect(keys.address).to.be.ok;
        expect(keys.privateKeyHex).to.be.equal("308204a30201000282010100b7351b8f442a2fe2f68f74681fc690949bc0bfef286d0690fedd203858cc29e4a980cab0b50891ff4cd63e75f7e050550fba07277b935162ff427d6e3a5ea2176cf536b3f296480bf74708012c6d467cf6885efc4598712ff203f7e0c9465acee09c60bc0e4e72780d9ac470b89c6e1064a22e45a7509abcb4f1ff05471a68142f043c8a6d10e15b1a81c595ca108678fbd46f62dbcbeb82b8d518ee60e4159a67aae1b237312d0cb26f86df3c71ce01be2537623d17729437ee15bb52c62fb2dd5a3f6f0757b13dcd2cd8d286ef0dc5f2e3f5f70309d6461a109b2a311dbdfc7e62778325ee0f3782ab3a2645c0cd0ff662ae8648440a0ed78561a1075f897f02030100010282010100b453fec37e89b3c6c77f9e499af53c7c39ee783d33e2547345996bcc6a82d2bd72a6055bf764ef27867edece08e4eecd3b049564247b75c166951096fdb705fedecd6241af0682f5dc383b45c46feed0b36cb969c02af346090624e749d6092dd5e1b649841f6d06840591538e32d31729a684bb249bef22cd4be10355e0450de67d22f04284df074842ba8f9acd66ef97ae6428f160108e1f574982924b5dbd3a64195b30ff08c62ac7a42fe7ed1c52fda6ff11fa024f49c8e55afe60156b5b2fc34d5576d9ba7480e7ad092faa84e13edfb2c40cd89506ec0b4c897ebb494140a0216b11acc3a3940561e609808f0068efb9ae9cf0d1eebcb4457e44f62f7902818100da33d9ce0c5420cfdc7f9f067501245d251f1fbc547b19b5a82e82847b418bccf2b9d5f7d0ef52c870f1c917086108173c793174971383fd9904cca3d4236a99ce72ebf5a0fa3a6cc492214d404a2015c6bb2af5d2e7560ed06cb72a6679f5ec6c4bf78a9bd542bad07ba44c090ffb499d9c2cae0a090c158cee17c4878db7b502818100d6f16809496ae2ef530086336e4bd045a62624561776362b4f941e535729eefe9b5f30b5c24066a9606526fa7f1b63552555e2fa3057a7d212b28d32842c3b301e7a70b5234cb320378621d6c37c05b7ffddcffa6e5cff794ce8cf715ee7f620b103ee49c37ca583b3afa7b69c15a99cf26dfd6da72a59336c9f10ed1b1d94e302818075e7168573bbf18edf82461763199ee085b26f9f7fb69489c7ba79e3c40602d8573f7b1250df4047f65f6f5cf6b6177d16bc15b0fe01198cea25e1bd945f1eb6c50aebdce982cc17019044564daabff3845296400619e2325704a7644dc310d31321693c883f8fb309fc0526e0aeb6056d187a3c00482b3369d72d1890764f1102818005d0a01ce83491112270b830ba02290f49506cd93b67424de7a83d2dca04e36755f2bc519e80b986498a5304a1ddaed145e24df2b0ce1e472ba452f793e5d27019d2fc2b9a59dfdab645d5b286b55b3e4018d320964dc3c797521112a31ba967f702013753a7929ebe84b907d2af2f5884a27f21b14d0efeba288f7faaa5213b02818041b0c4f942a46d83f3d3c7bf3dc93754391aa4b4b85f3142f795ee50a31b38e1e76b641a1bdeb6660e0197aa9e6ad27495b596f089cb10fad2aac8d6bb7d6c5a5c102550f264739a54e466cea72d12070e5c4d2402e1e352676b55d4c2bf4e12ffaa4b2a711f03eaac00a446e8fc108cce02726aa1427e5740e3ce534fca3790");
    });

    it('Construct RemmeKeys based on publicKey RSA', async () => {
        const publicKey = "30820122300d06092a864886f70d01010105000382010f003082010a028201010099ced98a46811cf421dad9520db5c40f6b0d5b5a6cc66aaf587b587d5f6ede1fefa5ce236ef9576da2a626eeb718080fa1a9f8ba2b964f8e359216432f360252aaf830db8bc3281e37be6da4a4d462fc098fddeca3fb945897b3fd4ba339894ffd489074e6646fd61d29136906c293a4b2c135a90de00641f223f2010b1ad602589fa99b8b0112c5cb2f608fa24dcd6b407a497953d8fa6e4cf62e6010f092b92c48466492b34e817e2bcccf0eeb6f9e1a1611750eae26494d09dc5e87e702d7369e5dc6c4ad15c8c815c79bdaba4d36360eec53450af2f87238d416028536f9e56a28014953e9b9e7a79eda2f51898570d0cb91459362308993fd5c25abe68d0203010001";
        const keys = await Remme.Keys.construct({
            keyType: KeyType.RSA,
            publicKey: hexToBytes(publicKey),
        });
        expect(keys.address).to.be.ok;
        expect(keys.familyName).to.be.ok;
        expect(keys.keyType).to.be.ok;
        expect(keys.publicKeyHex).to.be.equal("30820122300d06092a864886f70d01010105000382010f003082010a028201010099ced98a46811cf421dad9520db5c40f6b0d5b5a6cc66aaf587b587d5f6ede1fefa5ce236ef9576da2a626eeb718080fa1a9f8ba2b964f8e359216432f360252aaf830db8bc3281e37be6da4a4d462fc098fddeca3fb945897b3fd4ba339894ffd489074e6646fd61d29136906c293a4b2c135a90de00641f223f2010b1ad602589fa99b8b0112c5cb2f608fa24dcd6b407a497953d8fa6e4cf62e6010f092b92c48466492b34e817e2bcccf0eeb6f9e1a1611750eae26494d09dc5e87e702d7369e5dc6c4ad15c8c815c79bdaba4d36360eec53450af2f87238d416028536f9e56a28014953e9b9e7a79eda2f51898570d0cb91459362308993fd5c25abe68d0203010001");
    });

});

describe("ECDCA", async () =>{

    it("Should create ECDSA Key Pair", async () => {
        const { privateKey, publicKey } = await Remme.Keys.generateKeyPair(KeyType.ECDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.ECDSA,
            privateKey,
            publicKey
        });
        const { privateKeyHex, publicKeyHex } = keys;
        expect(!!publicKeyHex && !!privateKeyHex).to.be.true;
    });

    it('ECDSA publicKeyHex should be valid', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.ECDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.ECDSA,
            privateKey,
            publicKey
        });
        const {publicKeyHex} = keys;
        expect(publicKeyHex).match(/^[a-f0-9]{66}$/);

    });

    it('ECDSA privateKeyHex should be valid', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.ECDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.ECDSA,
            privateKey,
            publicKey
        });
        const {privateKeyHex} = keys;
        expect(privateKeyHex).match(/^[a-f0-9]{64}$/);
    });

    it('ECDSA privateKeyHex should be valid', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.ECDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.ECDSA,
            privateKey,
            publicKey
        });
        const {privateKeyHex} = keys;
        expect(privateKeyHex).match(/^[a-f0-9]{64}$/);
    });

    it('privateKeyHex && publicKeyHex ECDSA should be a string', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.ECDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.ECDSA,
            privateKey,
            publicKey
        });
        const {privateKeyHex, publicKeyHex} = keys;
        expect(privateKeyHex && publicKeyHex).to.be.a('string');
    });

    it('privateKey && publicKey ECDSA should be Uint8Array', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.ECDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.ECDSA,
            privateKey,
            publicKey,
        });
        expect(privateKey && publicKey).to.be.a('Uint8Array');
    });

    it('Construct RemmeKeys based on privateKey ECDSA', async () =>  {
        const privateKey = "30820122300d06092a864886f70d01010105000382010f003082010a02820101";
        const keys = await Remme.Keys.construct({
            keyType: KeyType.ECDSA,
            privateKey: hexToBytes(privateKey),
        });
        expect(keys.publicKey).to.be.ok;
        expect(keys.familyName).to.be.ok;
        expect(keys.keyType).to.be.ok;
        expect(keys.address).to.be.ok;
        expect(keys.privateKeyHex).to.be.equal("30820122300d06092a864886f70d01010105000382010f003082010a02820101");
    });

    it('Construct RemmeKeys based on publicKey ECDSA', async () => {
        const publicKey = "032355cf1c7b9c7695bbefac49b5b6b81ad27b6c99589e9496b5d1c96a14717d25";
        const keys = await Remme.Keys.construct({
            keyType: KeyType.ECDSA,
            publicKey: hexToBytes(publicKey),
        });
        expect(keys.address).to.be.ok;
        expect(keys.familyName).to.be.ok;
        expect(keys.keyType).to.be.ok;
        expect(keys.publicKeyHex).to.be.equal("032355cf1c7b9c7695bbefac49b5b6b81ad27b6c99589e9496b5d1c96a14717d25");
    });

});

describe("EdDCA", async () =>{

    it("Should create EdDSA Key Pair", async() => {
        const { privateKey, publicKey } = await Remme.Keys.generateKeyPair(KeyType.EdDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.EdDSA,
            privateKey,
            publicKey
        });
        const { privateKeyHex, publicKeyHex } = keys;
        expect(!!publicKeyHex && !!privateKeyHex).to.be.true;
    });

    it('EdDSA publicKeyHex should be valid', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.EdDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.EdDSA,
            privateKey,
            publicKey });
        const {publicKeyHex} = keys;
        expect(publicKeyHex).match(/^[a-f0-9]{64}$/);
    });

    it('EdDSA privateKeyHex should be valid', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.EdDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.EdDSA,
            privateKey,
            publicKey
        });
        const {privateKeyHex} = keys;
        expect(privateKeyHex).match(/^[a-f0-9]{128}$/)
    });

    it('privateKeyHex && publicKeyHex EdDSA should be a string', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.EdDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.EdDSA,
            privateKey,
            publicKey,
        });
        const {privateKeyHex, publicKeyHex} = keys;
        expect(privateKeyHex && publicKeyHex).to.be.a('string');
    });

    it('privateKey && publicKey EdDSA should be Uint8Array', async () => {
        const {privateKey, publicKey} = await Remme.Keys.generateKeyPair(KeyType.EdDSA);
        const keys = await Remme.Keys.construct({
            keyType: KeyType.EdDSA,
            privateKey,
            publicKey,
        });
        expect(privateKey && publicKey).to.be.a('Uint8Array');
    });

    it('Construct RemmeKeys based on privateKey EdDSA', async () => {
        const privateKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f";
        const keys = await Remme.Keys.construct({
            keyType: KeyType.EdDSA,
            privateKey: hexToBytes(privateKey),
        });
        expect(keys.address).to.be.ok;
        expect(keys.publicKey).to.be.ok;
        expect(keys.familyName).to.be.ok;
        expect(keys.keyType).to.be.ok;
        expect(keys.privateKeyHex).to.be.equal("30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f");
    });

    it('Construct RemmeKeys based on publicKey EdDSA', async () => {
        const publicKey = "9c1746fc3f8061e87f34c59020bb0132def7a55389ada32f620a0176b4ea7aff";
        const keys = await Remme.Keys.construct({
            keyType: KeyType.EdDSA,
            publicKey: hexToBytes(publicKey),
        });
        expect(keys.address).to.be.ok;
        expect(keys.familyName).to.be.ok;
        expect(keys.keyType).to.be.ok;
        expect(keys.publicKeyHex).to.be.equal("9c1746fc3f8061e87f34c59020bb0132def7a55389ada32f620a0176b4ea7aff");
    });
});

describe("Addresses from key", async () =>{

    it('Get Address From PublicKey RSA in format string', async () => {
        const publicKey = "30820122300d06092a864886f70d01010105000382010f003082010a028201010099ced98a46811cf421dad9520db5c40f6b0d5b5a6cc66aaf587b587d5f6ede1fefa5ce236ef9576da2a626eeb718080fa1a9f8ba2b964f8e359216432f360252aaf830db8bc3281e37be6da4a4d462fc098fddeca3fb945897b3fd4ba339894ffd489074e6646fd61d29136906c293a4b2c135a90de00641f223f2010b1ad602589fa99b8b0112c5cb2f608fa24dcd6b407a497953d8fa6e4cf62e6010f092b92c48466492b34e817e2bcccf0eeb6f9e1a1611750eae26494d09dc5e87e702d7369e5dc6c4ad15c8c815c79bdaba4d36360eec53450af2f87238d416028536f9e56a28014953e9b9e7a79eda2f51898570d0cb91459362308993fd5c25abe68d0203010001";
        const address = Remme.Keys.getAddressFromPublicKey(KeyType.RSA, hexToBytes(publicKey));
        expect(address).to.be.ok;
        expect(address).to.be.a('string');

    });

    it('Get Address From PublicKey ECDSA in format string', async () => {
        const publicKey = "032355cf1c7b9c7695bbefac49b5b6b81ad27b6c99589e9496b5d1c96a14717d25";
        const address = Remme.Keys.getAddressFromPublicKey(KeyType.ECDSA, hexToBytes(publicKey));
        expect(address).to.be.ok;
        expect(address).to.be.a('string');
    });

    it('Get Address From PublicKey EdDSA in format string', async () => {
        const publicKey = "9c1746fc3f8061e87f34c59020bb0132def7a55389ada32f620a0176b4ea7aff";
        const address = Remme.Keys.getAddressFromPublicKey(KeyType.EdDSA, hexToBytes(publicKey));
        expect(address).to.be.ok;
        expect(address).to.be.a('string');
    });

    it('Addresses are the same when the same RSA public keys are used', async () => {
        const publicKey = "30820122300d06092a864886f70d01010105000382010f003082010a028201010099ced98a46811cf421dad9520db5c40f6b0d5b5a6cc66aaf587b587d5f6ede1fefa5ce236ef9576da2a626eeb718080fa1a9f8ba2b964f8e359216432f360252aaf830db8bc3281e37be6da4a4d462fc098fddeca3fb945897b3fd4ba339894ffd489074e6646fd61d29136906c293a4b2c135a90de00641f223f2010b1ad602589fa99b8b0112c5cb2f608fa24dcd6b407a497953d8fa6e4cf62e6010f092b92c48466492b34e817e2bcccf0eeb6f9e1a1611750eae26494d09dc5e87e702d7369e5dc6c4ad15c8c815c79bdaba4d36360eec53450af2f87238d416028536f9e56a28014953e9b9e7a79eda2f51898570d0cb91459362308993fd5c25abe68d0203010001";
        const address1 = Remme.Keys.getAddressFromPublicKey(KeyType.RSA, hexToBytes(publicKey));
        const address2 = Remme.Keys.getAddressFromPublicKey(KeyType.RSA, hexToBytes(publicKey));
        expect(address1).to.equal(address2);

    });

    it('Addresses are the same when the same ECDSA public keys are used', async () => {
        const publicKey = "a23be1a667ff147616b8a8c28dc0ca056f26e3daa45459397eb7a7a2e4cc0518608e49";
        const address1 = Remme.Keys.getAddressFromPublicKey(KeyType.ECDSA, hexToBytes(publicKey));
        const address2 = Remme.Keys.getAddressFromPublicKey(KeyType.ECDSA, hexToBytes(publicKey));
        expect(address1).to.equal(address2);
    });

    it('Addresses are the same when the same EdDSA public keys are used', async () => {
        const publicKey = "a23be134740f335aead4c518caf11a10c10a45e63deea20af2dccf8864481532c365c4";
        const address1 = Remme.Keys.getAddressFromPublicKey(KeyType.EdDSA, hexToBytes(publicKey));
        const address2 = Remme.Keys.getAddressFromPublicKey(KeyType.EdDSA, hexToBytes(publicKey));
        expect(address1).to.equal(address2);
    });

    it('Addresses should be the same with one publicKey', async () => {
        const publicKey = "123";
        const address1 = Remme.Keys.getAddressFromPublicKey(KeyType.RSA, hexToBytes(publicKey));
        const address2 = Remme.Keys.getAddressFromPublicKey(KeyType.ECDSA, hexToBytes(publicKey));
        const address3 = Remme.Keys.getAddressFromPublicKey(KeyType.EdDSA, hexToBytes(publicKey));
        expect(address1).to.equal(address2);
        expect(address2).to.equal(address3);
    });
});










