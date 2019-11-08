const {forge} = require("../packages/remme-utils");
const expect = require("chai").expect;
const Remme = require("../packages/remme");
const { certificateToPem, certificateFromPem, privateKeyToPem,publicKeyToPem, toHex} = require ("../packages/remme-utils");

describe("Certificate", async certificateDataToCreate => {

    it('Create a new certificate', async () => {
        const user = new Remme.Client();
        const certificate = await user.certificate.create({
            commonName: 'test',
            email: 'test',
            countryName: 'test',
            localityName: 'test',
            postalAddress: 'test',
            postalCode: 'test',
            streetAddress: 'test',
            stateName: 'test',
            name: 'test',
            surname: 'test',
            pseudonym: 'test',
            generationQualifier: 'test',
            title: 'test',
            serial: `${Date.now()}`,
            businessCategory: 'test',
            validity: 360,
            validAfter: 22,
        });
    });

    it("Certificate's Attribute (commonName, serial, validity) must have a value", async () => {
        const user = new Remme.Client();
        const cert = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });
    });

    it("Certificate's algorithm - sha256", async () => {
        const user = new Remme.Client();
        const cert = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });
        expect(cert.md.algorithm).to.equal('sha256');
    });

    it("Certificate's algorithm sha256 must be length = 64", async () => {
        const user = new Remme.Client();
        const cert = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });
        expect(cert.md.blockLength).to.equal(64);
    });

    it("User's familyName in account should be 'account'", async () => {
        const user = new Remme.Client();
        const cert = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });
        expect(user.account.familyName).to.equal('account');
    });

    it("User's publicKeyHex in account should be in Hex format", async () => {
        const user = new Remme.Client();
        const cert = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });
        expect(user.account.publicKeyHex).match(/^[a-f0-9]{66}$/);
    });

    it("User's privateKeyHex in account should be in Hex format", async () => {
        const user = new Remme.Client();
        const cert = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });
        expect(user.account.privateKeyHex).match(/^[a-f0-9]{64}$/);
    });

    it("User's privateKeyHex in account should be in Hex format", async () => {
        const user = new Remme.Client();
        const cert = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });
        expect(user.account.address).match(/^[a-f0-9]{70}$/);
    });

    it("User's keyType in account should be a ECDSA", async () => {
        const user = new Remme.Client();
        const cert = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });
        expect(user.account.keyType).to.equal('ecdsa');
    });

    it('Certificate in Pem format should be a string', async () => {
        const user = new Remme.Client();
        const certificate = await user.certificate.create({
            commonName: 'test',
            email: 'test',
            countryName: 'test',
            localityName: 'test',
            postalAddress: 'test',
            postalCode: 'test',
            streetAddress: 'test',
            stateName: 'test',
            name: 'test',
            surname: 'test',
            pseudonym: 'test',
            generationQualifier: 'test',
            title: 'test',
            serial: `${Date.now()}`,
            businessCategory: 'test',
            validity: 360,
            validAfter: 22,
        });

        const certToPem = await certificateToPem(certificate);
        expect(certToPem).to.be.a('string');
    });

    it('Certificates with the same values will be different in PEM format', async () => {
        const user1 = new Remme.Client();
        const certificate1 = await user1.certificate.create({
            commonName: 'test',
            email: 'test',
            countryName: 'test',
            localityName: 'test',
            postalAddress: 'test',
            postalCode: 'test',
            streetAddress: 'test',
            stateName: 'test',
            name: 'test',
            surname: 'test',
            pseudonym: 'test',
            generationQualifier: 'test',
            title: 'test',
            serial: `${Date.now()}`,
            businessCategory: 'test',
            validity: 360,
            validAfter: 22,
        });
        const certToPem1 = certificateToPem(certificate1);

        const certificate2 = await user1.certificate.create({
            commonName: 'test',
            email: 'test',
            countryName: 'test',
            localityName: 'test',
            postalAddress: 'test',
            postalCode: 'test',
            streetAddress: 'test',
            stateName: 'test',
            name: 'test',
            surname: 'test',
            pseudonym: 'test',
            generationQualifier: 'test',
            title: 'test',
            serial: `${Date.now()}`,
            businessCategory: 'test',
            validity: 360,
            validAfter: 22,
        });
        const certToPem2 = certificateToPem(certificate2);
        expect(certToPem1).to.not.equal(certToPem2);
    });

    it('Get certificate from Pem format', async () => {
        const user = new Remme.Client();
        const certificatePem = '-----BEGIN CERTIFICATE-----\n' +
            'MIIDgjCCAmqgAwIBAgIHAVclKCVndzANBgkqhkiG9w0BAQsFADAAMB4XDTE5MTEy\n' +
            'MjEzMjQyMFoXDTIwMTAxNjEyMjQyMFowggEBMQ0wCwYDVQQDEwR0ZXN0MRMwEQYJ\n' +
            'KoZIhvcNAQkBEwR0ZXN0MQ0wCwYDVQQGEwR0ZXN0MQ0wCwYDVQQHEwR0ZXN0MQ0w\n' +
            'CwYDVQQQEwR0ZXN0MQ0wCwYDVQQREwR0ZXN0MQswCQYBABMEdGVzdDENMAsGA1UE\n' +
            'CBMEdGVzdDENMAsGA1UEKhMEdGVzdDENMAsGA1UEBBMEdGVzdDENMAsGA1UEQRME\n' +
            'dGVzdDELMAkGAQATBHRlc3QxDTALBgNVBAwTBHRlc3QxFDASBgEAEw0xNTcyNTI4\n' +
            'MjU2Nzc3MQ0wCwYDVQQPEwR0ZXN0MQowCAYBABMDMzYwMQkwBwYBABMCMjIwggEi\n' +
            'MA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDQC94Pxvv2rvVMcQIK3CxYcaPr\n' +
            'AOq/qqpR3Ytj0k4nA8Qm3UqBApcVaNREu6p+peuhkeZRB8UT5L+1u+EuJs4ryMQ+\n' +
            'Cur/TgZ+NAr9gphY13pKwlUwM+UOJtAimzNXn4KZ0/Ukht/gAOuWfdAPgWke1Yrl\n' +
            '7lrHlwgDKBR62w2SugOZH+D0oXu0SGhmVDSGFW5mln8o9PxlDPsome2liCMMavam\n' +
            'a0SevcTJGcjTiASz+cjBCRtsMVDvcnyUrBJmnOk5tF48Y4k/FoAflnJkTA0riMe3\n' +
            'R4cNFV46laZDtGvugnQEm5HfjmltD24AARduMpj/OKO3fqn5nlJNfJoQfBobAgMB\n' +
            'AAEwDQYJKoZIhvcNAQELBQADggEBAEfdK8kxT6VYERhLe6qzRujSrjOSKwoHFLLF\n' +
            'P2uqazzpNF3F74j5eY/TMJeS8j1aGHdUUpNXsyOavAEnz3qLtpJYN6CyyZ84NbDt\n' +
            'QFoXrpMF6AZHa+PTCCkHFdaUZH0OEH71SC7x+ZalkctWo3sB0T1RtjJA0uic05vE\n' +
            'qFV3qTzO8Tqx5vRgycQdjVCa8XXuY7ikkX6Hwanu8juBqT9XsBtk3sl5bS3iDwg6\n' +
            'scKbbsOO0uYrazoRzeNB9l/kTDAfOFR3kl124ufX1EtCBcrCKp/o3qRDYRMk/hAL\n' +
            'eCS+0VWfzLGcqodMNvir/rGolIPJCEiIY/EdFBNxnT0MIcFAvfs=\n' +
            '-----END CERTIFICATE-----\n';
        const certFromPem = certificateFromPem(certificatePem);
    });

    it('Serials numbers of certificates after and before PEM should be the same ', async () => {
        const user = new Remme.Client();
        const cert1 = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });

        const certToPem = certificateToPem(cert1);
        const cert2 = certificateFromPem(certToPem);
        expect(cert1.serialNumber).to.equal(cert2.serialNumber);
    });

    it('Signatures of certificates after and before PEM should be the same ', async () => {
        const user = new Remme.Client();
        const cert1 = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });

        const certToPem = certificateToPem(cert1);
        const cert2 = certificateFromPem(certToPem);
        expect(cert1.signature).to.equal(cert2.signature);
    });

    it(' Signature Oid of certificates after and before PEM should be the same ', async () => {
        const user = new Remme.Client();
        const cert1 = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });

        const certToPem = certificateToPem(cert1);
        const cert2 = certificateFromPem(certToPem);
        expect(cert1.signatureOid).to.equal(cert2.signatureOid);
    });

    it(' Versions of certificates after and before PEM should be the same ', async () => {
        const user = new Remme.Client();
        const cert1 = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });

        const certToPem = certificateToPem(cert1);
        const cert2 = certificateFromPem(certToPem);
        expect(cert1.version).to.equal(cert2.version);
    });

    it("Issuer's hash before PEM should be a null ", async () => {
        const user = new Remme.Client();
        const cert1 = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });
        expect(cert1.issuer.hash).to.be.a('null');
    });

    it("Issuer's hash after PEM must have a value ", async () => {
        const user = new Remme.Client();
        const cert1 = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });
        const certToPem = certificateToPem(cert1);
        const cert2 = certificateFromPem(certToPem);
        expect(cert2.issuer.hash).to.be.ok;
    });

    it('PublicKeys (in PEM) should be the same before and after converting certificate in PEM format', async () => {
        const user = new Remme.Client();
        const certificate = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });

        const publicKeyInPem1 = publicKeyToPem(certificate.publicKey);

        const certToPem = certificateToPem(certificate);
        const certFromPem = certificateFromPem(certToPem);

        const publicKeyInPem2 = publicKeyToPem(certFromPem.publicKey);

        expect(publicKeyInPem1).to.equal(publicKeyInPem2);
    });

    it('Private key is undefined after converting certificate from PEM format', async () => {
        const user = new Remme.Client();
        const certificate = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });

        const certToPem = certificateToPem(certificate);
        const certFromPem = certificateFromPem(certToPem);

        expect(certFromPem.privateKey).to.equal(undefined);
    });

    it('PublicKeys (in HEX) should be the same before and after converting certificate in PEM format', async () => {
        const user = new Remme.Client();
        const certificate = await user.certificate.create({
            commonName: 'test',
            serial: `${Date.now()}`,
            validity: 360,
        });

        const publicKeyInPem1 = publicKeyToPem(certificate.publicKey);
        const publicKeyInHex1 = toHex(publicKeyInPem1);

        const certToPem = certificateToPem(certificate);
        const certFromPem = certificateFromPem(certToPem);

        const publicKeyInPem2 = publicKeyToPem(certFromPem.publicKey);
        const publicKeyInHex2 = toHex(publicKeyInPem2);

        expect(publicKeyInHex1).to.equal(publicKeyInHex2);
    });

    it('Get new remme client', async () => {
        const privateKeyHex = "7f752a99bbaf6755dc861bb4a7bb19acb913948d75f3b718ff4545d01d9d4f10";
        const networkConfig = {
            nodeAddress: "localhost",
            nodePort: "8080",
            sslMode: false,
        };
        const client = await new Remme.Client({privateKeyHex, networkConfig});
        expect(client).to.be.ok;
        console.log(client)
    });

});

