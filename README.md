<img src="https://avatars1.githubusercontent.com/u/29229038" />

REMME JavaScript Client
==========
[![npm](https://img.shields.io/npm/dm/remme.svg)](https://www.npmjs.com/package/remme)

**An open source JS integration library for REMChain, simplifying the access and interaction with REMME nodes both public or permissioned.**

## How to use
### 1. Install and run REMME node with required REST API methods  enabled.
You can check out how to do that at [REMME core repo](https://github.com/Remmeauth/remme-core/).
*Note: you can enable/disable methods by modifying **REMME_REST_API_AVAILABLE_METHODS** eviroment variable at the .env file.*

### 2. Install the latest version of library to your JS project
#### Node

```bash
npm install remme
```

#### Yarn

```bash
yarn add remme
```

#### In the Browser

Use the prebuild ``dist/remme.min.js``, or
build using the [remme][repo] repository:

```bash
npm run build
```

Then include `dist/remme.min.js` in your html file.
This will expose `Remme` on the window object.

### 3. Run methods of **RemmeClient** class to interract with REMME node.

## Examples
#### Implement Remme client
```js
var Remme = require("remme");
// import Remme from "remme";

const nodeAddress = "192.168.0.1:8080"; // <-- Address of your local node's REST API server (localhost:8080) by default
const socketAddress = "192.168.0.1:9080"; // <-- Address of local node's WebSocket server (localhost:9080) by default
const privateKeyHex = "7f752a99bbaf6755dc861bb4a7bb19acb913948d75f3b718ff4545d01d9d4f10";
const networkConfig = {
    nodeAddress: "localhost",
    nodePort: "8080",
    sslMode: false,
};
const remme = new Remme.Client({ privateKeyHex, networkConfig });
```

#### Tokens
```js
const someRemmeAddress = "0306796698d9b14a0ba313acc7fb14f69d8717393af5b02cc292d72009b97d8759";
const balance = await remme.token.getBalance(someRemmeAddress);
console.log(`Account ${someRemmeAddress} balance - ${balance} REM`);

const transactionResult = await remme.token.transfer(someRemmeAddress, 100);
console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`);

const transactionCallback = async (err, result) => {
    if (err) return;
    console.log("token", result);
    const newBalance = await remme.token.getBalance(someRemmeAddress);
    console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
    transactionResult.closeWebSocket()
};

transactionResult.connectToWebSocket(transactionCallback);

```

#### Certificates
```js
const certificateTransactionResult = await remme.certificate.createAndStore({
    commonName: "userName1",
    email: "user@email.com",
    name: "John",
    surname: "Smith",
    countryName: "US",
    validity: 360,
    serial: "some serial"
});

const certificateTransactionCallback = async (err, response) => {
    if (err) return;
    console.log("certificate", response);
    console.log(`Certificate was saved on REMchain at block number: ${response.block_number}`);
    const certificateStatus = await remme.certificate.check(certificateTransactionResult.certificate);
    console.log(`Certificate IsValid = ${certificateStatus.valid}`);
    certificateTransactionResult.closeWebSocket();
};

certificateTransactionResult.connectToWebSocket(certificateTransactionCallback);
```

#### Subscribing to Events
RemmeEvents is enums which describe all available events.
```js
import { RemmeEvents } from "remme-web-socket-events";

remme.events.subscribe({
    events: RemmeEvents.SwapInit
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res);
})
```

Also we give a possibility to start listen events from previous block by providing last known block id

```js
import { RemmeEvents } from "remme-web-socket-events";

remme.events.subscribe({
    events: RemmeEvents.SwapInit,
    lastKnownBlockId: "db19f0e3b3f001670bebc814e238df48cef059f3f0668f57702ba9ff0c4b8ec45c7298f08b4c2fa67602da27a84b3df5dc78ce0f7774b3d3ae094caeeb9cbc82"
    }, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("events", res);
});
```

Unsubscribe from listening events

```js
remme.events.unsubscribe();
```

## License

REMME software and documentation are licensed under `Apache License Version 2.0 <LICENSE>`_.
