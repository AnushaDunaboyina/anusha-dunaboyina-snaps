import "./FilterDrawer.scss";

function FilterDrawer({ tags, onToggleTag, activeTag }) {
  return (
    <div className="filters">
      <h3 className="filters__title">Filters</h3>
      <div className="filters__tags">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filters__tag ${
              activeTag === tag ? "filters__tag--active" : ""
            }`}
            onClick={() => onToggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterDrawer;
