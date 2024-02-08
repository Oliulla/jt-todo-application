import { CiCirclePlus } from "react-icons/ci";

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
  const date = new Date();
  const today = date.getDate();
  const month = date.getMonth();

  return (
    <div className="mt-3">
      <h1>Today</h1>
      <div className="my-3">
        <span>
          {today} {monthArr[month]}{" "}
        </span>{" "}
        ‧ <span>Today</span> <span>0</span>
      </div>
      <div className="my-4">
        <button className="bg-transparent btn-custom d-flex justify-items-center gap-3 py-2 px-3">
          <CiCirclePlus className="plus-icon" />
          <span>Add New Task</span>
        </button>
      </div>
    </div>
  );
};

export default HomeMainComponent;
