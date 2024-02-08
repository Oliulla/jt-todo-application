import { Col, Row } from "react-bootstrap";
import TaskCard from "@/components/__shared_many_times/__ui/TaskCard";

const Tasks = ({ tasks, isLoading }) => {
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

  return (
    <div>
      <Row>
        <Col>
          <div>
            <h5 className="d-inline pb-1 border-bottom border-primary">Todo</h5>
            {tasks.length > 0 &&
              todoTasks?.map((task, idx) => (
                <div key={task.id}>
                  <TaskCard task={task} />
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
                  <TaskCard task={task} />
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
                  <TaskCard task={task} />
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tasks;
