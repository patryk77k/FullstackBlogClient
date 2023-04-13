import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Post from "./Post";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={"/login"} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
