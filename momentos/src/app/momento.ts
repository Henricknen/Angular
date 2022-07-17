export interface Momento {
  id?: number,
  title: string,
  descripition: string,
  image: string,
  created_at?: string,
  updated_at?: string,
  comments?: [{text: string; username: string}];
}