import TaskForm from "@/components/__shared_one_time/Home/TaskForm";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";

const UpdateTaskModal = ({ task, onUpdate }) => {
  const [show, setShow] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeRequest = () => {
    onUpdate(updatedTask); 
    handleClose(); 
  };

  const handleFormSubmit = (formData) => {
    const updatedFormData = { ...updatedTask, ...formData };
    setUpdatedTask(updatedFormData);
  };

  return (
    <div>
      <span onClick={handleShow}>
        <CiEdit className="text-black" />
      </span>
      <Modal show={show} onHide={handleClose} className="text-dark">
        <Modal.Header closeButton>
          <Modal.Title>{task?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm
            task={updatedTask} // Pass updatedTask to TaskForm
            onSubmit={handleFormSubmit} // Handle form submission
            onUpdate={onUpdate} // Pass onUpdate function to TaskForm
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleChangeRequest} variant="info">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateTaskModal;
