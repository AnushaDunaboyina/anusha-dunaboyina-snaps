import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import OurMission from "../../components/OurMission/OurMission";
import PhotoCards from "../../components/PhotoCards/PhotoCards";

const API_KEY = "71b01ef3-c48c-463a-9ddb-4f2e5372cb75";
const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";

function HomePage({ activeTag, setActiveTag, photos, setPhotos }) {

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tags, setTags] = useState([]);

  const toggleFilter = () => {
    if (isFilterOpen) {
      setActiveTag(""); // Reset activeTag when closing the filters
    }
    setIsFilterOpen(!isFilterOpen);
  };
 
  // Fetch tags and Photos from the API
  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get(`${API_URL}/tags?api_key=${API_KEY}`);
      setTags(response.data);
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(`${API_URL}/photos?api_key=${API_KEY}`);
      setPhotos(response.data);
    };
    fetchPhotos();
  }, []);

  const toggleTag = (tag) => {
    setActiveTag((previousTag) => (previousTag === tag ? "" : tag));
  };

  const filteredPhotos = activeTag
    ? photos.filter((photo) => photo.tags.includes(activeTag))
    : photos;

  return (
    <>
    <Header onToggleFilters={toggleFilter} isFilterOpen={isFilterOpen} />
      <div className={`main-content ${isFilterOpen ? "filter-open" : ""}`}>
        {isFilterOpen && (
          <div className="main-right">
            <FilterDrawer
              tags={tags}
              onToggleTag={toggleTag}
              activeTag={activeTag}
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
export default HomePage;
