export interface BaseQuery {
    head?: string;
    start?: string;
    limit?: number;
    // reverse?: boolean;
}

export interface StateQuery extends BaseQuery {
    address?: string;
}
