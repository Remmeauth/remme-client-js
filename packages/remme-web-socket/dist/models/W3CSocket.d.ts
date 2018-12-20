import { w3cwebsocket as W3CWebSocket } from "websocket";
export interface W3CSocket extends W3CWebSocket {
    onclose: (e?: CloseEvent) => void;
}
