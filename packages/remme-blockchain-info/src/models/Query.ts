import { RemmeFamilyName } from "remme-utils";

export interface IBaseQuery {
    head?: string;
    start?: string | number;
    limit?: number;
    reverse?: string | boolean;
    family_name?: RemmeFamilyName;
}

export interface IBlockQuery {
    head?: string;
    limit?: number;
    reverse?: string | boolean;
    family_name?: RemmeFamilyName;
}

export interface IStateQuery extends IBaseQuery {
    address?: string;
}

export class BaseQuery implements IBaseQuery {
    public head?: string;
    public start?: string | number;
    public limit?: number;
    public reverse?: string | boolean;
    public family_name?: RemmeFamilyName;

    constructor(query: IBaseQuery) {
        if (query.head && query.head.search(/[a-f0-9]{128}/) === -1) {
            throw new Error(`Parameter "head" not a valid`);
        } else {
            this.head = query.head;
        }
        this.start = query.start;
        this.family_name = query.family_name;
        this.limit = query.limit;
        this.reverse = query.reverse ? "" : "false";
    }
}

export class BlockQuery implements IBlockQuery {
    public head?: string;
    public limit?: number;
    public reverse?: string | boolean;
    public family_name?: RemmeFamilyName;

    constructor(query: IBlockQuery) {
        if (query.head && query.head.search(/[a-f0-9]{128}/) === -1) {
            throw new Error(`Parameter "head" not a valid`);
        } else {
            this.head = query.head;
        }
        this.family_name = query.family_name;
        this.limit = query.limit;
        this.reverse = query.reverse ? "" : "false";
    }
}

export class StateQuery extends BaseQuery implements IStateQuery {
    public address?: string;

    constructor(query: IStateQuery) {
        super(query);
        if (typeof query.address === "string" && query.address.search(/^[a-f0-9]{70}$/) === -1) {
            throw new Error(`Parameter "address" need to a valid`);
        } else {
            this.address = query.address;
        }
    }
}

export interface IAddress {
    address?: string;
    id?: string;
    ids?: string[];
}
