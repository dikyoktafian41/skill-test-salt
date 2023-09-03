export interface INews {
  id?: number;
  title?: string;
  views?: number;
  image?: string | null;
  updatedAt?: Date;
  author?: string
}

export class News implements INews {
  constructor(
    public id?: number,
    public title?: string,
    public views?: number,
    public image?: string | null,
    public updatedAt?: Date,
    public author?: string
  ) {}
}
