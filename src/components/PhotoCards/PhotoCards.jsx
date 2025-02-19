import "./PhotoCards.scss";

function PhotoCards({ photosData }) {
  return (
    <section>
      <div className="photo-cards">
        {photosData.map((photo) => (
          <div key={photo.id} className="photo-cards__card">
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default PhotoCards;
