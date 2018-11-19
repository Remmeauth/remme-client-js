const Remme = require("../packages/remme");
const { RemmeEvents } = require("../packages/remme-web-socket-events");
const { generateRSAKeyPair, generateED25519KeyPair, generateSecp256k1Signature, publicKeyToPem, generateAddress } = require("../packages/remme-utils");
const { RemmePublicKeyStorage } = require("../packages/remme-public-key-storage");
const { RemmeKeys, RSASignaturePadding, KeyType } = require("../packages/remme-keys");
// const crypto = require("crypto");

const pubKey = "03c75297511ce0cfd1315a045dd0db2a4a1710efed94f0f94ad993b5dfe2e33b62";
//Initialize client
const remme = new Remme.Client({
  // privateKeyHex: "7f752a99bbaf6755dc861bb4a7bb19acb913948d75f3b718ff4545d01d9d4ff5", // мой
  privateKeyHex: "80cb7124ae81ceb7b0c19cf0801439b05f0f78e8f591d89f5e840bd2390f59b4", // localhost
  // privateKeyHex: "25ae524b1783414c73e90a0702da9cb90626a5435de44dec5ac53f3c64a1c03b", // node-genesis-testnet-dev.remme.io
  // privateKeyHex: "950631d13705f1c879dd250e2e7dc48d5b8389efd7173c950a7bcc313a6c77fa", // node-genesis-testnet-eco.remme.io
  // privateKeyHex: "ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9", // кран
  networkConfig: {
    nodeAddress: "localhost",
    // nodeAddress: "node-genesis-testnet-dev.remme.io",
    // nodeAddress: "node-genesis-testnet-eco.remme.io",
  }
});

// const someRemmeAddress = generateAddress("account", "03c2e53acce583c8bb2382319f4dee3e816b67f3a733ef90fe3329062251d0c638");
const someRemmeAddress = "03c2e53acce583c8bb2382319f4dee3e816b67f3a733ef90fe3329062251d0c638";

