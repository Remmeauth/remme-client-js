const Remme = require("../packages/remme");
const { RemmeEvents } = require("../packages/remme-web-socket-events");
const { base64ToArrayBuffer } = require("../packages/remme-utils");
const { PubKeyStorage } = require("../packages/remme-protobuf");

const pubKey = "03c75297511ce0cfd1315a045dd0db2a4a1710efed94f0f94ad993b5dfe2e33b62";
//Initialize client
const remme = new Remme.Client({
  // privateKeyHex: "7f752a99bbaf6755dc861bb4a7bb19acb913948d75f3b718ff4545d01d9d4ff5",
  privateKeyHex: "2f80fc18d41027e3db72e8bd20bd8d37670ba543a91e0f28bd0155aac94aa47d",
  // privateKeyHex: "ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9",
  networkConfig: {
    nodeAddress: "localhost",
    // nodeAddress: "node-genesis-testnet.remme.io",
  }
});

const someRemmeAddress = "03c2e53acce583c8bb2382319f4dee3e816b67f3a733ef90fe3329062251d0c638";
const { account } = remme;

(async () => {
  // Generate new account and set it to remme client
  // const account = Remme.Client.generateAccount();
  // console.log(account);
  // remme.account = account;
  // Token Operations
  // const receiverBalance = await remme.token.getBalance(someRemmeAddress);
  // console.log(`Account ${someRemmeAddress} as receiver, balance - ${receiverBalance} REM`); // 1
  //
  // const balance = await remme.token.getBalance(account.publicKeyHex);
  // console.log(`Account ${account.publicKeyHex} as sender, balance - ${balance} REM`); // 1
  //
  // const transactionResult = await remme.token.transfer(someRemmeAddress, 10);
  // console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`); // 2
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
  //     transactionResult.closeWebSocket()
  //   }
  // }; // 6
  //
  // transactionResult.connectToWebSocket(transactionCallback); // 3

  // const blockInfo = await remme.blockchainInfo.getBlockInfo();
  // console.log(blockInfo);
  // const network = await remme.blockchainInfo.getNetworkStatus();
  // console.log(network);
  // const blocks = await remme.blockchainInfo.getBlocks();
  // console.log(blocks);
  // const block = await remme.blockchainInfo.getBlockById("39698720b668dcd484aa71ddfcdfc32377d5e86343c585c95890ae4acd23065c58f7d6e34a3b677d9bcd6094cfae8ef1dc249436592d1ac64b4a852eb37b1d5a");
  // console.log(block);
  // const batches = await remme.blockchainInfo.getBatches();
  // console.log(batches);
  // const batch = await remme.blockchainInfo.getBatchById("b00e3b9936f8a2f4ee740ca091bd83de7aff398f0ac6c7f760d5a4991554bb0904ddb2db79b9373aa328db2885012b16119b6c0908b5d64aef156497a0b6efdd");
  // console.log(batch);
  // const transactions = await remme.blockchainInfo.getTransactions();
  // console.log(transactions);
  // const transaction = await remme.blockchainInfo.getTransactionById("ff0e95a29ba2b963295e0582151c18544e5cc2721fd06063884ec24233da72d55429468351133be692afa2d70a463bbaa333a91ba8f80a54634f529fbe870ec7");
  // console.log(transaction);
  // const states = await remme.blockchainInfo.getState();
  // console.log("states:", states);
  // const state = await remme.blockchainInfo.getStateByAddress("a23be1ab67ce7cd8687933547b2064f61de42e604a14e1f696c04ec4204e42c11dfd80");
  // console.log("state:", state);
  // const batchStatus = await remme.blockchainInfo.getBatchStatus("b00e3b9936f8a2f4ee740ca091bd83de7aff398f0ac6c7f760d5a4991554bb0904ddb2db79b9373aa328db2885012b16119b6c0908b5d64aef156497a0b6efdd");
  // console.log("batchId:", batchStatus);
  // const peers = await remme.blockchainInfo.getPeers();
  // console.log("peers:", peers);
  // const receipts = await remme.blockchainInfo.getReceipts(["ff0e95a29ba2b963295e0582151c18544e5cc2721fd06063884ec24233da72d55429468351133be692afa2d70a463bbaa333a91ba8f80a54634f529fbe870ec7", "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"]);
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
  // }); // 4
  //
  // const certificateTransactionCallback = async (err, response) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log("store", response);
  //   if (response.status === "COMMITTED") {
  //     const status = await remme.certificate.check(certificateTransactionResult.certificate);
  //     console.log('status:', status);
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

  const swapId = "033102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce3872";
  const secret = "secretkey";
  const secretKey = "039eaa877ff63694f8f09c8034403f8b5165a7418812a642396d5d539f90b170";
  const secretLock = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";

  const init = await remme.swap.init({
    receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
    senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
    amount: 100,
    swapId,
    createdAt: Math.floor(Date.now() / 1000)
  });

  init.connectToWebSocket(async (err, data) => {
    if (err) {
      console.log("err init", err);
    } else if (data.status === "COMMITTED") {
      console.log("data init", data);
      const res = await remme.swap.getInfo(swapId);
      console.log("after init info", res);
      const pubkey = await remme.swap.getPublicKey();
      console.log(pubkey);
      init.closeWebSocket();
      const setSecretLock = await remme.swap.setSecretLock(swapId, secretLock);
      setSecretLock.connectToWebSocket(async (err, data) => {
        if (err) {
          console.log("set secret lock err", err);
        }
        console.log("data set secret lock", data);
        if (data.status === "COMMITTED") {
          const res = await remme.swap.getInfo(swapId);
          console.log("after set secret lock info", res);
          setSecretLock.closeWebSocket();
          const approve = await remme.swap.approve(swapId);
          approve.connectToWebSocket(async (err, data) => {
            if (err) {
              console.log("approve err", err);
            }
            console.log("data approve", data);
            if (data.status === "COMMITTED") {
              const res = await remme.swap.getInfo(swapId);
              console.log("after approve", res);
              approve.closeWebSocket();
              const close = await remme.swap.close(swapId, secretKey);
              close.connectToWebSocket(async (err, data) => {
                if (err) {
                  console.log("err close", err);
                }
                console.log("data close", data);
                if (data.status === "COMMITTED") {
                  const res = await remme.swap.getInfo(swapId);
                  console.log("after close info", res);
                  close.closeWebSocket();
                }
              });
            }
          });
        }
      });
    }
  });
})();