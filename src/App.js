import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import LifeCycle from "./Page/LifeCycle/LifeCycle";
import Header from "./Components/Header/Header";
import LoginPage from "./Page/LoginPage/LoginPage";
import LearnHook from "./Page/LearnHook/LearnHook";
import ShoeShop from "./Page/ShoeShop/ShoeShop";
import UseEffect from "./Page/UseEffect/UseEffect";
import UserManagement from "./Page/UserManagement/UserManagement";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/life-cycle" element={<LifeCycle />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/leanr-hook" element={<LearnHook />} />
          <Route path="/shoe-shop" element={<ShoeShop />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
