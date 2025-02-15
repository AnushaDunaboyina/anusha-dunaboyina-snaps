import { useState } from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
import OurMission from "./components/OurMission/OurMission";
import PhotoCards from "./components/PhotoCards/PhotoCards";

import tagsArray from "../src/data/tags.json";
import photos from "../src/data/photos.json";

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

  const filteredPhotos = activeTag
    ? photos.filter((photo) => photo.tags.includes(activeTag))
    : photos;

  return (
    <>
      <Header
        handleToggleFilters={toggleFilter}
        checkIsFilterOpen={isFilterOpen}
      />

      {isFilterOpen && (
        <FilterDrawer
          tags={tagsArray}
          handleToggleTag={toggleTag}
          checkActiveTag={activeTag}
        />
      )}

      <OurMission />

      <PhotoCards photosData={filteredPhotos} />

      <Footer />
    </>
  );
}

export default App;
