import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar className="bg-dark text-light shadow-lg">
      <Container>
        <Navbar.Brand as={Link} href="/" className="text-light">
          Done IT?
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-light">
            Signed in as:{" "}
            <Link href="/" className="text-light">
              Mark Otto
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
