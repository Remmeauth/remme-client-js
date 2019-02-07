const expect  = require('chai').expect;
const Remme = require("../packages/remme");

describe("Remme", function() {
  it("Create an instance [not a valid NodeAddress]", async () => {
    expect(() => {
        new Remme.Client({
          networkConfig: {
            nodeAddress: "test"
          }
        });
    }).throw("You try construct with invalid nodeAddress")
  });
});
