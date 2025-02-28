import "./PhotoCards.scss";
import { Link } from "react-router-dom";

function PhotoCards({ photosData, activeTag }) {
  return (
    <section>
      <div className="photo-cards">
        {photosData.map((photo) => (
          <Link to={`/photo/${photo.id}`} key={photo.id} className="photo-cards__card" >
            {/* Upper part - Image & Photographer */}
            <div className="photo-cards__image-container">
              <img
                src={photo.photo}
                alt={photo.photoDescription}
                className="photo-cards__image"
              />
              <div className="photo-cards__photographer">
                {photo.photographer}
              </div>
            </div>
            {/* Bottom part - Tags */}
            <div className="photo-cards__tags">
              {photo.tags.map((tag) => (
                <button key={tag} className="photo-cards__tag">
                  {tag}
                </button>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PhotoCards;
