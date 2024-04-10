function FilterAndSort({ setFilter, setSortBy }) {
  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-lg-6">
          <form className="mb-5">
            <input
              className="form-control text-dark"
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search from list"
            />
          </form>
        </div>
        <div className="col-lg-6">
          <select
            className="form-control"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">-- Sort Options --</option>
            <option value="name">-- Sort by Name --</option>
            <option value="priority">-- Sort by Priority --</option>
            <option value="completion">-- Sort by Completion --</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterAndSort;
