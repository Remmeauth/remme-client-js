export { BatchStateUpdateDto, BatchInfo, BatchInfoDto, IBatch, BatchStatus } from "./BatchStateUpdateDto";
export { IBlock, BlockInfoDto } from  "./BlockInfoDto";
export { ITransfer, ITransferClientInfo, TransferInfoDto } from "./TransferInfoDto";

export {
    RemmeWebsocketResult,
    RemmeMethods,
} from "./RemmeMethods";
export { RemmeEvents } from "./RemmeEvents";

export { RemmeRequestParams, IRemmeRequestParams } from "./RemmeRequestParams";
export {
    IJsonRpcError,
    IJsonRpcResponse,
    IJSonRpcResult,
    IJsonRpcRequest,
    JsonRpcRequest,
} from "./JsonRpc";
export { ErrorMessage } from "./ErrorMessage";
export { ErrorFromEvent } from "./ErrorFromEvent";
export { SwapInitDto } from "./SwapInitDto";
export { SwapInfoDto } from "./SwapInfoDto";
export { SwapInfo } from "./SwapInfo";
export { SwapState } from "./SwapState";

export class SwapRequest {
    constructor(
        public swap_id: string,
    ) {}
}
