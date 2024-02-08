// import useFetchData from "@/hooks/useFetchData";

const Tasks = ({ tasks, isLoading }) => {
  //   const { data, loading, error } = useFetchData('/temptask.json');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {tasks.length > 0 && (
        <ul className="list-unstyled d-flex gap-5 flex-wrap">
          {tasks.map((task, idx) => (
            <li
              key={idx}
              className="bg-secondary shadow-lg rounded px-4 py-2"
            >
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
