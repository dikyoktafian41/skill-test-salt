export interface Pagination {
  page: number;
  size: number;
  sort: string[];
  [key: string]: any;
}

export interface Search {
  query: string;
}

export interface SearchWithPagination extends Search, Pagination {}
