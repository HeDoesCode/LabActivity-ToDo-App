function Footer({ tasks }) {
  let taskCount = tasks.length;
  let taskCompletedCount = tasks.filter((task) => task.completion).length;

  return (
    <div>
      You current have {taskCount} on the list. You have completed{" "}
      {taskCompletedCount} out of {taskCount} tasks (
      {taskCount === 0 ? 0 : Math.round((100 * taskCompletedCount) / taskCount)}
      %)
    </div>
  );
}

export default Footer;
