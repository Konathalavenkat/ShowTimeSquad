import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
function OffcanvasExample() {
  const handlelogout = () => {
    localStorage.setItem('islogged', false);
    window.location.reload()
  }
  const getcolor=()=>{
    if(localStorage.getItem("darkmode")==="yes"){
      return "text-light"
    }
    return "text-dark"
  }
  const geticon=()=>{
    if(localStorage.getItem("darkmode")==="yes"){
      return "bg-light text-dark"
    }
    return "bg-dark text-light"
  }
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} variant='tabs' className="">
          <Container fluid>
            <Navbar.Brand href="#" className={`${getcolor()}`}>ShowTimeSquad</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ShowTimeSquad
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                  <Nav.Link onClick={()=>{if(localStorage.getItem("darkmode")==='yes') {localStorage.setItem("darkmode","no");window.location.reload()} else {localStorage.setItem("darkmode","yes");window.location.reload()}}}>
                      <FontAwesomeIcon icon={faCircleHalfStroke} className={`${geticon()}`} style={{height: "20px",borderRadius: "10px"}} />
                  </Nav.Link>
                  <Nav.Link href="#action2" className={`${getcolor()}`}>Link</Nav.Link>
                  {localStorage.getItem('islogged')!=='true' ? <Link to="/auth"><button className="btn btn-primary">SignIn/Register</button></Link> : <NavDropdown drop="down" flip id="user" title={localStorage.getItem("username")}>
                        <NavDropdown.Item><Nav.Link className={`btn btn-outline-warning ${getcolor()}`} onClick={handlelogout}>Logout</Nav.Link></NavDropdown.Item>
                  </NavDropdown>}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;