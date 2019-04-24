const Remme = require("../packages/remme");
const { RemmeEvents } = require("../packages/remme-web-socket-events");
const { generateAddress, forge, hexToBytes, certificateToPem } = require("../packages/remme-utils");
const { RSASignaturePadding, KeyType } = require("../packages/remme-keys");
const { AccountType } = require("../packages/remme-account");
const { BetType } = require("../packages/remme-node-management");

//Initialize user client
const remmeAsUser = new Remme.Client({
    accountConfig: {
        type: AccountType.User,
        privateKeyHex: "privateKeyHex"
    },
});

//Initialize node client
const remmeAsNode = new Remme.Client({
    accountConfig: {
        type: AccountType.Node,
        privateKeyHex: "privateKeyHex"
    },
});


(async () => {
    // Generate new account and set it to remme client
    // const { address: someRemmeAddress } = await Remme.Keys.construct({ keyType: KeyType.ECDSA });
    // const account = Remme.Client.generateAccount();
    // const signature = account.sign("this");
    // console.log(account.verify("this", signature));

    // Token Operations
    // const receiverBalance = await remmeAsUser.token.getBalance(someRemmeAddress);
    // console.log(`Account ${someRemmeAddress} as receiver, balance - ${receiverBalance} REM`);
    //
    // const balance = await remmeAsUser.token.getBalance(remmeAsUser.account.address);
    // console.log(`Account ${remmeAsUser.account.address} as sender, balance - ${balance} REM`);
    //
    // const transactionResult = await remmeAsUser.token.transfer(someRemmeAddress, 1000);
    // console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`);
    // //
    // const transactionCallback = async (err, result) => {
    //   if (err) {
    //     console.log("token err", err);
    //     return;
    //   }
    //   console.log("token", result);
    //   if (result.status === "COMMITTED") {
    //     const newBalance = await remmeAsUser.token.getBalance(someRemmeAddress);
    //     console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
    //     // transactionResult.closeWebSocket();
    //   }
    // };

    // transactionResult.connectToWebSocket(transactionCallback);

    // Remme blockchain info;
    // const blockInfo = await remmeAsUser.blockchainInfo.getBlockInfo({ start: 3, limit: 1 });
    // console.log("blockInfo:", blockInfo);
    //
    // const network = await remmeAsUser.blockchainInfo.getNetworkStatus();
    // console.log("network:", network);
    //
    // const blocks = await remmeAsUser.blockchainInfo.getBlockInfo();
    // console.log("blocks:", blocks);
    //
    // const block = await remmeAsUser.blockchainInfo.getBlockById(blocks[0].headerSignature);
    // console.log("block:", block);

    // const batches = await remmeAsUser.blockchainInfo.getBatches();
    // console.log("batches:", batches);
    //
    // const batch = await remmeAsUser.blockchainInfo.getBatchById(batches.data[0].header_signature);
    // console.log("batch:", batch);

    // const transactions = await remmeAsUser.blockchainInfo.getTransactions({ start: "aedabf13d9d6f6008f852b596d241e11ad1be2e0243ddef4f12ff92ef1e20aeb674f6b86a5eaafca571b4b8ac9d100a97ac465e24222ac4d9b791173f885ef8f" });
    // console.log("transactions:", transactions);

    // const transaction = await remmeAsUser.blockchainInfo.getTransactionById(transactions.data[1].header_signature);
    // console.log("transaction:", transaction);
    //
    // const payload = remmeAsUser.blockchainInfo.parseTransactionPayload(transaction.data);
    // console.log("payload:", payload);

    // const states = await remmeAsUser.blockchainInfo.getState();
    // console.log("states:", states);
    //
    // const state = await remmeAsUser.blockchainInfo.getStateByAddress(states.data[states.data.length - 1].address);
    // console.log("state:", state);
    //
    // const data = remmeAsUser.blockchainInfo.parseStateData(state);
    // console.log("payload:", data);
    //
    // const batchStatus = await remmeAsUser.blockchainInfo.getBatchStatus(batches.data[1].header_signature);
    // console.log("batchId:", batchStatus);
    //
    // const peers = await remmeAsUser.blockchainInfo.getPeers();
    // console.log("peers:", peers);
    //
    // const receipts = await remmeAsUser.blockchainInfo.getReceipts([transactions.data[1].header_signature, "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"]);
    // console.log("receipts:", receipts);

    // Certificates Operations
    // const certificate = await remmeAsUser.certificate.create({
    //   commonName: "userName",
    //   email: "user@email.com",
    //   name: "John",
    //   surname: "Smith",
    //   countryName: "US",
    //   validity: 360,
    //   serial: `${Date.now()}`
    // });
    //
    // console.log(certificateToPem(certificate, true));

    // const certificateTransactionResult = await remmeAsUser.certificate.createAndStore(certificateToPem(certificate));

    // const certificateTransactionResult = await remmeAsUser.certificate.createAndStore({
    //   commonName: "userName",
    //   email: "user@email.com",
    //   name: "John",
    //   surname: "Smith",
    //   countryName: "US",
    //   validity: 360,
    //   serial: `${Date.now()}`
    // });

    // const certificateTransactionCallback = async (err, response) => {
    //         if (err) {
    //             console.log(err);
    //             console.log(response);
    //         }
    //
    // certificateTransactionResult.connectToWebSocket(certificateTransactionCallback);

    //
    // const certificateTransactionCallback = async (err, response) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log("store", response);
    //   if (response.status === "COMMITTED") {
    //     const status = await remmeAsUser.certificate.check(certificateTransactionResult.certificate);
    //     console.log('status:', status);
    //     const info = await remmeAsUser.certificate.getInfo(certificateTransactionResult.certificate);
    //     console.log("info:", info);
    //     const publicKeys = await remmeAsUser.publicKeyStorage.getAccountPublicKeys(remmeAsUser.account.address);
    //     console.log("publicKeys:", publicKeys);
    //     const signature = remmeAsUser.certificate.sign(certificateTransactionResult.certificate, "sign this");
    //     console.log("signature:", signature);
    //     const isVerify = remmeAsUser.certificate.verify(certificateTransactionResult.certificate, "sign this", signature);
    //     console.log("isVerify:", isVerify);
    //     const signatureS = certificateTransactionResult.sign("sign this");
    //     console.log("signatureS:", signatureS);
    //     const isVerifyS = certificateTransactionResult.verify("sign this", signature);
    //     console.log("isVerifyS:", isVerifyS);
    //     const revoke = await remmeAsUser.certificate.revoke(certificateTransactionResult.certificate);
    //     revoke.connectToWebSocket(async (err, response) => {
    //       console.log("error", err);
    //       console.log("revoke", response);
    //       const status = await remmeAsUser.certificate.check(certificateTransactionResult.certificate);
    //       console.log(status);
    //     })
    //   }
    // };

    // Atomic swap
    // remmeAsUser.events.subscribe({
    //   events: RemmeEvents.AtomicSwap,
    //   // lastKnownBlockId: "db19f0e3b3f001670bebc814e238df48cef059f3f0668f57702ba9ff0c4b8ec45c7298f08b4c2fa67602da27a84b3df5dc78ce0f7774b3d3ae094caeeb9cbc82"
    // }, (err, res) => {
    //   if (err) {
    //     console.log("events error", err);
    //     return;
    //   }
    //   console.log("events swap", res);
    // });

    // remmeAsUser.events.subscribe({
    //   events: RemmeEvents.Blocks,
    //   // id: "db19f0e3b3f001670bebc814e238df48cef059f3f0668f57702ba9ff0c4b8ec45c7298f08b4c2fa67602da27a84b3df5dc78ce0f7774b3d3ae094caeeb9cbc82"
    // }, (err, res) => {
    //   if (err) {
    //     console.log("events error", err);
    //     return;
    //   }
    //   console.log("events block", res);
    // });
    //
    // const swapId = "033402fe1346742486b15a3a9966eb5249271025fc7fb0b37ed3fdb4bcce6808";
    // const secret = "secretkey";
    // const secretKey = "039eaa877ff63694f8f09c8034403f8b5165a7418812a642396d5d539f90b170";
    // const secretLock = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
    // const createdAt = Math.floor(Date.now() / 1000);
    // const init = await remmeAsUser.swap.init({
    //   receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
    //   senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
    //   emailAddressEncryptedByInitiator: "0x6f4d5666332f5a575a714d4245624455612f2b4345424f704b4256704f564f63497270686b455a573370476252354a6c72612b6d6b43526b567931674638326445467735737849736e785a594e717367614b55377878353370714a5a4b3859613351715138397059634336427969397a707374465a6a4c4b597153315677543331397630426f324d704c524b68737144755776704d78536a466e647562322b7a652f6d7034534d75314f434e3674384163454466714a333562376669752f30516b6f3846773132775835304b485a384a346f4b78326c544e6656722b41376441714b655735704b6435475651352b70507935354e496d67306552626156684f572b354549686961476d374c626d4c5a2b7a306e544731774a49562b39487338482f43454e6f706d4e5455424e6e5a3266657a52456b6857365a753971556b613772664d7a646d7935773738776269674c4a6a785456413d3d",
    //   amount: 100,
    //   swapId,
    //   createdAt
    // });
    //
    // init.connectToWebSocket(async (err, data) => {
    //   if (err) {
    //     console.log("err init", err);
    //   }
    //   console.log("data init", data);
    //   if (data.status === "COMMITTED") {
    //     const res = await remmeAsUser.swap.getInfo(swapId);
    //     console.log("data init", res);
    //   }});
    //     const pubkey = await remmeAsUser.swap.getPublicKey();
    //     console.log(pubkey);
    //     init.closeWebSocket();
    //     const setSecretLock = await remmeAsUser.swap.setSecretLock(swapId, secretLock);
    //     setSecretLock.connectToWebSocket(async (err, data) => {
    //       if (err) {
    //         console.log("set secret lock err", err);
    //       }
    //       console.log("data set secret lock", data);
    //       if (data.status === "COMMITTED") {
    //         const res = await remmeAsUser.swap.getInfo(swapId);
    //         console.log("after set secret lock info", res);
    //         setSecretLock.closeWebSocket();
    //         const approve = await remmeAsUser.swap.approve(swapId);
    //         approve.connectToWebSocket(async (err, data) => {
    //           if (err) {
    //             console.log("approve err", err);
    //           }
    //           console.log("data approve", data);
    //           if (data.status === "COMMITTED") {
    //             const res = await remmeAsUser.swap.getInfo(swapId);
    //             console.log("after approve", res);
    //             approve.closeWebSocket();
    //             const expire = await remmeAsUser.swap.expire(swapId);
    //             expire.connectToWebSocket(async (err, data) => {
    //               if (err) {
    //                 console.log("err close", err);
    //               }
    //               console.log("data close", data);
    //               if (data.status === "COMMITTED") {
    //                 const res = await remmeAsUser.swap.getInfo(swapId);
    //                 console.log("after close info", res);
    //                 expire.closeWebSocket();
    //                 const close = await remmeAsUser.swap.close(swapId, secretKey);
    //                 close.connectToWebSocket(async (err, data) => {
    //                   if (err) {
    //                     console.log("err close", err);
    //                   }
    //                   console.log("data close", data);
    //                   if (data.status === "COMMITTED") {
    //                     const res = await remmeAsUser.swap.getInfo(swapId);
    //                     console.log("after close info", res);
    //                     close.closeWebSocket();
    //                   }
    //                 });
    //           }
    //         });
    //       }
    //     });
    //   }
    // });

    // const keyss = await remmeAsUser.Keys.generateKeyPair(KeyType.ECDSA);
    // console.log("keys:", keyss);
    // const keys = await remmeAsUser.Keys.construct({ keyType: KeyType.EdDSA });
    // console.log("keys:", keys);
    // const data = "sign data";
    // const signature = keys.sign(data);
    // const isVerify = keys.verify(data, signature);
    // console.log("isVerify:", isVerify);
    // const n = forge.pki.setRsaPublicKey(keys.publicKey.n.data, keys.publicKey.e.data);
    // const pubKey = await remmeAsUser.publicKeyStorage.store({
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
    //     const info = await remmeAsUser.publicKeyStorage.getInfo(keys.address);
    //     console.log("info:", info);
    //     const keyss = await remmeAsUser.Keys.construct({ keyType: info.type, publicKey: hexToBytes(info.publicKey) });
    //     console.log(keyss.publicKeyHex);
    //     const cinfo = await remmeAsUser.publicKeyStorage.check(keys.address);
    //     console.log("cinfo:", cinfo);
    //     const ainfo = await remmeAsUser.publicKeyStorage.getAccountPublicKeys(remmeAsUser.account.address);
    //     console.log("cinfo:", ainfo);
    //   }
    // });

    // Node management
    // const anyTransactionCallback = async (err, res) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     if (res) {
    //         console.log(res);
    //     }
    //     if (res.status === "COMMITTED") {
    //         const nodeAccount = await remmeAsNode.nodeManagement.getNodeAccount();
    //         const nodeConfig = await remmeAsNode.nodeManagement.getNodeConfig();
    //         const nodeInfo = await remmeAsNode.nodeManagement.getNodeInfo();
    //
    //         console.log("NODE ACCOUNT: ", nodeAccount);
    //         console.log("NODE CONFIG: ", nodeConfig);
    //         console.log("NODE INFO: ", nodeInfo);
    //     }
    // };
    // const openNode = await remmeAsNode.nodeManagement.openNode();
    // openNode.connectToWebSocket(anyTransactionCallback);
    //
    // const initialStake = await remmeAsNode.nodeManagement.getInitialStake();
    // const openMasterNode = await remmeAsNode.nodeManagement.openMasterNode(initialStake);
    // openMasterNode.connectToWebSocket(anyTransactionCallback);
    //
    // const setBetMax = await remmeAsNode.nodeManagement.setBet(BetType.MAX);
    // setBetMax.connectToWebSocket(anyTransactionCallback);
    // const setBetMin = await remmeAsNode.nodeManagement.setBet(BetType.MIN);
    // setBetMin.connectToWebSocket(anyTransactionCallback);
    // const setBetFixed = await remmeAsNode.nodeManagement.setBet(50);
    // setBetFixed.connectToWebSocket(anyTransactionCallback);
    //
    // const closeNode = await remmeAsNode.nodeManagement.closeMasterNode();
    // closeNode.connectToWebSocket(anyTransactionCallback);
})();

