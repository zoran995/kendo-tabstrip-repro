import "./App.scss";
import { TabStripForm } from "./TabstripForm";
import kendoka from "./kendoka.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kendoka} className="App-logo" alt="kendoka" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TabStripForm keepTabsMounted />
      </header>
    </div>
  );
}

export default App;
