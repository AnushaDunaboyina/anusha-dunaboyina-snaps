import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";

import tagsArray from "../src/data/tags.json";
import OurMission from "./components/OurMission/OurMission";

function App() {
  // useState for Filters button
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  //  useState for Tags button
  const [activeTag, setActiveTag] = useState("");
  const toggleTag = (tag) => {
    setActiveTag((previousTag) => (previousTag === tag ? "" : tag));
  };

  return (
    <>
      <Header
        handleToggleFilters={toggleFilter}
        CheckIsFilterOpen={isFilterOpen}
      />

      {isFilterOpen && (
        <FilterDrawer
          tags={tagsArray}
          handleToggleTag={toggleTag}
          checkActiveTag={activeTag}
        />
      )}
      
      <OurMission />

      <Footer />
    </>
  );
}

export default App;
