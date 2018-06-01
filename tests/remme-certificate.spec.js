var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe("RemmeCertificate", function() {
  this.timeout(15000);
  beforeEach(() => {
    window.onbeforeunload = () => 'Oh no!';
  });

  it("Create and store certificate [validity reject]", async () => {
    const { certificate } = new Remme.Client();
    await certificate.createAndStore({
      commonName: "userName1",
    }).should.be.rejectedWith("Attribute validity must have a value");
  });


  it("Create and store certificate [commonName reject]", async () => {
    const { certificate } = new Remme.Client();
    await certificate.createAndStore({
      validity: 360
    }).should.be.rejectedWith("Attribute commonName must have a value");
  });

  it("Create and store certificate [check returning object]", async () => {
    const { certificate } = new Remme.Client();
    const result = await certificate.createAndStore({
      commonName: "userName1",
      validity: 360
    });
    result.should.have.property("batchId").not.equal(undefined);
    result.should.have.property("certificate").not.equal(undefined);
    result.should.have.property("connectToWebSocket");
    result.should.have.property("closeWebSocket");
  });

  it("Check certificate [true]", async () => {
    const { certificate } = new Remme.Client();
    const certificateTransactionResult = await certificate.createAndStore({
      commonName: "userName1",
      email: "user@email.com",
      name: "John",
      surname: "Smith",
      countryName: "US",
      validity: 360
    });

    const certificateStatusTrue = await certificate.check(certificateTransactionResult.certificate);
    certificateStatusTrue.should.equal(true);
  });

  it("Check certificate [not valid]", async () => {
    const { certificate } = new Remme.Client();
    await certificate.check({
      bad: "certificate"
    }).should.be.rejectedWith("Given certificate is not a valid");
  });

  it("Revoke certificate [not valid]", async () => {
    const { certificate } = new Remme.Client();
    await certificate.revoke({
      bad: "certificate"
    }).should.be.rejectedWith("Given certificate is not a valid");
  });

  it("Sign and store certificate [not valid]", async () => {
    const { certificate } = new Remme.Client();
    await certificate.signAndStore({
      bad: "certificate"
    }).should.be.rejectedWith("Given certificate is not a valid");
  });

  it("Store certificate [not implemented]", async () => {
    const { certificate } = new Remme.Client();
    await certificate.store({
      bad: "certificate"
    }).should.be.rejectedWith("not implemented");
  });

});