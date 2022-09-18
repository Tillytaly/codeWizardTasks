export interface IData {
  title: string;
  body: string;
  id: number;
}

export interface IApiData extends IData {}

export type TUseFech = {
  postData: IData[];
  isError: boolean;
  message: string;
  isLoading: boolean;
};
