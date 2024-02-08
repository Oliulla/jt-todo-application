import React, { useState } from "react";
import { Button, Card, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CiEdit, CiFlag1 } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import DeleteModal from "./DeleteModal";

const TaskCard = ({ task }) => {
  // const [cardBg, setCardBg] = useState("dark");
  const { title, description, priority, status } = task ?? {};
  console.log(priority);
  let cardBg = "dark";

  if (priority === "High") {
    cardBg = "danger";
  } else if (priority === "Medium") {
    cardBg = "warning";
  } else {
    cardBg = "info";
  }
  console.log(cardBg);
  return (
    <>
      <ul className="list-unstyled mt-4 prevent-select">
        <Card
          bg={cardBg}
          text="dark"
          key={cardBg}
          style={{ width: "20rem" }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fs-5">{title}</span>
                <span className="text-sm">
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
                      <select className="select">
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
                          <strong>Update task</strong>.
                        </Tooltip>
                      }
                    >
                      <div className="cursor-pointer">
                        <span>
                          <CiEdit className="text-black" />
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
                        <DeleteModal taskTitle={title} />
                      </div>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </ul>
    </>
  );
};

export default TaskCard;
