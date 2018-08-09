const Remme = require("../packages/remme");
const utils = require("../packages/remme-utils");
const { SwapEvents } = require("../packages/remme-atomic-swap");
// const Remme = require("remme");
// import Remme from "remme";

const pubKey = "03c75297511ce0cfd1315a045dd0db2a4a1710efed94f0f94ad993b5dfe2e33b62";
//Initialize client
const remme = new Remme.Client({
  privateKeyHex: "7f752a99bbaf6755dc861bb4a7bb19acb913948d75f3b718ff4545d01d9d4ff5",
  networkConfig: {
    nodeAddress: "localhost",
  }
});

const someRemmeAddress = "02926476095ea28904c11f22d0da20e999801a267cd3455a00570aa1153086eb13";
const account = remme.account;

(async () => {
  // BlockInfo
  // const blocks = await remme.blockchainInfo.getBlocks({ limit: "1" });
  // console.log(blocks);
  // const block = await remme.blockchainInfo.getBatchById(blocks.data[0].header_signature);
  // console.log(block);
  // const batches = await remme.blockchainInfo.getBatches({ reverse: true });
  // console.log(batches);
  // const batch = await remme.blockchainInfo.getBatchById(batches.data[0].header_signature);
  // console.log(batch);
  // const transactions = await remme.blockchainInfo.getTransactions({ reverse: true, start: "806cb7948367dfcfe4c043b6f59388f929ed7673bfc6063c3adeaf0eaed19a0d0c2e1698eb6143ab55e5897f5053b58e0c527d5e2b5862be34c5fe6ad82607c3"});
  // console.log(transactions);
  // const transaction = await remme.blockchainInfo.getTransactionById(transactions.data[1].header_signature);
  // console.log(transaction);
  // console.log(utils.base64ToArrayBuffer(transactions.data[1].payload));
  // console.log(transactions.data[1].payload);
  // console.log(transactions.data[1].transactionProtobuf.decode(utils.base64ToArrayBuffer(transactions.data[1].payload)));
  // console.log(transactions.data[1].protobuf.decode(transactions.data[1].transactionProtobuf.decode(utils.base64ToArrayBuffer(transactions.data[1].payload)).data));

  // Token Operations
  // const receiverBalance = await remme.token.getBalance(someRemmeAddress);
  // console.log(`Account ${someRemmeAddress} as receiver, balance - ${receiverBalance} REM`); // 1
  //
  // const balance = await remme.token.getBalance(account.publicKeyHex);
  // console.log(`Account ${account.publicKeyHex} as sender, balance - ${balance} REM`); // 1
  //
  // const transactionResult = await remme.token.transfer(someRemmeAddress, 1000000);
  // console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`); // 2
  //
  // const transactionCallback = async (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   if (result.status === "COMMITTED") {
  //     console.log("token", result);
  //     const newBalance = await remme.token.getBalance(someRemmeAddress);
  //     console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
  //     transactionResult.closeWebSocket()
  //   }
  // }; // 6
  //
  // transactionResult.connectToWebSocket(transactionCallback); // 3

  // Certificates Operations
  const certificateTransactionResult = await remme.certificate.createAndStore({
    commonName: "userName1",
    email: "user@email.com",
    name: "John",
    surname: "Smith",
    countryName: "US",
    validity: 360,
    serial: `${Date.now()}`
  }); // 4
  //
  // const certificateTransactionCallback = async (err, response) => {
  //   if (err) {
  //     console.log(err);
  //   } else if (response.status === "COMMITTED") {
  //     console.log("store", response);
  //     const status = await remme.certificate.check(certificateTransactionResult.certificate);
  //     console.log(status);
  //     const revoke = await remme.certificate.revoke(certificateTransactionResult.certificate);
  //     revoke.connectToWebSocket(async (err, response) => {
  //       console.log("error", err);
  //       console.log("revoke", response);
  //       const status = await remme.certificate.check(certificateTransactionResult.certificate);
  //       console.log(status);
  //     })
  //   }
  // }; // 7
  //
  // certificateTransactionResult.connectToWebSocket(certificateTransactionCallback); // 5

  // remme.swap.subscribeToEvents(SwapEvents.Init, (err, res) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log(res.events[0].data);
  // });
  // const swapId = "033102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce6815";
  // const secret = "secretkey";
  // const secretKey = "039eaa877ff63694f8f09c8034403f8b5165a7418812a642396d5d539f90b170";
  // const secretLock = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";

  // const balance = await remme.token.getBalance(account.publicKeyHex);
  // console.log(`Account ${account.publicKeyHex} as sender, balance - ${balance} REM`); // 1
  // setTimeout(async () => {
  //   const swapId1 = "033102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce6879";
  //   const init1 = await remme.swap.init({
  //     receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
  //     senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
  //     amount: 100,
  //     secretLockBySolicitor: secretLock,
  //     swapId: swapId1,
  //     emailAddressEncryptedByInitiator: "0x656d61696c",
  //     createdAt: Math.floor(Date.now() / 1000)
  //   });
  //
  //   init1.connectToWebSocket(async (err, data) => {
  //     if (err) {
  //       console.log("err init", err);
  //     }
  //     console.log("data init", data);
  //   });
  // }, 1000);
  // const init = await remme.swap.init({
  //   receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
  //   senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
  //   amount: 100,
  //   swapId,
  //   createdAt: Math.floor(Date.now() / 1000)
  // });
  //
  // init.connectToWebSocket(async (err, data) => {
  //   if (err) {
  //     console.log("err init", err);
  //   } else if (data.status === "COMMITTED") {
  //
  //     console.log("data init", data);
  //
  //     const res = await remme.swap.getInfo(swapId);
  //     console.log("after init info", res);
  //
  //
  //     const balance = await remme.token.getBalance(account.publicKeyHex);
  //     console.log(`Account ${account.publicKeyHex} as sender, balance - ${balance} REM`); // 1

  //     const pubkey = await remme.swap.getPublicKey();
  //     console.log(pubkey);
  //
  //     const setSecretLock = await remme.swap.setSecretLock(swapId, secretLock);
  //     setSecretLock.connectToWebSocket(async (err, data) => {
  //       if (err) {
  //         console.log("set secret lock err", err);
  //       }
  //       console.log("data set secret lock", data);
  //
  //       const res = await remme.swap.getInfo(swapId);
  //       console.log("after set secret lock info", res);
  //       setSecretLock.closeWebSocket();
  //
  //       const approve = await remme.swap.approve(swapId);
  //       approve.connectToWebSocket(async (err, data) => {
  //         if (err) {
  //           console.log("approve err", err);
  //         }
  //         console.log("data approve", data);
  //         if (data.status === "COMMITTED") {
  //           const res = await remme.swap.getInfo(swapId);
  //           console.log("after approve", res);

            //
            //
            //   const expire = await remme.swap.expire(swapId);
            //   expire.connectToWebSocket(async (err, data) => {
            //     if (err) {
            //       console.log("expire err", err);
            //     }
            //     console.log("data expire", data);

            //     const res = await remme.swap.getInfo(swapId);
            //     console.log("after expire", res);
            //     expire.closeWebSocket();
            //
        //     const close = await remme.swap.close(swapId, secretKey);
        //     close.connectToWebSocket(async (err, data) => {
        //       if (err) {
        //         console.log("err close", err);
        //       }
        //       console.log("data close", data);
        //       const res = await remme.swap.getInfo(swapId);
        //       console.log("after close info", res);
        //       // close.closeWebSocket();
        //     });
        //   }
        // })
  //           })
  //     });
  //   }
  // });
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