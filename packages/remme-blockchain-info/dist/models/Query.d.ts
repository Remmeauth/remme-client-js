export interface BaseQuery {
    head?: string;
    start?: string;
    limit?: number;
}
export interface StateQuery extends BaseQuery {
    address?: string;
}
