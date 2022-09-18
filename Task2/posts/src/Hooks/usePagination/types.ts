export interface IUsePagination {
goToPreviousPage: () => void;
goToNextPage: () => void;
isFirstPage: boolean;
isLastPage: boolean;
entriesOnPage: any[];
}