import React from "react";
import { Button } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

const TaskForm = ({ onSubmit, newTaskAddButtonHandler }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    onSubmit(formDataObject);
  };

  return (
    <div className="border rounded w-25 p-2 fs-6 prevent-select">
      <div className="text-end">
        <button
          onClick={() => newTaskAddButtonHandler(false)}
          className="bg-transparent border-none"
        >
          <RxCross2 className="cursor-pointer text-secondary" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          autoComplete="off"
          required
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          autoComplete="off"
          required
        />
        <div className="mt-2">
          <select className={`bg-dark text-light`} name="priority" required>
            <option className="disabled text-white" value="">
              Set Priority
            </option>
            <option value="High" className="text-danger">
              High
            </option>
            <option value="Medium" className="text-warning">
              Medium
            </option>
            <option value="Low" className="text-info">
              Low
            </option>
          </select>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <Button type="submit" variant="success">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
