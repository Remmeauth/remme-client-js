var expect = chai.expect;

describe("RemmeHttpClient", () => {
  it("return answer", async () => {
    var options = {
      url: "localhost:8080/certificate/store",
      method: "POST",
      data: {
        certificate: "bad example"
      }
    };
    var result = await HttpClient.send(options);
    expect(result.status).toEqual(500)
  })
});