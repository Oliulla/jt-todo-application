import React, { useState } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CiEdit, CiFlag1 } from "react-icons/ci";
import DeleteModal from "./DeleteModal";
import TaskForm from "@/components/__shared_one_time/Home/TaskForm";

const TaskCard = ({
  task,
  onDelete,
  onStatusChange,
  onUpdate,
  handleEditClick,
  isEditing,
  setIsEditing,
  targetEditId,
}) => {
  const { id, title, description, priority, status } = task ?? {};
  let cardBg = "dark";

  if (priority === "High") {
    cardBg = "danger";
  } else if (priority === "Medium") {
    cardBg = "warning";
  } else {
    cardBg = "info";
  }

  return (
    <>
      {isEditing && targetEditId === id ? (
        <TaskForm
          task={task}
          onSubmit={onUpdate}
          newTaskAddButtonHandler={setIsEditing}
          isEditing={isEditing}
          onUpdate={onUpdate}
        />
      ) : (
        <ul className="list-unstyled mt-4 prevent-select">
          <Card
            bg={cardBg}
            text="dark"
            style={{ width: "20rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>
                {title}
              </Card.Title>
              <Card.Text>{description}</Card.Text>
              <div className="d-flex justify-content-between align-items-center gap-3">
                <span className="text-sm me-1">
                  <CiFlag1 className={`text-dark`} /> {priority}
                </span>
                <div className="d-flex gap-3">
                  <div>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>
                          <strong>Change Status</strong>.
                        </Tooltip>
                      }
                    >
                      <select
                        className="select"
                        onChange={(event) => onStatusChange(id, event)}
                        value={status}
                      >
                        <option className="disabled">{status}</option>
                        <option>Progressing</option>
                        <option>Completed</option>
                      </select>
                    </OverlayTrigger>
                  </div>
                  <div>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>
                          <strong>Edit task</strong>.
                        </Tooltip>
                      }
                    >
                      <div
                        className="cursor-pointer"
                        onClick={() => handleEditClick(id)}
                      >
                        <CiEdit className="text-black" />
                      </div>
                    </OverlayTrigger>
                  </div>
                  <div>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>
                          <strong>Delete task</strong>.
                        </Tooltip>
                      }
                    >
                      <div className="cursor-pointer">
                        <DeleteModal
                          taskId={id}
                          taskTitle={title}
                          onDelete={onDelete}
                        />
                      </div>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </ul>
      )}
    </>
  );
};

export default TaskCard;
