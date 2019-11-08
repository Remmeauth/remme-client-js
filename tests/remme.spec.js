const expect  = require('chai').expect;
const Remme = require("../packages/remme");
const {RemmeKeys, KeyType} = require("../packages/remme-keys");

describe("Remme", function() {

  it("Create an instance [not a valid NodeAddress]", async () => {
    expect(() => {
        new Remme.Client({
          networkConfig: {
            nodeAddress: "http://test",
          },
        });
    }).throw("You try construct with invalid nodeAddress");
  });
});
