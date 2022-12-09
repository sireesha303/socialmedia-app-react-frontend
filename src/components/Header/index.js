import './index.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Header = () =>{
  const mystyle = {
    color: "white",
    fontWeight:"bold"

  }

  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <Navbar bg="dark" expand="lg" style={{position:"fixed", width:"100%", padding:"15px"}}>
      <Container fluid>
        <Navbar.Brand href="#" style={mystyle}>Tweet Post</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={mystyle} href="#action1" >Home</Nav.Link>
            <Nav.Link style={mystyle} href="#action2">My Posts</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
          <button onClick={openModal}>Add Post</button>
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                  
                  <div className="content">
                    <div className='close-btn'>
                      <button className="close" onClick={closeModal}>
                        &times;
                      </button>
                    </div>
                    <div className='inputs-container'>
                      <label htmlFor='title'>Add Post Title</label>
                      <input type="text" id='title'/>
                      <label htmlFor='content'>Add Post content</label>
                      <textarea rows = "5" cols = "60" name = "description" id='content' placeholder='Enter Post details here...'>
                        
                    </textarea>
                      
                    </div>
                    <div className='close-create-btns-container'>
                      <button className="close" onClick={closeModal}>
                        Close
                      </button>
                      <button className="close" onClick={closeModal}>
                        create
                      </button>
                    </div>
                  </div>
              
          </Popup>
          {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
            <h2 style={mystyle}>Joshith</h2>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;