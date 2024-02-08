import { CiCirclePlus } from "react-icons/ci";
import Tasks from "./Tasks";
import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";

// Months array
const monthArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const HomeMainComponent = () => {
  const [taskAdding, setTaskAdding] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setIsLoading(false);
  }, []);

  const handleFormSubmit = (formData) => {
    const updatedTasks = [...tasks, formData];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  // Date constructor
  const date = new Date();
  const today = date.getDate();
  const month = date.getMonth();

  // New Task Add button handler
  const newTaskAddButtonHandler = (canCelState) => {
    setTaskAdding(canCelState);
  };

  return (
    <div className="mt-3">
      <h1>All Tasks</h1>
      <div className="my-3">
        <span>All Tasks</span> ‧ <span>0</span>
      </div>
      <div className="my-3">
        <span>
          {today} {monthArr[month]}{" "}
        </span>{" "}
        ‧ <span>Today</span> <span>0</span>
      </div>
      <div className="mt-3 mb-2">
        <Tasks tasks={tasks} isLoading={isLoading} />
      </div>
      <>
        {taskAdding ? (
          <TaskForm
            onSubmit={handleFormSubmit}
            newTaskAddButtonHandler={newTaskAddButtonHandler}
          />
        ) : (
          <div className="">
            <button
              onClick={() => newTaskAddButtonHandler(true)}
              className="bg-transparent btn-custom d-flex justify-items-center gap-3 py-2 px-3"
            >
              <CiCirclePlus className="plus-icon" />
              <span>Add New Task</span>
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default HomeMainComponent;
