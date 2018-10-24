const Remme = require("../packages/remme");
const { RemmeEvents } = require("../packages/remme-web-socket-events");

const pubKey = "03c75297511ce0cfd1315a045dd0db2a4a1710efed94f0f94ad993b5dfe2e33b62";
//Initialize client
const remme = new Remme.Client();

const someRemmeAddress = "03c2e53acce583c8bb2382319f4dee3e816b67f3a733ef90fe3329062251d0c638";

(async () => {
  // Generate new account and set it to remme client
  const account = Remme.Client.generateAccount();
  console.log(account);

  // Token Operations
  const receiverBalance = await remme.token.getBalance(someRemmeAddress);
  console.log(`Account ${someRemmeAddress} as receiver, balance - ${receiverBalance} REM`);

  const balance = await remme.token.getBalance(remme.account.publicKeyHex);
  console.log(`Account ${remme.account.publicKeyHex} as sender, balance - ${balance} REM`);

  const transactionResult = await remme.token.transfer(someRemmeAddress, 10);
  console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`);

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
  };

  transactionResult.connectToWebSocket(transactionCallback);

  const blockInfo = await remme.blockchainInfo.getBlockInfo();
  console.log("blockInfo:", blockInfo);
  const network = await remme.blockchainInfo.getNetworkStatus();
  console.log("network:", network);
  const blocks = await remme.blockchainInfo.getBlocks();
  console.log("blocks:", blocks);
  const block = await remme.blockchainInfo.getBlockById(blocks.data[1].header_signature);
  console.log("block:", block);
  const batches = await remme.blockchainInfo.getBatches();
  console.log("batches:", batches);
  const batch = await remme.blockchainInfo.getBatchById(batches.data[1].header_signature);
  console.log("batch:", batch);
  const transactions = await remme.blockchainInfo.getTransactions();
  console.log("transactions:", transactions);
  const transaction = await remme.blockchainInfo.getTransactionById(transactions.data[1].header_signature);
  console.log("transaction:", transaction);
  const payload = remme.blockchainInfo.parseTransactionPayload(transaction.data);
  console.log("payload:", payload);
  const states = await remme.blockchainInfo.getState();
  console.log("states:", states);
  const state = await remme.blockchainInfo.getStateByAddress(states.data[states.data.length - 1].address);
  console.log("state:", state);
  const data = remme.blockchainInfo.parseStateData(state);
  console.log("payload:", data);
  const batchStatus = await remme.blockchainInfo.getBatchStatus(batches.data[1].header_signature);
  console.log("batchId:", batchStatus);
  const peers = await remme.blockchainInfo.getPeers();
  console.log("peers:", peers);
  const receipts = await remme.blockchainInfo.getReceipts([transactions.data[1].header_signature, "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"]);
  console.log("receipts:", receipts);


  // Certificates Operations
  const certificateTransactionResult = await remme.certificate.createAndStore({
    commonName: "userName",
    email: "user@email.com",
    name: "John",
    surname: "Smith",
    countryName: "US",
    validity: 360,
    serial: `${Date.now()}`
  });

  const certificateTransactionCallback = async (err, response) => {
    if (err) {
      console.log(err);
    }
    console.log("store", response);
    if (response.status === "COMMITTED") {
      const status = await remme.certificate.check(certificateTransactionResult.certificate);
      console.log('status:', status);
      const info = await remme.publicKeyStorage.getInfo(certificateTransactionResult.certificate.publicKey);
      console.log("info:", info);
      const publicKeys = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.publicKeyHex);
      console.log("publicKeys:", publicKeys);
      const signature = remme.certificate.sign(certificateTransactionResult.certificate, "sign this");
      console.log("signature:", signature);
      const isVerify = remme.certificate.verify(certificateTransactionResult.certificate, "sign this", signature);
      console.log("isVerify:", isVerify);
      const signatureS = certificateTransactionResult.sign("sign this");
      console.log("signatureS:", signatureS);
      const isVerifyS = certificateTransactionResult.verify("sign this", signature);
      console.log("isVerifyS:", isVerifyS);
      const revoke = await remme.certificate.revoke(certificateTransactionResult.certificate);
      revoke.connectToWebSocket(async (err, response) => {
        console.log("error", err);
        console.log("revoke", response);
        const status = await remme.certificate.check(certificateTransactionResult.certificate);
        console.log(status);
      })
    }
  };

  certificateTransactionResult.connectToWebSocket(certificateTransactionCallback);

  remme.events.subscribe({
    events: RemmeEvents.SwapAll,
    // lastKnownBlockId: "db19f0e3b3f001670bebc814e238df48cef059f3f0668f57702ba9ff0c4b8ec45c7298f08b4c2fa67602da27a84b3df5dc78ce0f7774b3d3ae094caeeb9cbc82"
  }, (err, res) => {
    if (err) {
      console.log("events error", err);
      return;
    }
    console.log("events", res);
  });

  const swapId = "133102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce3806";
  const secret = "secretkey";
  const secretKey = "039eaa877ff63694f8f09c8034403f8b5165a7418812a642396d5d539f90b170";
  const secretLock = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
  const createdAt = Math.floor(Date.now() / 1000);
  const init = await remme.swap.init({
    receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
    senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
    amount: 100,
    swapId,
    createdAt,
  });

  init.connectToWebSocket(async (err, data) => {
    if (err) {
      console.log("err init", err);
    }
    console.log("data init", data);
    if (data.status === "COMMITTED") {
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
