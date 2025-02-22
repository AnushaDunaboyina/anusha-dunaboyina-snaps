import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss";

import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import PhotoDetailsPage from "./pages/PhotoDetailsPage/PhotoDetailsPage";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [activeTag, setActiveTag] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              photos={photos}
              setPhotos={setPhotos}
            />
          }
        />
        <Route path="/photo/:id" element={<PhotoDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
