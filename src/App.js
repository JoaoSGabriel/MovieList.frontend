import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Dashboard from "./pages/Dashboard/Home";
import Search from "./pages/Dashboard/Search";
import MediaPage from "./pages/MediaPage";

function App() {
  console.log("renderizou");
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/search/:title" element={<Search />} />
          <Route path="/Movie/:id" element={<MediaPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
