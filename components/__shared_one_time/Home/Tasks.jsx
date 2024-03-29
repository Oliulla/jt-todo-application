import { Col, Row } from "react-bootstrap";
import TaskCard from "@/components/__shared_many_times/__ui/TaskCard";
import { useState } from "react";

const Tasks = ({
  tasks,
  isLoading,
  onDelete,
  onStatusChange,
  onUpdate,
  handleEditClick,
  isEditing,
  setIsEditing,
  targetEditId,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const todoTasks = tasks?.filter((task) => task.status === "Todo");
  // console.log(todoTasks);

  const progressingTasks = tasks?.filter(
    (task) => task?.status === "Progressing"
  );
  // console.log(progressingTasks, "progressing");

  const completedTasks = tasks?.filter((task) => task?.status === "Completed");
  // console.log(completedTasks, "completed");

  // Handle task delete
  const handleTaskClickForDelete = (taskId) => {
    onDelete(taskId);
  };

  // status change handler
  const handleStatusChange = (taskId, event) => {
    const newStatus = event.target.value;
    onStatusChange(taskId, newStatus);
  };

  // Update task constructor
  const updateTaskHandler = (updatedTask) => {
    onUpdate(updatedTask);
  };

  return (
    <div className="mt-3">
      <div className="d-flex gap-5 mb-3">
        <div>
          <h5>All Tasks</h5>
          <div className="my-3">
            <span>All Tasks</span> ‧ <span>{tasks?.length}</span>
          </div>
        </div>
        <div>
          <h5>Progressing Tasks</h5>
          <div className="my-3">
            <span>Progressing</span> ‧ <span>{progressingTasks?.length}</span>
          </div>
        </div>
        <div>
          <h5>Completed Tasks</h5>
          <div className="my-3">
            <span>Completed Tasks</span> ‧ <span>{completedTasks?.length}</span>
          </div>
        </div>
      </div>
      <Row className="gap-5">
        <Col>
          <div>
            <h5 className="d-inline pb-1 border-bottom border-primary">Todo</h5>
            {tasks.length > 0 &&
              todoTasks?.map((task, idx) => (
                <div key={task.id}>
                  <TaskCard
                    task={task}
                    onDelete={handleTaskClickForDelete}
                    onStatusChange={handleStatusChange}
                    onUpdate={updateTaskHandler}
                    handleEditClick={handleEditClick}
                    setIsEditing={setIsEditing}
                    isEditing={isEditing}
                    targetEditId={targetEditId}
                  />
                </div>
              ))}
          </div>
        </Col>
        <Col>
          <div>
            <h5 className="d-inline pb-1 border-bottom border-primary">
              Progressing
            </h5>
            {tasks.length > 0 &&
              progressingTasks?.map((task, idx) => (
                <div key={task.id}>
                  <TaskCard
                    task={task}
                    onDelete={handleTaskClickForDelete}
                    onStatusChange={handleStatusChange}
                    onUpdate={updateTaskHandler}
                    handleEditClick={handleEditClick}
                    setIsEditing={setIsEditing}
                    isEditing={isEditing}
                    targetEditId={targetEditId}
                  />
                </div>
              ))}
          </div>
        </Col>
        <Col>
          <div>
            <h5 className="d-inline pb-1 border-bottom border-primary">
              Completed
            </h5>
            {tasks.length > 0 &&
              completedTasks?.map((task, idx) => (
                <div key={task.id}>
                  <TaskCard
                    task={task}
                    onDelete={handleTaskClickForDelete}
                    onStatusChange={handleStatusChange}
                    onUpdate={updateTaskHandler}
                    handleEditClick={handleEditClick}
                    setIsEditing={setIsEditing}
                    isEditing={isEditing}
                    targetEditId={targetEditId}
                  />
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tasks;
