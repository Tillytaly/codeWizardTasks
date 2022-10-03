import { OnClickOutsideProvider } from "./Contexts/OnClickOutsideContext";
import { Container } from "./Container";
import "./App.css";

function App() {
  return (
    <OnClickOutsideProvider>
      <div className="App">
        <Container />
      </div>
    </OnClickOutsideProvider>
  );
}

export default App;
