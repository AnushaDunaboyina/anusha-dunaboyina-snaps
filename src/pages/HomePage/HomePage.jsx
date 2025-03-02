import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import OurMission from "../../components/OurMission/OurMission";
import PhotoCards from "../../components/PhotoCards/PhotoCards";

const API_URL = import.meta.env.VITE_API_URL;

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
      try {
        const response = await axios.get(`${API_URL}/tags`);
        setTags(response.data);
      } catch (error) {
        console.log("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos`);
        setPhotos(response.data);
      } catch (error) {
        console.log("Error fetching photos data:", error);
      }
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
          <PhotoCards photosData={filteredPhotos} activeTag={activeTag} />
        </div>
      </div>
    </>
  );
}
export default HomePage;
