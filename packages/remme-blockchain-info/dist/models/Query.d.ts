export interface BaseQuery {
    head?: string;
    start?: string;
    limit?: number;
    reverse?: string;
}
export interface StateQuery extends BaseQuery {
    address?: string;
}
