import React, { useState } from "react";
import { Button, Card, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CiEdit, CiFlag1 } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import DeleteModal from "./DeleteModal";

const TaskCard = ({ task }) => {
  return (
    <>
      <ul className="list-unstyled mt-4 prevent-select">
        <Card
          bg="dark"
          text="white"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>
              <div className="d-flex justify-content-between">
                <span className="fs-5">{task?.title}</span>
                <span>
                  <CiFlag1
                    className={`${
                      task?.priority === "High"
                        ? "text-danger"
                        : task?.priority === "Medium"
                        ? "text-warning"
                        : "text-info"
                    }`}
                  />
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
                      <select className="select">
                        <option className="disabled">{task.status}</option>
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
                          <strong>Update task</strong>.
                        </Tooltip>
                      }
                    >
                      <div className="cursor-pointer">
                        <span>
                          <CiEdit className="text-info" />
                        </span>
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
                        <DeleteModal taskTitle={task?.title} />
                      </div>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Card.Title>
            <Card.Text>{task?.description}</Card.Text>
          </Card.Body>
        </Card>
      </ul>
    </>
  );
};

export default TaskCard;
