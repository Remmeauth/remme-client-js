const Remme = require("../packages/remme");
const { RemmeWebSocket } = require("../packages/remme-web-socket");
const { RemmeEvents } = require("../packages/remme-web-socket-events");
const { generateAddress, forge, hexToBytes } = require("../packages/remme-utils");
const { RSASignaturePadding, KeyType } = require("../packages/remme-keys");

//Initialize client
const remme = new Remme.Client({
  privateKeyHex: "2db81e607b09c82de76d768d47f6326d490e84f36bc71ab5a51efa51dec22429",
  networkConfig: {
    nodeAddress: "192.168.166.247",
    sslMode: false,
    nodePort: 8080
  }
});

// const someRemmeAddress = generateAddress("account", "034e6abbe2a36694e07a8e2b380a74dc8e98b4c30fcde129d5e91b18291ed89072");
const someRemmeAddress = "112007081971dec92814033df35188ce17c740d5e58d7632c9528b61a88a4b4cde51e1";

(async () => {
  const transactionResult = await remme.token.transfer(someRemmeAddress, 1000);

 class mySocketConnection extends RemmeWebSocket {
          constructor({networkConfig, data}) {
              super(networkConfig);
              this.data = data;
          }
   }

 const remmeWebSocket = new mySocketConnection({
          networkConfig: {
                nodeAddress: "localhost",
                nodePort: "8080",
                sslMode: "asdf"
            },
          data: {
                event_type: "batch",
                id: transactionResult.batchId,
            }
     });

 remmeWebSocket.connectToWebSocket((err, res) => {
       if (err) {
             console.log(err);
             return;
         }
       console.log(res);
       // remmeWebSocket.closeWebSocket();
   });
  // // Generate new account and set it to remme client
  // const account = Remme.Client.generateAccount();
  // const signature = account.sign("this");
  // console.log(account.verify("this", signature));
  //
  // Token Operations
  // const receiverBalance = await remme.token.getBalance(someRemmeAddress);
  // console.log(`Account ${someRemmeAddress} as receiver, balance - ${receiverBalance} REM`);
  //
  // const balance = await remme.token.getBalance(remme.account.address);
  // console.log(`Account ${remme.account.address} as sender, balance - ${balance} REM`);
  //

  // console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`);
  //
  // const transactionCallback = async (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("token", result);
  //   if (result.status === "COMMITTED") {
  //     const newBalance = await remme.token.getBalance(someRemmeAddress);
  //     console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
  //     transactionResult.closeWebSocket();
  //   }
  // };
  //
  // transactionResult.connectToWebSocket(transactionCallback);
  //
  // const blockInfo = await remme.blockchainInfo.getBlockInfo({ start: 3, limit: 1 });
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
  //
  //
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
  //     const status = await remme.certificate.check(certificateTransactionResult.certificate);
  //     console.log('status:', status);
  //     const info = await remme.certificate.getInfo(certificateTransactionResult.certificate);
  //     console.log("info:", info);
  //     const publicKeys = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.address);
  //     console.log("publicKeys:", publicKeys);
  //     const signature = remme.certificate.sign(certificateTransactionResult.certificate, "sign this");
  //     console.log("signature:", signature);
  //     const isVerify = remme.certificate.verify(certificateTransactionResult.certificate, "sign this", signature);
  //     console.log("isVerify:", isVerify);
  //     const signatureS = certificateTransactionResult.sign("sign this");
  //     console.log("signatureS:", signatureS);
  //     const isVerifyS = certificateTransactionResult.verify("sign this", signature);
  //     console.log("isVerifyS:", isVerifyS);
  //     const revoke = await remme.certificate.revoke(certificateTransactionResult.certificate);
  //     revoke.connectToWebSocket(async (err, response) => {
  //       console.log("error", err);
  //       console.log("revoke", response);
  //       const status = await remme.certificate.check(certificateTransactionResult.certificate);
  //       console.log(status);
  //     })
  //   }
  // };
  //
  // certificateTransactionResult.connectToWebSocket(certificateTransactionCallback);
  //
  // remme.events.subscribe({
  //   events: RemmeEvents.AtomicSwap,
  //   // lastKnownBlockId: "db19f0e3b3f001670bebc814e238df48cef059f3f0668f57702ba9ff0c4b8ec45c7298f08b4c2fa67602da27a84b3df5dc78ce0f7774b3d3ae094caeeb9cbc82"
  // }, (err, res) => {
  //   if (err) {
  //     console.log("events error", err);
  //     return;
  //   }
  //   console.log("events swap", res);
  // });
  // remme.events.subscribe({
  //   events: RemmeEvents.Blocks,
  //   // lastKnownBlockId: "db19f0e3b3f001670bebc814e238df48cef059f3f0668f57702ba9ff0c4b8ec45c7298f08b4c2fa67602da27a84b3df5dc78ce0f7774b3d3ae094caeeb9cbc82"
  // }, (err, res) => {
  //   if (err) {
  //     console.log("events error", err);
  //     return;
  //   }
  //   console.log("events block", res);
  // });
  //
  // const swapId = "033402fe1346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce6808";
  // const secret = "secretkey";
  // const secretKey = "039eaa877ff63694f8f09c8034403f8b5165a7418812a642396d5d539f90b170";
  // const secretLock = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
  // const createdAt = Math.floor(Date.now() / 1000);
  // const init = await remme.swap.init({
  //   receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
  //   senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
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
    // const keyss = await Remme.Keys.generateKeyPair(KeyType.ECDSA);
    // console.log("keys:", keyss);
    // const keys = await Remme.Keys.construct({ keyType: KeyType.EdDSA });
    // console.log("keys:", keys);
    // const data = "sign data";
    // const signature = keys.sign(data);
    // const isVerify = keys.verify(data, signature);
    // console.log("isVerify:", isVerify);
    // const n = forge.pki.setRsaPublicKey(keys.publicKey.n.data, keys.publicKey.e.data);
    // const pubKey = await remme.publicKeyStorage.store({
    //   data: "store data",
    //   keys,
    //   rsaSignaturePadding: RSASignaturePadding.PSS,
    //   validFrom: Math.round(Date.now() / 1000),
    //   validTo: Math.round(Date.now() / 1000 + 1000)
    // });
    // pubKey.connectToWebSocket(async (err, res) => {
    //   if (err) {
    //     console.log("err:", err);
    //     return;
    //   }
    //   console.log("res:", res);
    //   if (res.status === "COMMITTED") {
    //     const info = await remme.publicKeyStorage.getInfo(keys.address);
    //     console.log("info:", info);
    //     const keyss = await Remme.Keys.construct({ keyType: info.type, publicKey: hexToBytes(info.publicKey) });
    //     console.log(keyss.publicKeyHex);
    //     const cinfo = await remme.publicKeyStorage.check(keys.address);
    //     console.log("cinfo:", cinfo);
    //     const ainfo = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.address);
    //     console.log("cinfo:", ainfo);
    //   }
    // });
  // }

})();

