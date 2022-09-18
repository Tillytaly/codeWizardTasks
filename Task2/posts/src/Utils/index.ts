import { IPaginationState, TReducer } from "./types";
export const initialPaginationState: IPaginationState = {
  currentPage: 1,
  entriesOnPage: [],
  isLastPage: false,
  isFirstPage: true,
};

export const getEntriesOnPage = (
  currentPage: number,
  entries: any[],
  howManyEntriesOnPage: number
) => {
  const startIndex = (currentPage - 1) * howManyEntriesOnPage;
  const entriesOnPage = entries.slice(
    startIndex,
    howManyEntriesOnPage * currentPage + 1
  );

  return entriesOnPage;
};

export const reducer: TReducer = (state, { type, payload }) => {
  const { data, howManyEntriesOnPage } = payload;
  const lastPageNumber = Math.ceil(data.length / howManyEntriesOnPage);

  switch (type) {
    case "firstPage":
      return {
        ...state,
        entriesOnPage: getEntriesOnPage(1, data, howManyEntriesOnPage),
        isLastPage: state.currentPage === lastPageNumber,
      };

    case "nextPage":
      const nextPage = state.currentPage + 1;

      return {
        isFirstPage: false,
        entriesOnPage: getEntriesOnPage(nextPage, data, howManyEntriesOnPage),
        currentPage: nextPage,
        isLastPage: nextPage === lastPageNumber,
      };

    case "previousPage":
      const prevPage = state.currentPage - 1;
      const isFirstPage = prevPage === 1;
      if (isFirstPage) return { ...state, isFirstPage };
      return {
        ...state,
        entriesOnPage: getEntriesOnPage(prevPage, data, howManyEntriesOnPage),
        currentPage: prevPage,
      };

    default:
      throw new Error("Unknown action type.");
  }
};
