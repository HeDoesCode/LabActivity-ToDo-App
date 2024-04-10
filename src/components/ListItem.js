import { useState } from "react";

function ListItem({ onUpdate, onDelete, taskObj, makeEditable, onEditUpdate }) {
  const [name, setName] = useState(taskObj.name);
  const [oldName, setOldName] = useState(taskObj.name);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      alert("Task name cannot be empty!");
      setName(oldName);
      return;
    }

    setOldName(name);
    onEditUpdate(taskObj.id, name);
  }

  let component = taskObj.isEditable ? (
    <li className="card mb-3 px-3">
      <div className="card-body container-lg">
        <form className="row" onSubmit={handleSubmit}>
          <input
            className="col-lg-10 mb-0 d-flex justify-content-start align-items-center text-dark rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div class="btn-group col-lg-2 p-1">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setName(taskObj.name);
                makeEditable(taskObj.id);
              }}
            >
              Cancel
            </button>
            <input type="submit" className="btn btn-success" value="Save" />
          </div>
        </form>
      </div>
    </li>
  ) : (
    <li className={"card mb-3 px-3 " + (taskObj.completion ? "completed" : "")}>
      <div className="card-body container-lg">
        <div className="row">
          <h5 className="card-title col-lg-10 mb-0 p-1 text-start fs-2">
            {taskObj.name + (taskObj.completion ? " - COMPLETED" : "")}
            <p className="text-start fs-5 mt-1 p-0 fw-normal">
              Priority: {taskObj.quantity}
            </p>
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
                className="btn btn-danger"
                onClick={() => onDelete(taskObj.id)}
              >
                <i class="bi bi-trash-fill"></i>
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => makeEditable(taskObj.id)}
              >
                <i className="bi bi-pencil-fill"></i>
              </button>
              <button
                type="button"
                className="btn btn-success"
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
  return component;
}

export default ListItem;
