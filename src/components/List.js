import ListItem from "./ListItem";

function List({ onUpdate, onDelete, tasks }) {
  const taskList = tasks;

  return (
    <ul className="list-unstyled container p-0">
      {taskList.map((task) => (
        <ListItem
          taskObj={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
          key={task.id}
        />
      ))}
    </ul>
  );
}

export default List;
