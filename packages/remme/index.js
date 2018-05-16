var Remme = require("./dist/index");
var pki = require("remme-certificate/node_modules/node-forge").pki;

const remme = new Remme.Client();

(async () => {
  const response = await remme.certificate.createCertificate("Test", "test@test.com");
  console.log(response);

  let status = await remme.certificate.checkCertificate(pki.certificateFromPem(response.certificate));
  console.log(status);
  //
  // await remme.certificate.revokeCertificate(response)
  //
  // status = await remme.certificate.checkCertificate(response);
  // console.log(status);
})();