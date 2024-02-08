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
            <h4 className="d-inline pb-1 border-bottom border-primary">Todo</h4>
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
            <h4 className="d-inline pb-1 border-bottom border-primary">
              Progressing
            </h4>
          </div>
        </Col>
        <Col>
          <div>
            <h4 className="d-inline pb-1 border-bottom border-primary">
              Complete
            </h4>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tasks;
