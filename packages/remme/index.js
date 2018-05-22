var Remme = require("./dist/index");
var forge = require("remme-utils");

const remme = new Remme.Client();

(async () => {
  try {
    const response = await remme.certificate.createAndStoreCertificate("Test", "test@test.com");
    console.log(response);
  } catch (e) {
    console.log(e);
  }
  //
  // await remme.certificate.revokeCertificate(response)
  //
  // status = await remme.certificate.checkCertificate(response);
  // console.log(status);
})();