import { Events } from "./models";
export interface IRemmeWebSocket {
    data: object;
    isEvent: boolean;
    eventToSubscribe: Events;
    socketAddress: string;
    connectToWebSocket(callback: any): void;
    closeWebSocket(): void;
}
