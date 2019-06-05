import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, Jumbotron, Navbar, Nav } from 'react-bootstrap'
import './App.css'

function Index() {
  return (
    <Jumbotron>
      <h1>NEWER, BETTER, HOTTER "Home"</h1>
      <p>Hello</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

function About() {
  return (
    <Jumbotron>
      <h1>NEWER, BETTER, HOTTER "About"</h1>
      <p>Very informative about text.</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

function Users() {
  return (
    <Jumbotron>
      <h1>NOW INTRODUCING USERS!</h1>
      <p>You heard right! Users, who are they?</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto">
              <Button variant="dark">
                <Link to="/new">New home</Link>
              </Button>
              <Button variant="dark">
                <Link to="/new/about/">New about</Link>
              </Button>
              <Button variant="dark">
                <Link to="/users">Users</Link>
              </Button>

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
            </Nav>
          </Navbar>

          <Route path="/new" exact component={Index} />
          <Route path="/users" component={Users} />
          <Route path="/new/about" component={About} />
        </div>
      </Router>
    </div>
  )
}

export default App
