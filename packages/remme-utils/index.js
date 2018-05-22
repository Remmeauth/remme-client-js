// var BaseTransactionResponse = require("./dist/index").BaseTransactionResponse;
//
// var socket = new BaseTransactionResponse("ws://0.0.0.0:9080/ws");
//
// socket.batchId = "invalid";
// console.log("callback", data);
// socket.connectToWebSocket((err, data) => {
//   console.log("error " + err);
// });
var forge = require("./dist/index").forge;

var csr = forge.pki.createCertificationRequest();
var keys = forge.rsa.generateKeyPair();
csr.publicKey = keys.publicKey;
var attrs = [{
  name: 'commonName',
  value: 'example.org'
}, {
  name: 'countryName',
  value: 'US'
}, {
  shortName: 'ST',
  value: 'Virginia'
}, {
  name: 'localityName',
  value: 'Blacksburg'
}, {
  name: 'organizationName',
  value: 'Test'
}, {
  shortName: 'OU',
  value: 'Test'
}];
csr.setSubject(attrs);
csr.sign(keys.privateKey);
console.log(forge.pki.certificationRequestToPem(csr));

