var forge = require("remme-utils").forge;

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