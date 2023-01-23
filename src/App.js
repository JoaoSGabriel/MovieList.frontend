import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";

import Dashboard from "./pages/Dashboard/Home";
import Search from "./pages/Dashboard/Search";
import MediaInfo from "./pages/Dashboard/MediaInfo";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/search/:title" element={<Search />} />
          <Route path="/movie/:movieId/:movieName" element={<MediaInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
