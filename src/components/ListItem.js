function ListItem({ onUpdate, onDelete, taskObj }) {
  return (
    <li className={"card mb-3 px-3 " + (taskObj.completion ? "completed" : "")}>
      <div className="card-body container-lg">
        <div className="row">
          <h5 className="card-title col-lg-10 mb-0 p-1 d-flex justify-content-start align-items-center">
            {taskObj.name + (taskObj.completion ? " - COMPLETED" : "")}
          </h5>
          {taskObj.completion ? (
            <button
              className="col-lg-2 btn btn-primary"
              onClick={() => onUpdate(taskObj.id)}
            >
              <i className="bi bi-arrow-counterclockwise"></i> Undo
            </button>
          ) : (
            <div class="btn-group col-lg-2 p-1">
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => onDelete(taskObj.id)}
              >
                <i class="bi bi-trash-fill"></i>
              </button>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => onUpdate(taskObj.id)}
              >
                <i class="bi bi-check"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default ListItem;
