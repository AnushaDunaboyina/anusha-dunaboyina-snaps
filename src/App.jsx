import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.scss";

import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";

const App = () => {

  // useState for Filters button
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  const toggleFilter = () => {
    if (isFilterOpen) {
      setActiveTag(""); // Reset activeTag when closing the filters
    }
    setIsFilterOpen(!isFilterOpen);
  };

  //  useState for Tags button
  const [activeTag, setActiveTag] = useState("");

  return (
    <BrowserRouter>
      <Header onToggleFilters={toggleFilter} isFilterOpen={isFilterOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isFilterOpen={isFilterOpen}
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              photos={photos}
              setPhotos={setPhotos}
            />
          }
        />
        <Route path="/photo/:photoId" element={<PhotoDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

const Layout = ({ isFilterOpen, onToggleFilters }) => {
  return (
    <>
      <Header isFilterOpen={isFilterOpen} onToggleFilters={onToggleFilters} />
      <Outlet />
    </>
  );
};
