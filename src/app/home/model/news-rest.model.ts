export interface INewsREST {
  status?: string;
  totalResults?: number;
  articles?: IArticle[];
}

export interface IArticle {
  source?: ISource;
  author?: string;
  title?: string;
  description?: string | null;
  url?: string;
  urlToImage?: string | null;
  publishedAt?: Date;
  content?: null;
}

export interface ISource {
  id?: ID;
  name?: Name;
}

export enum ID {
  GoogleNews = "google-news",
}

export enum Name {
  GoogleNews = "Google News",
}
