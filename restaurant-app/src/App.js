import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./Components/Home"
import {Navbar, Nav, Container} from 'react-bootstrap'
import RestaurantCreate from "./Components/RestaurantCreate"
import RestaurantDetail from "./Components/RestaurantDetail"
import RestaurantList from "./Components/RestaurantList"
import RestaurantSearch from "./Components/RestaurantSearch"
import RestaurantUpdate from "./Components/RestaurantUpdate"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        Resto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<RestaurantList />} />
          <Route path="/create" element={<RestaurantCreate />} />
          <Route path="/search" element={<RestaurantSearch />} />
          <Route path="/detail" element={<RestaurantDetail />} />
          <Route path="/update" element={<RestaurantUpdate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
