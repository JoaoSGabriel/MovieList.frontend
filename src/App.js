import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SignUp from "./pages/Enroll/SignUp";
import SignIn from "./pages/Enroll/SignIn";

import Navbar from "./components/navbar";
import Home from "./pages/Dashboard/Home";
import Search from "./pages/Dashboard/Search";
import MediaInfo from "./pages/Dashboard/MediaInfo";
import SearchBar from "./components/SearchBar";
import Profile from "./pages/Dashboard/Profile";

import { UserProvider } from "./components/contexts/UserContext";

import useToken from "./hooks/useToken";
import ListMovies from "./pages/Dashboard/ListMovies";

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
            <Route
              path="/profile"
              element={
                <ProtectedRouteGuard>
                  <Profile />
                </ProtectedRouteGuard>
              }
            />
            <Route path="/movie/:movieId" element={<MediaInfo />} />
            <Route
              path="/movies"
              element={
                <ProtectedRouteGuard>
                  <ListMovies />
                </ProtectedRouteGuard>
              }
            />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}

export default App;
