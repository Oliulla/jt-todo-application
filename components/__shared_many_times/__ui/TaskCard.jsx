import React from "react";
import { Card } from "react-bootstrap";
import { CiEdit, CiFlag1 } from "react-icons/ci";

const TaskCard = ({ task }) => {
  return (
    <>
      <ul className="list-unstyled mt-4">
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
                      task?.priority === "High" ? "text-danger" : ""
                    }`}
                  />
                </span>
                <span>
                  <CiEdit />
                </span>
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
