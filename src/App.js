import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";

import Home from "./pages/Dashboard/Home";
import Search from "./pages/Dashboard/Search";
import MediaInfo from "./pages/Dashboard/MediaInfo";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <SearchBar>
                <Home />
              </SearchBar>
            }
          />
          <Route
            path="/search/"
            element={
              <SearchBar>
                <Search />
              </SearchBar>
            }
          />
          <Route
            path="/search/:title"
            element={
              <SearchBar>
                <Search />
              </SearchBar>
            }
          />
          <Route path="/movie/:movieId/:movieName" element={<MediaInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
