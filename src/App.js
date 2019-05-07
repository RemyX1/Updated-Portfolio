import React from 'react';
import './App.css';

import { Row, Col } from "reactstrap";

import Navbar from "./components/navbar"
import Pic from "./components/picture"
import Sidebar from "./components/sidebar"
import Footer from "./components/footer"


function App() {
  return (
    <div>
   <Navbar />
  
  

<Row>

  <Col sm="5 offset-sm-1">
    <Pic />
  </Col>

  <Col sm="6 ">
    <Sidebar />
  </Col>

</Row> 

<br></br>

<Row>
  <Col><Footer /></Col>

  </Row>
</div>
   
  );
}

export default App;
