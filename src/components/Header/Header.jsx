import "./header.scss";

import filterIcon from "../../assets/images/Filter.svg";

function Header({ handleToggleFilters, checkIsFilterOpen }) {
  return (
    <header className="header">
      <h1 className="header__title">Snaps</h1>
      <button
        className={`filter-button ${
          checkIsFilterOpen ? "filter-button--active" : ""
        }`}
        onClick={handleToggleFilters}
      >
        Filters
        <svg
          className="filter-icon"
          width="20px"
          height="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            className="filter-icon"
            height="20px"
            width="20px"
            href={filterIcon}
          />
        </svg>
      </button>
    </header>
  );
}

export default Header;
