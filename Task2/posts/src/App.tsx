import { useFetch } from "./Hooks";
import { Posts } from "./Components";
import "./App.css";

function App() {
  const { isError, isLoading, message, postData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isError) {
    <div className="App">
    return <p>{message}</p>
    </div>
  }

  if (isLoading) {
    <div className="App">
    return <p>{message}</p>
    </div>
  }

  return (
    <div className="App">
      <Posts posts={postData} />
    </div>
  );
}

export default App;
