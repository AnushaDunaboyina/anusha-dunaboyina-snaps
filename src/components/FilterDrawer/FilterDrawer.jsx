import "./FilterDrawer.scss";

function FilterDrawer({ tags, handleToggleTag, checkIsTagOn }) {
  return (
    <div className="filters__container">
      <h3 className="filters__title">Filters</h3>
      <div className="filters__tags-section">
        {tags.map((tag) => (
          <button key={tag} className={`filters__tag ${checkIsTagOn ? 'filters__tag--active' : ''}`}
          onClick={handleToggleTag}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterDrawer;
