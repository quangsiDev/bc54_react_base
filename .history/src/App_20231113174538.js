import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import LifeCycle from "./Page/LifeCycle/LifeCycle";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/life-cycle" element={<LifeCycle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
