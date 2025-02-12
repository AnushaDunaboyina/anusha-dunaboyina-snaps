import "./Footer.scss";

import facebookIcon from "../../assets/images/Facebook.svg";
import twitterIcon from "../../assets/images/X_twitter.svg";
import instagramIcon from "../../assets/images/Instagram.svg";
import pinterestIcon from "../../assets/images/Pinterest.svg";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__content">

        <section className="footer__links">

          <div className="footer__title-block">
            <h3>
              <a className="footer__title" href="">
                Snaps
              </a>
            </h3>
          </div>

          <div className="footer__link-lists">
            <div className="footer__link-list">
              <a className="footer__link" href="">
                For Photographers
              </a>
              <a className="footer__link" href="">
                Hire talent
              </a>
              <a className="footer__link" href="">
                Inspiration
              </a>
            </div>

            <div className="footer__link-list">
              <a className="footer__link" href="">
                About
              </a>
              <a className="footer__link" href="">
                Careers
              </a>
              <a className="footer__link" href="">
                Support
              </a>
            </div>
          </div>
        </section>

        <div className="footer__icons">
          <svg
            className="footer-icon"
            width="24px"
            height="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image
              className="footer-icon"
              height="24px"
              width="24px"
              href={facebookIcon}
            />
          </svg>

          <svg
            className="footer-icon"
            width="24px"
            height="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image
              className="footer-icon"
              height="24px"
              width="24px"
              href={twitterIcon}
            />
          </svg>

          <svg
            className="footer-icon"
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image
              className="footer-icon"
              height="20px"
              width="20px"
              href={instagramIcon}
            />
          </svg>

          <svg
            className="footer-icon"
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image
              className="footer-icon"
              height="20px"
              width="20px"
              href={pinterestIcon}
            />
          </svg>
        </div>
      </section>

      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2024 Snaps</p>
        <a className="footer__bottom-link" href="">
          Terms
        </a>
        <a className="footer__bottom-link" href="">
          Privacy
        </a>
        <a className="footer__bottom-link" href="">
          Cookies
        </a>
      </div>
    </footer>
  );
}

export default Footer;
