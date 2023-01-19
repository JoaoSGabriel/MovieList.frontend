import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Dashboard from "./pages/Dashboard";
import MediaPage from "./pages/MediaPage";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Movie/:id" element={<MediaPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
