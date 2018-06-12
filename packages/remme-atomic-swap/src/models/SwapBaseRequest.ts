export class SwapBaseRequest {
    public swap_id: string;

    constructor(swapId: string) {
        if (swapId.search(/^[0-9a-f]{64}$/) === -1) {
            throw new Error("Given swapId is not a valid");
        }
        this.swap_id = swapId;
    }
}
