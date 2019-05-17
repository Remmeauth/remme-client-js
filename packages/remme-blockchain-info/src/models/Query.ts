import { PATTERNS, RemmeFamilyName } from "remme-utils";

export interface IBaseQuery {
    ids?: string[];
    head?: string;
    start?: string | number;
    limit?: number;
    reverse?: string | boolean;
    family_name?: RemmeFamilyName;
}

export interface IStateQuery extends IBaseQuery {
    address?: string;
}

export class BaseQuery implements IBaseQuery {
    public ids?: string[];
    public head?: string;
    public start?: string | number;
    public limit?: number;
    public reverse?: string | boolean;
    public family_name?: RemmeFamilyName;

    constructor({
                    start,
                    ids,
                    family_name,
                    head,
                    limit,
                    reverse,
                }: IBaseQuery) {
        if (head && head.search(/[a-f0-9]{128}/) === -1) {
            throw new Error(`Parameter "head" not a valid`);
        } else {
            this.head = head;
        }

        if (ids && !this._checkIDs(ids)) {
            throw new Error("Parameter ids not valid");
        } else {
            this.ids = ids;
        }

        if (start && !this._checkStart(start)) {
           throw new Error("Parameter `start` not a valid.");
        } else {
            this.start = start;
        }

        this.family_name = family_name;
        this.limit = limit;
        this.reverse = reverse ? "" : "false";
    }

    private _checkStart(start: string | number): boolean {
        if (typeof start === "string") {
            return PATTERNS.HEADER_SIGNATURE.test(start) || PATTERNS.BLOCK_NUMBER.test(start);
        } else {
            return true;
        }
    }

    private _checkIDs(ids: string[]): boolean {
        return ids.every((id) => PATTERNS.HEADER_SIGNATURE.test(id));
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
