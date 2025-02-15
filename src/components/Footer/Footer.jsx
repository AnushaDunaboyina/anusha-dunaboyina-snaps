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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM18.4594 8.09766H16.9617C15.7875 8.09766 15.5602 8.65547 15.5602 9.47578V11.2828H18.3633L17.9977 14.1117H15.5602V21.375H12.6375V14.1141H10.193V11.2828H12.6375V9.19687C12.6375 6.77578 14.1164 5.45625 16.2773 5.45625C17.3133 5.45625 18.2016 5.53359 18.4617 5.56875V8.09766H18.4594Z"
              fill="#1E6655"
            />
          </svg>

          <svg
            className="footer-icon"
            width="24"
            height="24"
            viewBox="-2 -2 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 0.937134H18.8171L12.1171 8.61428L20 19.0628H13.8286L8.99143 12.7271L3.46286 19.0628H0.392857L7.55857 10.8486L0 0.938562H6.32857L10.6943 6.72856L15.75 0.937134ZM14.6714 17.2228H16.3714L5.4 2.68142H3.57714L14.6714 17.2228Z"
              fill="#1E6655"
            />
          </svg>

          <svg
            className="footer-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
              fill="#1E6655"
            />
          </svg>

          <svg
            className="footer-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5072 2C8.05885 1.99845 5.68694 2.85244 3.80157 4.41431C1.9162 5.97618 0.63589 8.14775 0.182023 10.5535C-0.271845 12.9593 0.129259 15.448 1.31598 17.5894C2.5027 19.7308 4.40044 21.3902 6.68105 22.2808C6.58918 21.4499 6.50517 20.1729 6.71649 19.2659C6.90813 18.4456 7.94768 14.0461 7.94768 14.0461C7.94768 14.0461 7.63397 13.4174 7.63397 12.4882C7.63397 11.0274 8.48058 9.938 9.53456 9.938C10.4297 9.938 10.8629 10.61 10.8629 11.4172C10.8629 12.3176 10.2893 13.6642 9.99265 14.9124C9.74589 15.9571 10.5177 16.8103 11.548 16.8103C13.4145 16.8103 14.8491 14.8415 14.8491 12.0013C14.8491 9.48781 13.0417 7.73038 10.4625 7.73038C7.47515 7.73038 5.72157 9.97081 5.72157 12.2861C5.72157 13.1891 6.0694 14.1564 6.50255 14.6827C6.53985 14.7224 6.56623 14.771 6.57911 14.8239C6.59199 14.8768 6.59094 14.9322 6.57605 14.9846C6.49598 15.3153 6.31879 16.0293 6.28466 16.175C6.23872 16.3666 6.1324 16.4073 5.93289 16.3154C4.62033 15.7051 3.80129 13.7876 3.80129 12.2467C3.80129 8.93525 6.20853 5.89419 10.7395 5.89419C14.3819 5.89419 17.2131 8.489 17.2131 11.9579C17.2131 15.5765 14.9305 18.4889 11.7646 18.4889C10.7001 18.4889 9.69995 17.9364 9.35737 17.2828L8.70371 19.7791C8.46614 20.6913 7.82561 21.8345 7.39771 22.5314C8.84149 22.9778 10.3646 23.1073 11.863 22.9111C13.3615 22.7149 14.7999 22.1975 16.08 21.3944C17.3602 20.5913 18.4518 19.5214 19.2805 18.2577C20.1092 16.994 20.6553 15.5663 20.8816 14.0722C21.1079 12.5781 21.009 11.0527 20.5917 9.60036C20.1743 8.14798 19.4484 6.80279 18.4635 5.65667C17.4785 4.51056 16.2578 3.59054 14.8847 2.95946C13.5116 2.32838 12.0184 2.00111 10.5072 2Z"
              fill="#1E6655"
            />
          </svg>

          {/* <svg
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
          </svg> */}

          {/* <svg
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
            width="24px"
            height="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image
              className="footer-icon"
              height="24px"
              width="24px"
              href={instagramIcon}
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
              href={pinterestIcon}
            />
          </svg> */}
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
