describe("RemmeHttpClient", () => {
  beforeEach(() => {
    window.onbeforeunload = () => 'Oh no!';
  });

  it("unsupported method", async () => {
    var options = {
      url: "http://localhost:8080/api/v1/certificate/store", // <-- real url to node rest api
      method: "POST",
      data: {
        certificate: "bad example"
      }
    };

    var result = await RemmeHttpClient.HttpClient.send(options);
    expect(result.status).to.equal(405);
    expect(result.statusText).to.equal("METHOD NOT ALLOWED");
  });

  it("unsupported entity", async () => {
    var options = {
      url: "http://localhost:8080/api/v1/certificate/store",
      method: "PUT",
      data: {
        certificate: "bad example"
      }
    };

    var result = await RemmeHttpClient.HttpClient.send(options);
    expect(result.status).to.equal(422);
    expect(result.statusText).to.equal("UNPROCESSABLE ENTITY");
  });

  it("all good", async () => { // BAD
    var options = {
      url: "http://localhost:8080/api/v1/certificate/store",
      method: "PUT",
      data: {
        certificate: "-----BEGIN CERTIFICATE REQUEST-----\nMIIBwzCCASwCAQAwgYIxEDAOBgNVBAMTB2FzZCBhc2QxCzAJBgNVBAYTAlVBMQ0w\nCwYDVQQIEwRLSUVWMQ0wCwYDVQQHEwRLaWV2MQ4wDAYDVQQKEwVSRU1NRTEPMA0G\nA1UECxMGRGV2b3BzMSIwIAYJKoZIhvcNAQkBExNkZW1vQHN0YWZmYm9va2VyLmNv\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCODhEtGwB5P3s+s6K4RVlIoDd6\nOqcWNYHs1SuV7UaWqX3h7klk52xC6jvgrEBH1Hv6jBWYUDnlC0VT0Picw51DTsXk\nSHNBbZX/k0NoloMbRN/uBRQgKGVTnGKG8pbweZoek3VBal8iBV7ciHB0oXU1SdCy\ns+f7zIxDfj/guPGS0QIDAQABoAAwDQYJKoZIhvcNAQEFBQADgYEAIwGKUh4iEFbV\n7KFpQAIOoqflo65EnTCwdKw8vOsqGPGAbC7aeX2L7drDdMadCQjYqmzEZ3mIi1tE\naftDLUBzDsM1Ugt4weZHT9injo7qXwzMlcULya/4Wh6ykOcr8XA/2MZtVZFTyPRN\nmxJsNRTv6EXkFzxtuSSEwbY5WQVBhuc=\n-----END CERTIFICATE REQUEST-----\n"
      }
    };

    var result = await RemmeHttpClient.HttpClient.send(options);
    expect(result.status).to.equal(200);
    expect(result.statusText).to.equal("OK");
  })
});