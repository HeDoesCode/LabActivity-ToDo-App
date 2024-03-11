import { useState } from "react";

function Form({ onAddTask }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newTask = { name, quantity, completion: false, id: Date.now() }; // data from form
    // console.log(newTask);
    setName("");
    setQuantity(1);
    onAddTask(newTask);
  }

  return (
    <form className="container-lg mb-5" onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <select
          className="col-lg-1 m-1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="col-lg-9 m-1 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Task name"
        />
        <input
          type="submit"
          className="col-lg-1 btn btn-primary m-1 fw-bold
          "
          value="+ Add"
        />
      </div>
    </form>
  );
}

export default Form;
