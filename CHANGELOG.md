# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to

## [Unreleased]
### Changed
- Provided settings address for storing public key
- Check method in publicKeyStorage can use public key address
- Migrated from REST API to JSON-RPC. Created public method sendRequest.
- Provided several errors description and resolve in README file
- Provided state property for atomic-swap

### Fixed
- In getBlocks parameter start use another pattern /^\[a-f0-9]{16}$/, because validator use hex format fo block_num, so "10" is "a"

### Removed
- Batch class. Method check for batch status was migrated to blockchainInfo class
- ValidatorMethods. Only RemmeMethods was left.
- In RemmeRest methods getRequest, postRequest, putRequest, deleteRequest. Since now we use sendRequest.