export interface IProduct {
  id?: number;
  name?: string | null;
  code?: string;
}

export const defaultValue: Readonly<IProduct> = {};
