import { INodeConfigResponse } from "./NodeConfigResponse";

export class NodeConfigDTO {
    public nodePublicKey: string;

    constructor({ node_public_key }: INodeConfigResponse) {
        this.nodePublicKey = node_public_key;
    }
}
