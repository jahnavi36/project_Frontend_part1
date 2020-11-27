import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Card, Col, Row }from 'react-bootstrap';

class TutorProfile extends Component {
    render() {
        return (

            <div className="Tutornavbar">
                <p className="text-center mt-4 mb-4">Or right-aligned</p>
  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Settings</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="settings">Help</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Logout</Nav.Link>
    </Nav.Item>
    
  </Nav>
  
    <div className="details">
               
  <Row> 
   <Col xs={6} md={4}>
       <Image src="holder.js/171x180" thumbnail />
   </Col>
   <Col>
    <Card style={{ width: '18rem' }}> 
        <Card.Body>
          <Card.Title>John Smith</Card.Title>
          <Row>
        <Card.Text>
         Toronto,Ontario,
         May20,1990
         joh.smith@gmail.com
        </Card.Text>
        </Row>
        <Row>
           <Card.Text>
              Criminal Record:Document
              Tutor Status:Ative
           </Card.Text> 
        </Row>
        </Card.Body>
    </Card>
  </Col>
  </Row>
   </div>

 <div className="Specialitytable">
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
           <Accordion.Toggle as={Button} variant="link" eventKey="0">
             Speciality
           </Accordion.Toggle>
        </Card.Header>
           <Accordion.Collapse eventKey="0">
             Data
           </Accordion.Collapse>
     </Card>
    </Accordion>
   </div>

<div className="sessionRequesttable">
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
        
       <Accordion.Toggle as={Button} variant="link" eventKey="0">
         SessionRequest
       </Accordion.Toggle>
       
    </Card.Header>
       <Accordion.Collapse eventKey="0">
       <Table striped bordered hover>
  <thead>
    <tr>
      <th>Date</th>
      <th>Subject</th>
      <th>Context</th>
      <th>Task Completed</th>
      <th>Duration</th>
      <th>Language</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>11/26</td>
      <td>ReactJs</td>
      <td>S</td>
      <td>2</td>
      <td>1 hour</td>
      <td></td>
    </tr>
    <tr>
      <td>10/22</td>
      <td>HTML</td>
      <td>T</td>
      <td>1</td>
      <td>30 min</td>
      <td></td>
    </tr>
    <tr>
      <td>11/18</td>
      <td>Java</td>
      <td>M</td>
      <td>2</td>
      <td>20 min</td>
      <td></td>
    </tr>
  </tbody>
</Table>
       </Accordion.Collapse>
 </Card>
</Accordion>
</div>

<div className="sessionhistorytable">
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
           <Accordion.Toggle as={Button} variant="link" eventKey="0">
             SessionHistory
           </Accordion.Toggle>
        </Card.Header>
           <Accordion.Collapse eventKey="0">
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>Date</th>
      <th>Subject</th>
      <th>Answers Provided</th>
      <th>Tutor Assigned</th>
      <th>Student Rating</th>
      <th>Tutor Rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>11/26</td>
      <td>ReactJs</td>
      <td>S</td>
      <td>Smith</td>
      <td>1 </td>
      <td>2</td>
    </tr>
    <tr>
      <td>10/22</td>
      <td>HTML</td>
      <td>T</td>
      <td>Neha</td>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <td>11/18</td>
      <td>Java</td>
      <td>M</td>
      <td>Madhu</td>
      <td>2</td>
      <td>4</td>
    </tr>
  </tbody>
</Table>
           </Accordion.Collapse>
     </Card>
    </Accordion>

    </div> 
   </div>

        );
    }
}
export default StudentProfile;