import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";

import Home from "./pages/Dashboard/Home";
import Search from "./pages/Dashboard/Search";
import MediaInfo from "./pages/Dashboard/MediaInfo";
import SearchBar from "./components/SearchBar";
import SignUp from "./pages/Enroll/SignUp";
import SignIn from "./pages/Enroll/SignIn";
import { UserProvider } from "./components/contexts/UserContext";

function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
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
      </UserProvider>
    </>
  );
}

export default App;
