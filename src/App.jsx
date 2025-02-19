import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss";

import Header from "../src/components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  // useState for Filters button
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
      <Header
        onToggleFilters={toggleFilter}
        isFilterOpen={isFilterOpen}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isFilterOpen={isFilterOpen}
              activeTag={activeTag}
              setActiveTag={setActiveTag}
            />
          }
        />
        {/* <Route path="/pageDetails" element={<PageDetails />} */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
