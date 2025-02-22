import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss";

// import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import PhotoDetailsPage from "./pages/PhotoDetailsPage/PhotoDetailsPage";

const App = () => {
  
  const [photos, setPhotos] = useState([]);
  const [activeTag, setActiveTag] = useState("");

  return (
    <BrowserRouter>
      
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              // isFilterOpen={isFilterOpen}
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
    </BrowserRouter>
  );
};

export default App;

