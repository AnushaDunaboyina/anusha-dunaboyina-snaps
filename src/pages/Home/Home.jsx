import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import OurMission from "../../components/OurMission/OurMission";
import PhotoCards from "../../components/PhotoCards/PhotoCards";

import tagsArray from "../../data/tags.json";
import photos from "../../data/photos.json";

function Home({ isFilterOpen, activeTag, setActiveTag }) {
  const toggleTag = (tag) => {
    setActiveTag((previousTag) => (previousTag === tag ? "" : tag));
  };

  const filteredPhotos = activeTag
    ? photos.filter((photo) => photo.tags.includes(activeTag))
    : photos;

  return (
    <>
      <div className={`main-content ${isFilterOpen ? "filter-open" : ""}`}>
        {isFilterOpen && (
          <div className="main-right">
            <FilterDrawer
              tags={tagsArray}
              handleToggleTag={toggleTag}
              checkActiveTag={activeTag}
            />
          </div>
        )}
        <div className="main-left">
          <OurMission />
          <PhotoCards photosData={filteredPhotos} />
        </div>
      </div>
    </>
  );
}
export default Home;
