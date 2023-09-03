export interface IActivity {
  title?: string;
  status?: string;
  image?: string | null;
  description?: string | null;
  updated?: string;
  selected?: boolean;
}

export class Activity implements IActivity {
  constructor(
    public title?: string,
    public status?: string,
    public image?: string | null,
    public description?: string | null,
    public updated?: string,
    public selected?: boolean,
  ) { }
}