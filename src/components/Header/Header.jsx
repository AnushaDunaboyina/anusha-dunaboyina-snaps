import "./header.scss";
import Button from "../Button/Button";
import filterIcon from "../../assets/images/Filter.svg";


function Header({ handleToggleFilters, checkIsFilterOpen }) {
  return (
    <header className="header">
      <h1 className="header__title">
        <a href="/" className="header__link">
          Snaps
        </a>
      </h1>

      <Button onClick={handleToggleFilters} isActive={checkIsFilterOpen}>
        Filters
        <svg
          className="button__icon"
          width="20px"
          height="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            className="button__icon"
            height="20px"
            width="20px"
            href={filterIcon}
          />
        </svg>
      </Button>
    </header>
  );
}

export default Header;
