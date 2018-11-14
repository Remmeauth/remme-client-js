# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to

## [0.4.0]
### Added
- Class RemmeKeys that works with different types of keys. (RSA, EdDSA)

### Changed
- All methods that read or revoke keys at now work only with addresses.

## [0.4.0-0]
### Added
- Get info about public key in RemmePublicKeyStorage.
- Provide address to PublicKeyInfo that return from getInfo in RemmePublicKeyStorage.
- Get info about certificate in RemmeCertificate
- Method for creating certificate in RemmeCertificate
- Methods for sign and verify data in RemmeCertificate and CertificateTransactionResponse
- Two new addresses into AtomicSwap. In init swap and expire swap.

### Changed
- Models
  In remme-web-socket: Statuses -> BatchStatus, BatchStatuses -> BatchInfoDto
  In remme-atomic-swap: SwapInfoData -> SwapInfo
- Check in RemmePublicKeyStorage and certificate return boolean. So if given public key or certificate is in our chain and valid it returns true either false.
- Check and revoke functions in RemmePublicKeyStorage can work with public key address.
- getUserPublicKeys rename to getAccountPublicKeys into RemmePublicKeyStorage

## [0.3.4-b]
### Fixed
- Bug in account that blocks work without passed privateKeyHex in Remme.Client constructor

## [0.3.4-alfa]
### Added
- Verify method to RemmeAccount.
- Getters for privateKeyHex, publicKeyHex, address and familyName in RemmeAccount.
- Types for RemmeAccount public key and private key.
- sha512 function to remme-utils package.

### Changed
- Provided settings address for storing public key
- Check method in publicKeyStorage can use public key address
- Migrated from REST API to JSON-RPC. Created public method sendRequest.
- Provided several errors description and resolve in README file
- Provided state property for atomic-swap
- getAddressFromData -> generateAddress in remme-utils package.

### Fixed
- In getBlocks parameter start use another pattern /^\[a-f0-9]{16}$/, because validator use hex format fo block_num, so "10" is "a"

### Removed
- Batch class. Method check for batch status was migrated to blockchainInfo class. So batch.getStatus is now blockchainInfo.getBatchStatus.
- ValidatorMethods. Only RemmeMethods was left.
- In RemmeRest methods getRequest, postRequest, putRequest, deleteRequest. Since now we use sendRequest.