(async () => {
  // Generate new account and set it to remme client
  // const account = Remme.Client.generateAccount();
  // const signature = account.sign("this");
  // console.log(account.verify(signature, "this"))
  // console.log(account);

  // Token Operations
  // const receiverBalance = await remme.token.getBalance(pubKey);
  // console.log(`Account ${pubKey} as receiver, balance - ${receiverBalance} REM`);
  //
  // const balance = await remme.token.getBalance(remme.account.publicKeyHex);
  // console.log(`Account ${remme.account.publicKeyHex} as sender, balance - ${balance} REM`);
  //
  // const transactionResult = await remme.token.transfer(pubKey, 1000);
  // console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`);
  //
  // const transactionCallback = async (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("token", result);
  //   if (result.status === "COMMITTED") {
  //     const newBalance = await remme.token.getBalance(pubKey);
  //     console.log(`Account ${pubKey} balance - ${newBalance} REM`);
  //     transactionResult.closeWebSocket()
  //   }
  // };
  //
  // transactionResult.connectToWebSocket(transactionCallback);

  // const blockInfo = await remme.blockchainInfo.getBlockInfo({ limit: 1 });
  // console.log("blockInfo:", blockInfo);
  // const network = await remme.blockchainInfo.getNetworkStatus();
  // console.log("network:", network);
  // const blocks = await remme.blockchainInfo.getBlocks();
  // console.log("blocks:", blocks);
  // const block = await remme.blockchainInfo.getBlockById(blocks.data[1].header_signature);
  // console.log("block:", block);
  // const batches = await remme.blockchainInfo.getBatches();
  // console.log("batches:", batches);
  // const batch = await remme.blockchainInfo.getBatchById(batches.data[1].header_signature);
  // console.log("batch:", batch);
  // const transactions = await remme.blockchainInfo.getTransactions();
  // console.log("transactions:", transactions);
  // const transaction = await remme.blockchainInfo.getTransactionById(transactions.data[1].header_signature);
  // console.log("transaction:", transaction);
  // const payload = remme.blockchainInfo.parseTransactionPayload(transaction.data);
  // console.log("payload:", payload);
  // const states = await remme.blockchainInfo.getState();
  // console.log("states:", states);
  // const state = await remme.blockchainInfo.getStateByAddress(states.data[states.data.length - 1].address);
  // console.log("state:", state);
  // const data = remme.blockchainInfo.parseStateData(state);
  // console.log("payload:", data);
  // const batchStatus = await remme.blockchainInfo.getBatchStatus(batches.data[1].header_signature);
  // console.log("batchId:", batchStatus);
  // const peers = await remme.blockchainInfo.getPeers();
  // console.log("peers:", peers);
  // const receipts = await remme.blockchainInfo.getReceipts([transactions.data[1].header_signature, "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"]);
  // console.log("receipts:", receipts);


  // Certificates Operations
  // const certificateTransactionResult = await remme.certificate.createAndStore({
  //   commonName: "userName",
  //   email: "user@email.com",
  //   name: "John",
  //   surname: "Smith",
  //   countryName: "US",
  //   validity: 360,
  //   serial: `${Date.now()}`
  // });
  //
  // const certificateTransactionCallback = async (err, response) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log("store", response);
  //   if (response.status === "COMMITTED") {
      // const status = await remme.certificate.check(certificateTransactionResult.certificate);
      // console.log('status:', status);
      // const info = await remme.certificate.getInfo(certificateTransactionResult.certificate);
      // console.log("info:", info);
      // const publicKeys = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.address);
      // console.log("publicKeys:", publicKeys);
      // const signature = remme.certificate.sign(certificateTransactionResult.certificate, "sign this");
      // console.log("signature:", signature);
      // const isVerify = remme.certificate.verify(certificateTransactionResult.certificate, "sign this", signature);
      // console.log("isVerify:", isVerify);
      // const signatureS = certificateTransactionResult.sign("sign this");
      // console.log("signatureS:", signatureS);
      // const isVerifyS = certificateTransactionResult.verify("sign this", signature);
      // console.log("isVerifyS:", isVerifyS);
      // const revoke = await remme.certificate.revoke(certificateTransactionResult.certificate);
      // revoke.connectToWebSocket(async (err, response) => {
      //   console.log("error", err);
      //   console.log("revoke", response);
      //   const status = await remme.certificate.check(certificateTransactionResult.certificate);
      //   console.log(status);
      // })
  //   }
  // };

  // certificateTransactionResult.connectToWebSocket(certificateTransactionCallback);
  //
  // remme.events.subscribe({
  //   events: RemmeEvents.SwapAll,
  //   // lastKnownBlockId: "db19f0e3b3f001670bebc814e238df48cef059f3f0668f57702ba9ff0c4b8ec45c7298f08b4c2fa67602da27a84b3df5dc78ce0f7774b3d3ae094caeeb9cbc82"
  // }, (err, res) => {
  //   if (err) {
  //     console.log("events error", err);
  //     return;
  //   }
  //   console.log("events", res);
  // });
  // //
  // const swapId = "033302fe1346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce3888";
  // const secret = "secretkey";
  // const secretKey = "039eaa877ff63694f8f09c8034403f8b5165a7418812a642396d5d539f90b170";
  // const secretLock = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
  // const createdAt = Math.floor(Date.now() / 1000);
  // const init = await remme.swap.init({
  //   receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
  //   senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
  //   // secretLockBySolicitor: secretLock,
  //   emailAddressEncryptedByInitiator: "0x6f4d5666332f5a575a714d4245624455612f2b4345424f704b4256704f564f63497270686b455a573370476252354a6c72612b6d6b43526b567931674638326445467735737849736e785a594e717367614b55377878353370714a5a4b3859613351715138397059634336427969397a707374465a6a4c4b597153315677543331397630426f324d704c524b68737144755776704d78536a466e647562322b7a652f6d7034534d75314f434e3674384163454466714a333562376669752f30516b6f3846773132775835304b485a384a346f4b78326c544e6656722b41376441714b655735704b6435475651352b70507935354e496d67306552626156684f572b354549686961476d374c626d4c5a2b7a306e544731774a49562b39487338482f43454e6f706d4e5455424e6e5a3266657a52456b6857365a753971556b613772664d7a646d7935773738776269674c4a6a785456413d3d",
  //   amount: 100,
  //   swapId,
  //   createdAt,
  // });
  //
  // init.connectToWebSocket(async (err, data) => {
  //   if (err) {
  //     console.log("err init", err);
  //   }
  //   console.log("data init", data);
  //   if (data.status === "COMMITTED") {
  //     const res = await remme.swap.getInfo(swapId);
  //     console.log("data init", res);
  //     const pubkey = await remme.swap.getPublicKey();
  //     console.log(pubkey);
  //     init.closeWebSocket();
  //     const setSecretLock = await remme.swap.setSecretLock(swapId, secretLock);
  //     setSecretLock.connectToWebSocket(async (err, data) => {
  //       if (err) {
  //         console.log("set secret lock err", err);
  //       }
  //       console.log("data set secret lock", data);
  //       if (data.status === "COMMITTED") {
  //         const res = await remme.swap.getInfo(swapId);
  //         console.log("after set secret lock info", res);
  //         setSecretLock.closeWebSocket();
  //         const approve = await remme.swap.approve(swapId);
  //         approve.connectToWebSocket(async (err, data) => {
  //           if (err) {
  //             console.log("approve err", err);
  //           }
  //           console.log("data approve", data);
  //           if (data.status === "COMMITTED") {
  //             const res = await remme.swap.getInfo(swapId);
  //             console.log("after approve", res);
  //             approve.closeWebSocket();
  //             // const expire = await remme.swap.expire(swapId);
  //             // expire.connectToWebSocket(async (err, data) => {
  //             //   if (err) {
  //             //     console.log("err close", err);
  //             //   }
  //             //   console.log("data close", data);
  //             //   if (data.status === "COMMITTED") {
  //             //     const res = await remme.swap.getInfo(swapId);
  //             //     console.log("after close info", res);
  //             //     expire.closeWebSocket();
  //                 const close = await remme.swap.close(swapId, secretKey);
  //                 close.connectToWebSocket(async (err, data) => {
  //                   if (err) {
  //                     console.log("err close", err);
  //                   }
  //                   console.log("data close", data);
  //                   if (data.status === "COMMITTED") {
  //                     const res = await remme.swap.getInfo(swapId);
  //                     console.log("after close info", res);
  //                     close.closeWebSocket();
  //                   }
  //                 });
  //             //   }
  //             // });
  //           }
  //         });
  //       }
  //     });
  //   }
  // });

  // {
  //   const keys = await RemmeKeys.generateKeyPair(KeyType.RSA);
  //   const pubKey = await remme.publicKeyStorage.store({
  //     data: "store data",
  //     keys,
  //     publicKeyType: KeyType.RSA,
  //     rsaSignaturePadding: RSASignaturePadding.PKCS1v15,
  //     validFrom: Math.round(Date.now() / 1000),
  //     validTo: Math.round(Date.now() / 1000 + 1000)
  //   });
  //   pubKey.connectToWebSocket(async (err, res) => {
  //     console.log("err:", err);
  //     console.log("res:", res);
      // const info = await remme.publicKeyStorage.getInfo(keys.address);
      // console.log("info:", info);
      // const cinfo = await remme.publicKeyStorage.check(keys.address);
      // console.log("cinfo:", cinfo);
      // const ainfo = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.address);
      // console.log("cinfo:", ainfo);
  //   });
  // }
  //
  // {
  //   const keys = await RemmeKeys.generateKeyPair(KeyType.EdDSA);
  //   const pubKey = await remme.publicKeyStorage.store({
  //     data: "store data",
  //     keys,
  //     publicKeyType: KeyType.EdDSA,
  //     validFrom: Math.round(Date.now() / 1000),
  //     validTo: Math.round(Date.now() / 1000 + 1000)
  //   });
  //   pubKey.connectToWebSocket(async (err, res) => {
  //     console.log("err:", err);
  //     console.log("res:", res);
  //     const info = await remme.publicKeyStorage.getInfo(keys.address);
  //     console.log("info:", info);
  //     const cinfo = await remme.publicKeyStorage.check(keys.address);
  //     console.log("cinfo:", cinfo);
  //     const ainfo = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.address);
  //     console.log("cinfo:", ainfo);
  //   });
  // }

  // {
  //   const keys = await RemmeKeys.generateKeyPair(KeyType.ECDSA);
  //   const pubKey = await remme.publicKeyStorage.store({
  //     data: "store data",
  //     keys,
  //     publicKeyType: KeyType.ECDSA,
  //     validFrom: Math.round(Date.now() / 1000),
  //     validTo: Math.round(Date.now() / 1000 + 1000)
  //   });
  //   pubKey.connectToWebSocket(async (err, res) => {
  //     console.log("err:", err);
  //     console.log("res:", res);
  //     const info = await remme.publicKeyStorage.getInfo(keys.address);
  //     console.log("info:", info);
  //     const cinfo = await remme.publicKeyStorage.check(keys.address);
  //     console.log("cinfo:", cinfo);
  //     const ainfo = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.address);
  //     console.log("cinfo:", ainfo);
  //   });
  // }

  // node v10
  // console.log("crypto.getCurves():", crypto.generateKeyPairSync("dsa"));
  // console.log("crypto.getCurves():", crypto.generateKeyPairSync("dsa", {
  //   modulusLength: 2048,
  //   // divisorLength: 2,
  //   publicKeyEncoding: {
  //     type: 'spki',
  //     format: 'pem'
  //   },
  //   privateKeyEncoding: {
  //     type: 'pkcs8',
  //     format: 'pem',
  //     cipher: 'aes-256-cbc',
  //     passphrase: 'top secret'
  //   }
  // }));
  // console.log("crypto.getCurves():", crypto.generateKeyPairSync("ec", {
  //   namedCurve: "secp256k1",
  //   publicKeyEncoding: {
  //     type: 'spki',
  //     format: 'pem'
  //   },
  //   privateKeyEncoding: {
  //     type: 'pkcs8',
  //     format: 'pem',
  //     cipher: 'aes-256-cbc',
  //     passphrase: 'top secret'
  //   }
  // }));
  // console.log("crypto.getCurves():", crypto.generateKeyPairSync("rsa", {
  //   modulusLength: 2048,
  //   publicKeyEncoding: {
  //     type: 'spki',
  //     format: 'pem'
  //   },
  //   privateKeyEncoding: {
  //     type: 'pkcs8',
  //     format: 'pem',
  //     cipher: 'aes-256-cbc',
  //     passphrase: 'top secret'
  //   }
  // }));

})();

