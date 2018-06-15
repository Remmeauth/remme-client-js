const Remme = require("../packages/remme");
// const Remme = require("remme");
// import Remme from "remme";

//Addresses of Docker container ports
const nodeAddress = "192.168.88.242:8080";
const socketAddress = "192.168.88.242:9080";

//Initialize client
const remme = new Remme.Client({
  privateKeyHex: "7f752a99bbaf6755dc861bb4a7bb19acb913948d75f3b718ff4545d01d9d4ff5",
});
const someRemmeAddress = "0306796698d9b14a0ba313acc7fb14f69d8717393af5b02cc292d72009b97d8759";
const account = remme.account;

(async () => {
  // Token Operations
  // const receiverBalance = await remme.token.getBalance(someRemmeAddress);
  // console.log(`Account ${someRemmeAddress} as receiver, balance - ${receiverBalance} REM`); // 1
  //
  // const balance = await remme.token.getBalance(account.publicKeyHex);
  // console.log(`Account ${account.publicKeyHex} as sender, balance - ${balance} REM`); // 1
  //
  // const transactionResult = await remme.token.transfer(someRemmeAddress, 100);
  // console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`); // 2
  //
  // const transactionCallback = async (err, result) => {
  //   if (err) return;
  //   console.log("token", result);
  //   const newBalance = await remme.token.getBalance(someRemmeAddress);
  //   console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
  //   transactionResult.closeWebSocket()
  // }; // 6
  //
  // transactionResult.connectToWebSocket(transactionCallback); // 3

  // Certificates Operations

  // const certificateTransactionResult = await remme.certificate.createAndStore({
  //   commonName: "userName1",
  //   email: "user@email.com",
  //   name: "John",
  //   surname: "Smith",
  //   countryName: "US",
  //   validity: 360
  // }); // 4
  //
  // const certificateTransactionCallback = async (err, response) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("certificate", response);
  //   const batch_status = await remme.batch.getStatus(certificateTransactionResult.batchId);
  //   console.log("status", batch_status);
  //   const certificateStatus = await remme.certificate.check(certificateTransactionResult.certificate);
  //   console.log(`Certificate IsValid = ${certificateStatus}`);
  //   certificateTransactionResult.closeWebSocket();
  // }; // 7
  //
  // certificateTransactionResult.connectToWebSocket(certificateTransactionCallback); // 5
  const swapId = "033102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce4831";
  const secretKey = "secretkey";
  const secretLock = "aa273f38cf1d9c0fda0ee67b08927278b368db5927e4bf4c0aac15b95ac12df6";

  const balance = await remme.token.getBalance(account.publicKeyHex);
  console.log(`Account ${account.publicKeyHex} as sender, balance - ${balance} REM`); // 1

  const init = await remme.swap.init({
    receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
    senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
    amount: 100,
    secretLockBySolicitor: secretLock,
    swapId,
    emailAddressEncryptedByInitiator: "0x656d61696c",
    createdAt: Math.floor(Date.now() / 1000)
  });

  init.connectToWebSocket(async (err, data) => {
    if (err) {
      console.log("err init", err);
    }
    console.log("data init", data);

    const res = await remme.swap.getInfo(swapId);
    console.log("after init info", res);
    init.closeWebSocket();

    const balance = await remme.token.getBalance(account.publicKeyHex);
    console.log(`Account ${account.publicKeyHex} as sender, balance - ${balance} REM`); // 1

    const pubkey = await remme.swap.getPublicKey();
    console.log(pubkey);

    // const setSecretLock = await remme.swap.setSecretLock(swapId, secretLock);
    // setSecretLock.connectToWebSocket(async (err, data) => {
    //   if (err) {
    //     console.log("set secret lock err", err);
    //   }
    //   console.log("data set secret lock", data);
    //
    //   const res = await remme.swap.getInfo(swapId);
    //   console.log("after set secret lock info", res);
    //   setSecretLock.closeWebSocket();

      // const approve = await remme.swap.approve(swapId);
      // approve.connectToWebSocket(async (err, data) => {
      //   if (err) {
      //     console.log("approve err", err);
      //   }
      //   console.log("data approve", data);
      //
      //   const res = await remme.swap.getInfo(swapId);
      //   console.log("after approve", res);
      //   approve.closeWebSocket();
      //
      //   const expire = await remme.swap.expire(swapId);
      //   expire.connectToWebSocket(async (err, data) => {
      //     if (err) {
      //       console.log("expire err", err);
      //     }
      //     console.log("data expire", data);
      //
      //     const res = await remme.swap.getInfo(swapId);
      //     console.log("after expire", res);
      //     expire.closeWebSocket();
      //
          const close = await remme.swap.close(swapId, secretKey);
          close.connectToWebSocket(async (err, data) => {
            if (err) {
              console.log("err close", err);
            }
            console.log("data close", data);
            const res = await remme.swap.getInfo(swapId);
            console.log("after close info", res);
            close.closeWebSocket();
      //     });
      //   })
      // })
    });
  });
  // const account = Remme.Client.generateAccount();
  // const payload = {
  //   value: 100,
  //   addressTo: someRemmeAddress
  // };
  //
  // const payloadBytes = cbor.encode(payload);
  // const transaction = await remme.transaction.create({
  //   familyName: 'token',
  //   familyVersion: '1.0',
  //   inputs: [],
  //   outputs: [],
  //   payloadBytes,
  // });
  // const transactionHeaderBytes = protobuf.TransactionHeader.encode({
  //   familyName: 'intkey',
  //   familyVersion: '1.0',
  //   inputs: [],
  //   outputs: [],
  //   signerPublicKey: account.publicKeyHex,
  //   // In this example, we're signing the batch with the same private key,
  //   // but the batch can be signed by another party, in which case, the
  //   // public key will need to be associated with that key.
  //   batcherPublicKey: "0292c364ef9ee51cb3749769b34c1d8998f72ce273a173a4e32433cc7cfb06c7f5",
  //   // In this example, there are no dependencies.  This list should include
  //   // an previous transaction header signatures that must be applied for
  //   // this transaction to successfully commit.
  //   // For example,
  //   // dependencies: ['540a6803971d1880ec73a96cb97815a95d374cbad5d865925e5aa0432fcf1931539afe10310c122c5eaae15df61236079abbf4f258889359c4d175516934484a'],
  //   dependencies: [],
  //   payloadSha512: createHash('sha512').update(payloadBytes).digest('hex')
  // }).finish();
  // const signature = account.sign(transactionHeaderBytes);
  // const transaction = protobuf.Transaction.encode({
  //   header: transactionHeaderBytes,
  //   headerSignature: signature,
  //   payload: payloadBytes
  // }).finish().toString("base64");
  // console.log(transaction);
  // try {
  //   const response = await axios.post("http://localhost:8080/api/v1/transaction", {
  //     transaction
  //   });
  // } catch(e) {
  //   console.log(e);
  // }
})();