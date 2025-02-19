import { useState, useEffect } from "react";
import axios from "axios";

import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import OurMission from "../../components/OurMission/OurMission";
import PhotoCards from "../../components/PhotoCards/PhotoCards";

const API_KEY = "71b01ef3-c48c-463a-9ddb-4f2e5372cb75";
const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";

function Home({ isFilterOpen, activeTag, setActiveTag }) {
  const [tags, setTags] = useState([]);
  const [photos, setPhotos] = useState([]);

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
      <div className={`main-content ${isFilterOpen ? "filter-open" : ""}`}>
        {isFilterOpen && (
          <div className="main-right">
            <FilterDrawer
              tags={tags}
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
