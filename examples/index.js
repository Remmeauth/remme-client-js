const Remme = require("../packages/remme");
// const Remme = require("remme");
// import Remme from "remme";

//Addresses of Docker container ports
const nodeAddress = "192.168.88.242:8080";
const socketAddress = "192.168.88.242:9080";

//Initialize client
// const remme = new Remme.Client() <-- nodeAddress = localhost:8080, socketAddress = localhost:9080 by default
const remme = new Remme.Client(nodeAddress, socketAddress);
const someRemmeAddress = "0306796698d9b14a0ba313acc7fb14f69d8717393af5b02cc292d72009b97d8759";

(async () => {
  // Token Operations
  const balance = await remme.token.getBalance(someRemmeAddress);
  console.log(`Account ${someRemmeAddress} balance - ${balance} REM`); // 1

  const transactionResult = await remme.token.transfer(someRemmeAddress, 100);
  console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`); // 2

  const transactionCallback = async (err, result) => {
    if (err) return;
    console.log("token", result);
    const newBalance = await remme.token.getBalance(someRemmeAddress);
    console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
    transactionResult.closeWebSocket()
  }; // 6

  transactionResult.connectToWebSocket(transactionCallback); // 3

  // Certificates Operations

  const certificateTransactionResult = await remme.certificate.createAndStoreCertificate({
    commonName: "userName1",
    email: "user@email.com",
    name: "John",
    surname: "Smith",
    countryName: "US",
    validity: 360
  }); // 4

  const certificateTransactionCallback = async (err, response) => {
    if (err) return;
    console.log("certificate", response);
    console.log(`Certificate was saved on REMchain at block number: ${response.block_number}`);
    const certificateStatus = await remme.certificate.checkCertificate(certificateTransactionResult.certificate);
    console.log(`Certificate IsValid = ${certificateStatus}`);
    certificateTransactionResult.closeWebSocket();
  }; // 7

  certificateTransactionResult.connectToWebSocket(certificateTransactionCallback); // 5
})();