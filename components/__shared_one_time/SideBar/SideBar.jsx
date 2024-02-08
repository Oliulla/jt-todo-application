import Link from "next/link";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="transparent" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="bg-dark text-light"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>John Doe</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <ul className="d-grid gap-2 list-unstyled no-underline">
              <li>
                <Link href="/" className="d-block">All Tasks</Link>
              </li>
              <li>
                <Link href="/" className="d-block">Today</Link>
              </li>
              <li>
                <Link href="/" className="d-block">Upcoming</Link>
              </li>
              <li>
                <Link href="/" className="d-block">Filter</Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
