const Remme = require("../packages/remme");
const { RemmeEvents } = require("../packages/remme-web-socket-events");
const { base64ToArrayBuffer } = require("../packages/remme-utils");
const { PubKeyStorage } = require("../packages/remme-protobuf");

const pubKey = "03c75297511ce0cfd1315a045dd0db2a4a1710efed94f0f94ad993b5dfe2e33b62";
//Initialize client
const remme = new Remme.Client({
  // privateKeyHex: "7f752a99bbaf6755dc861bb4a7bb19acb913948d75f3b718ff4545d01d9d4ff5",
  privateKeyHex: "ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9",
  networkConfig: {
    nodeAddress: "node-genesis-testnet.remme.io",
  }
});

const someRemmeAddress = "03c75297511ce0cfd1315a045dd0db2a4a1710efed94f0f94ad993b5dfe2e33b62";
const { account } = remme;

(async () => {
  // Generate new account and set it to remme client
  // const account = Remme.Client.generateAccount();
  // console.log(account);
  // remme.account = account;
  
  // Token Operations
  const receiverBalance = await remme.token.getBalance(someRemmeAddress);
  console.log(`Account ${someRemmeAddress} as receiver, balance - ${receiverBalance} REM`); // 1

  const balance = await remme.token.getBalance(account.publicKeyHex);
  console.log(`Account ${account.publicKeyHex} as sender, balance - ${balance} REM`); // 1

  const transactionResult = await remme.token.transfer(someRemmeAddress, 10);
  console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`); // 2

  const transactionCallback = async (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("token", result);
    if (result.status === "COMMITTED") {
      const newBalance = await remme.token.getBalance(someRemmeAddress);
      console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
      transactionResult.closeWebSocket()
    }
  }; // 6

  transactionResult.connectToWebSocket(transactionCallback); // 3

  // const blockInfo = await remme.blockchainInfo.getBlockInfo();
  // console.log(blockInfo);
  // const network = await remme.blockchainInfo.getNetworkStatus();
  // console.log(network);


  // Certificates Operations
  // const certificateTransactionResult = await remme.certificate.createAndStore({
  //   commonName: "userName",
  //   email: "user@email.com",
  //   name: "John",
  //   surname: "Smith",
  //   countryName: "US",
  //   validity: 360,
  //   serial: `${Date.now()}`
  // }); // 4
  //
  // const certificateTransactionCallback = async (err, response) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log("store", response);
  //   if (response.status === "COMMITTED") {
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


  // remme.events.subscribe({
  //   events: RemmeEvents.SwapInit,
  //   lastKnownBlockId: "db19f0e3b3f001670bebc814e238df48cef059f3f0668f57702ba9ff0c4b8ec45c7298f08b4c2fa67602da27a84b3df5dc78ce0f7774b3d3ae094caeeb9cbc82"
  // }, (err, res) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("events", res);
  // });

  // const swapId = "033102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce3872";
  // const secret = "secretkey";
  // const secretKey = "039eaa877ff63694f8f09c8034403f8b5165a7418812a642396d5d539f90b170";
  // const secretLock = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";

  // const balance = await remme.token.getBalance(account.publicKeyHex);
  // console.log(`Account ${account.publicKeyHex} as sender, balance - ${balance} REM`); // 1

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
  //     console.log("data init", data);
  //   }
  // });


  // const res = await remme.swap.getInfo(swapId);
  // console.log("after init info", res);

  //
  //     const balance = await remme.token.getBalance(account.publicKeyHex);
  //     console.log(`Account ${account.publicKeyHex} as sender, balance - ${balance} REM`); // 1
  //
  //     const pubkey = await remme.swap.getPublicKey(); - не работает
  //     console.log(pubkey);

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
      // });
      //   const approve = await remme.swap.approve(swapId);
      //   approve.connectToWebSocket(async (err, data) => {
      //     if (err) {
      //       console.log("approve err", err);
      //     }
      //     console.log("data approve", data);
      //     //         if (data.status === "COMMITTED") {
      //     const res = await remme.swap.getInfo(swapId);
      //     console.log("after approve", res);
      //   });
      //       const close = await remme.swap.close(swapId, secretKey);
      //       close.connectToWebSocket(async (err, data) => {
      //         if (err) {
      //           console.log("err close", err);
      //         }
      //         console.log("data close", data);
      //         const res = await remme.swap.getInfo(swapId);
      //         console.log("after close info", res);
      //         close.closeWebSocket();
      //       });
  //         }
  //       })
  //     });
  //   }
  // });
})();