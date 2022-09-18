export interface IData {
  title: string;
  body: string;
  id: number;
}

export type TPostsProps = {
  posts: IData[];
};
