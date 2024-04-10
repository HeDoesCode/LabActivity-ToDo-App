import ListItem from "./ListItem";

function List({
  onUpdate,
  onDelete,
  tasks,
  makeEditable,
  onEditUpdate,
  filter,
  sortBy,
}) {
  let sortedTask;

  switch (sortBy) {
    case "name":
      sortedTask = tasks.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "priority":
      sortedTask = tasks.sort((a, b) => a.quantity - b.quantity);
      break;
    case "completion":
      sortedTask = tasks.sort((a, b) =>
        a.completion === b.completion ? 0 : a.completion ? -1 : 1
      );
      break;
    default:
      sortedTask = tasks;
  }

  console.log(sortBy);
  return (
    <ul className="list-unstyled container p-0">
      {sortedTask
        .filter((task) => {
          if (!filter) return true;
          if (task.name.includes(filter)) {
            return true;
          }
        })
        .map((task) => (
          <ListItem
            taskObj={task}
            onUpdate={onUpdate}
            onEditUpdate={onEditUpdate}
            onDelete={onDelete}
            makeEditable={makeEditable}
            key={task.id}
          />
        ))}
    </ul>
  );
}

export default List;
