import ListItem from "./ListItem";
import data from "../data";

function List() {
  const tasks = data();

  return (
    <ul className="list-unstyled container p-0">
      {tasks.map((task) => (
        <ListItem taskObj={task} key={task.id} />
      ))}
    </ul>
  );
}

export default List;
