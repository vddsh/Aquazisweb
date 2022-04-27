import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Constructor from "./pages/Constructor/Constructor";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Private from "./components/Private/Private";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/forum" element={<PageNotFound />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </>
  );
}

export default App;
