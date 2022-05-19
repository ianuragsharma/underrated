import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ExplorePage, HomePage } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/explore" exact element={<ExplorePage />} />
      </Routes>
    </div>
  );
}

export default App;
