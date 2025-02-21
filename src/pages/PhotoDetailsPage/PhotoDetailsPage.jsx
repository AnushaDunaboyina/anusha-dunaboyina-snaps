import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./photoDetailsPage.scss";

import Form from "../../components/Form/Form";

function PhotoDetailsPage() {
  const { photoId } = useParams();
  console.log("Photo ID:", photoId);

  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    const fetchPhotoData = async () => {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}?api_key=71b01ef3-c48c-463a-9ddb-4f2e5372cb75`
      );
      setPhotoData(response.data);
    };

    fetchPhotoData();
  }, [photoId]);

  // Add loading state to handle time before the data load
  if (!photoData) {
    return <>loading photos...</>;
  }

  // convert timestamp to mm/dd/yyyy

  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">
          <a href="/" className="header__link" aria-label="Snaps Homepage">
            Snaps
          </a>
        </h1>
        <div className="header__back-home">
          <svg
            className="header__arrow-icon"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 6.7929C-0.0976315 7.18342 -0.0976314 7.81658 0.292893 8.20711L6.65686 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819458 8.07107 0.428933C7.68054 0.038409 7.04738 0.038409 6.65685 0.428933L0.292892 6.7929ZM21 6.5L1 6.5L1 8.5L21 8.5L21 6.5Z"
              fill="#1E6655"
            />
          </svg>
          <Link to="/" className="header__back-home-link">
            {" "}
            Home{" "}
          </Link>
        </div>
      </header>

      <section className="photo-details__card">
        <div className="photo-details">
          {/* <div className="photo-details"> */}
          <img
            src={photoData.photo}
            alt={photoData.photoDescription}
            className="photo-details__image"
          />

          <div className="photo-details__tags">
            {photoData.tags &&
              photoData.tags.map((tag) => (
                <button key={tag} className="photo-details__tag-button">
                  {tag}
                </button>
              ))}
          </div>

          <div className="photo-details__info">
            <div className="photo-details__info-left">
              {/* <div className="photo-details__info-main"> */}
              <div className="photo-details__likes">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="photo-details__likes-icon"
                >
                  <path
                    d="M10.875 0C9.57 0 8.3175 0.617984 7.5 1.59455C6.6825 0.617984 5.43 0 4.125 0C1.815 0 0 1.84632 0 4.19619C0 7.08011 2.55 9.42997 6.4125 13.0005L7.5 14L8.5875 12.9929C12.45 9.42997 15 7.08011 15 4.19619C15 1.84632 13.185 0 10.875 0ZM7.575 11.8638L7.5 11.9401L7.425 11.8638C3.855 8.57548 1.5 6.40109 1.5 4.19619C1.5 2.6703 2.625 1.52589 4.125 1.52589C5.28 1.52589 6.405 2.2812 6.8025 3.32643H8.205C8.595 2.2812 9.72 1.52589 10.875 1.52589C12.375 1.52589 13.5 2.6703 13.5 4.19619C13.5 6.40109 11.145 8.57548 7.575 11.8638Z"
                    fill="#0C1E1A"
                  />
                </svg>

                <p className="photo-details__likes-count">
                  {photoData.likes} likes
                </p>
              </div>

              <p className="photo-details__photographer">
                Photo by{" "}
                <span className="photo-details__photographer-name">
                  {photoData.photographer}
                </span>
              </p>
            </div>

            <div className="photo-details__timestamp">
              <p>{convertTimestampToDate(photoData.timestamp)}</p>
            </div>
            {/* </div> */}
          </div>
          {/* </div> */}
        </div>
      </section>
      <Form />
    </>
  );
}

export default PhotoDetailsPage;
