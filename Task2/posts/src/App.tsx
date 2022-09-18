import { useFetch, usePagination } from "./Hooks";
import { Posts, Navbar } from "./Components";
import "./App.css";

function App() {
  const { isError, isLoading, message, postData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const {
    goToNextPage,
    goToPreviousPage,
    isFirstPage,
    isLastPage,
    entriesOnPage,
  } = usePagination(postData, 10);


  if (isError) {
    <div className="App">
      return <p>{message}</p>
    </div>;
  }

  if (isLoading) {
    <div className="App">
      return <p>{message}</p>
    </div>;
  }

  return (
    <div className="App">
      <Posts posts={entriesOnPage} />
      <Navbar
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        onNextClick={goToNextPage}
        onPrevClick={goToPreviousPage}
      />
    </div>
  );
}

export default App;
