import "./PhotoCards.scss";

function PhotoCards({ photosData }) {
  return (
    <section>
      <div className="photo-cards">
        {photosData.map((photo) => (
          <div key={photo.id} className="photo-card">
            {/* Upper part - Image & Photographer */}
            <div className="photo-card__image-container">
              <img
                src={photo.photo}
                alt={photo.photoDescription}
                className="photo-card__image"
              />
              <div className="photo-card__photographer">
                {photo.photographer}
              </div>
            </div>
            {/* Bottom part - Tags */}
            <div className="photo-card__tags">
              {photo.tags.map((tag) => (
                <button key={tag} className="photo-card__tag">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PhotoCards;
