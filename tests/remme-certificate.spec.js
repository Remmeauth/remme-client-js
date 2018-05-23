var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe("RemmeCertificate", () => {
  beforeEach(() => {
    window.onbeforeunload = () => 'Oh no!';
  });

  it("Create and store certificate [Validity reject]", async () => {
    const { certificate } = new Remme.Client();
    expect(certificate.createAndStoreCertificate({
      commonName: "userName1",
      email: "user@email.com",
      name: "John",
      surname: "Smith",
      countryName: "US"
    })).to.be.rejectedWith("Attribute validity must have a value");
  });

  it("Create and store certificate [commonName reject]", async () => {
    const { certificate } = new Remme.Client();
    expect(certificate.createAndStoreCertificate({
      email: "user@email.com",
      name: "John",
      surname: "Smith",
      countryName: "US",
      validity: 360
    })).to.be.rejectedWith("Attribute commonName must have a value");
  });

});