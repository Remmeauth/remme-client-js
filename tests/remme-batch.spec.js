var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var chaiMatch = require("chai-match");
chai.use(chaiAsPromised);
chai.use(chaiMatch);
chai.should();

describe("RemmeBatch", function() {
  this.timeout(15000);
  beforeEach(() => {
    window.onbeforeunload = () => 'Oh no!';
  });

  it("get status [batch id is not a valid]", async () => {
    const { batch } = new Remme.Client();
    const batchId = "not a valid batch id";
    await batch.getStatus(batchId).should.be.rejectedWith("Given batchId is not a valid");
  });

  it("get status [all good]", async () => {
    const { batch } = new Remme.Client();
    const batchId = "ad7832fcd5fcd68cfd7543fadfadfa8dfaa89fa8df887fd8a7d6786d65fa46cbacbddafdbcdf6768d7cfd54fa6d54fa65d4fa465d6f54ad65fa65d4fa65d4ad6";
    const { status } = await batch.getStatus(batchId);
    status.should.be.a("string");
  })
});