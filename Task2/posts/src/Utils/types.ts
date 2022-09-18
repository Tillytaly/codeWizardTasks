export interface IPaginationState {
    currentPage: number;
    entriesOnPage: any[];
    isLastPage: boolean;
    isFirstPage: boolean;
  }
  
  interface IPayload {
    data: any[];
    howManyEntriesOnPage: number;
  }
  
  interface IAction {
    type: string;
    payload: IPayload;
  }
  export type TReducer = (state: IPaginationState, action: IAction) => IPaginationState;