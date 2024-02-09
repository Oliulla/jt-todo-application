import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

const TaskForm = ({ onSubmit, newTaskAddButtonHandler, task, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: task?.title || "",
    description: task?.description || "",
    priority: task?.priority || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task) {
      onUpdate({
        id: task?.id,
        status: task?.status,
        ...formData,
      });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <div
      className={`border rounded p-2 fs-6 prevent-select ${
        task ? "w-100 mt-4" : "w-25"
      }`}
    >
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
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          autoComplete="off"
          required
          value={formData.description}
          onChange={handleChange}
        />
        <div className="mt-2">
          <select
            className={`bg-dark text-light`}
            name="priority"
            required
            value={formData.priority}
            onChange={handleChange}
          >
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
            {task ? "Update" : "Add"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
