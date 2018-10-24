export { SwapInitDto } from "./SwapInitDto";
export { SwapInfoDto } from "./SwapInfoDto";
export { SwapInfo } from "./SwapInfo";
export { SwapState } from "./SwapState";

export class SwapRequest {
    constructor(
        public swap_id: string,
    ) {}
}
