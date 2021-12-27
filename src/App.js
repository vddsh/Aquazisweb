import react from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Constructor from "./pages/Constructor/Constructor";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/forum" element={<PageNotFound />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
