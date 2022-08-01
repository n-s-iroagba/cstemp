
import Footer from './components/footer';
import './App.css';
import logo from "./logo.png"
import Msg from './components/msgblock';
import Blog from './components/blog';
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import {Switch, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar className="nav"bg="dark" variant="dark" sticky="" >
          <Navbar.Brand>
            <div className='logo'>
          <img src= {logo}/>
          </div>
         </Navbar.Brand>
         <Nav>
          <Nav.Link href = 'home'>HOME</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href = 'home'>ABOUT US</Nav.Link>
        </Nav>
         
        <Nav><NavDropdown title= 'SERVICES'>
          <NavDropdown.Item href= 'services/webdevelopment'>
            WEB DEVELOPMENT
          </NavDropdown.Item>
          <NavDropdown.Item href= 'services/uiux'>
            UI/UX
          </NavDropdown.Item>
          <NavDropdown.Item href= 'services/dataanalytics'>
            DATA ANALYTICS
          </NavDropdown.Item>
          <NavDropdown.Item href= 'services/techconsulation'>
            TECH CONSULATION
          </NavDropdown.Item>
        </NavDropdown>
        </Nav>
        
        <Nav>
          <Nav.Link href = 'home'>CONTACT</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href = 'blog'>BLOG</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href = 'home'>SIGN UP/SIGN IN</Nav.Link>
        </Nav>
       </Navbar>
       <Switch>
          <Route path="/home">
            <App />
          </Route>
          <Route path="blog">
            <Blog />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
       
      
      
        <div className="image"><div>
          <Msg/>
        </div>
        </div>
    
      < Footer/>
    </div>
  );
}

export default App;
