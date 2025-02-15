import "./FilterDrawer.scss";

function FilterDrawer({ tags, handleToggleTag, checkActiveTag }) {
  // console.log("FilterDrawer is open");
  return (
    <div className="filters__container">
      <h3 className="filters__title">Filters</h3>
      <div className="filters__tags-section">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filters__tag ${
              checkActiveTag === tag ? "filters__tag--active" : ""
            }`}
            onClick={() => handleToggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterDrawer;
