import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
