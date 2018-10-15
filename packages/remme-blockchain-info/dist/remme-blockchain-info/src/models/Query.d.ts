export interface IBaseQuery {
    head?: string;
    start?: string | number;
    limit?: number;
    reverse?: string | boolean;
}
export interface IStateQuery extends IBaseQuery {
    address?: string;
}
export declare class BaseQuery implements IBaseQuery {
    head: string;
    start: string;
    limit: number;
    reverse: string;
    constructor(query: IBaseQuery);
}
export declare class StateQuery extends BaseQuery implements IStateQuery {
    address: string;
    constructor(query: IStateQuery);
}
