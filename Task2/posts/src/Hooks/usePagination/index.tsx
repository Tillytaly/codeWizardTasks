import { useReducer, useCallback, useEffect } from "react";
import { initialPaginationState, reducer } from "../../Utils";
import { IUsePagination } from "./types";
function usePagination(
  data: any[],
  howManyEntriesOnPage: number
): IUsePagination {
  const [{ isFirstPage, isLastPage, entriesOnPage }, dispatch] = useReducer(
    reducer,
    initialPaginationState
  );

  const getInitialPaginationState = useCallback(() => {
    if (!isFirstPage) return;
    dispatch({
      type: "firstPage",
      payload: { data, howManyEntriesOnPage },
    });
  }, [data, howManyEntriesOnPage, isFirstPage]);

  const goToNextPage = useCallback(() => {
    dispatch({ type: "nextPage", payload: { data, howManyEntriesOnPage } });
  }, [data, howManyEntriesOnPage]);

  const goToPreviousPage = useCallback(() => {
    dispatch({ type: "previousPage", payload: { data, howManyEntriesOnPage } });
  }, [data, howManyEntriesOnPage]);

  useEffect(() => {
    getInitialPaginationState();
  }, [getInitialPaginationState]);

  return {
    goToNextPage,
    goToPreviousPage,
    isFirstPage,
    isLastPage,
    entriesOnPage,
  };
}

export { usePagination };
