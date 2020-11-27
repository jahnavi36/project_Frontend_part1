import React, { Component } from 'react';
import {Nav,NavItem,NavLin,Card,Col}from 'react-bootstrap';

class StudentProfile extends Component {
    render() {
        return (
            <div className="navbar">
                <p className="text-center mt-4 mb-4">Or right-aligned</p>
  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="#">Search Tutor</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#">settings</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="#">Help</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="#">Logout</Nav.Link>
    </Nav.Item>
    
  </Nav>
  
    <Section id="details" className="details">
               
  <Row> 
   <Col xs={6} md={4}>
       <Image src="holder.js/171x180" thumbnail />
   </Col>
   <Col>
    <Card style={{ width: '18rem' }}> 
        <Card.Body>
          <Card.Title>Jocelyne Mak..</Card.Title>
        <Card.Text>
         Toronto,Ontario,
         May20,1990
         joc.mac@gmail.com
        </Card.Text>
        </Card.Body>
    </Card>
  </Col>
  </Row>
   </Section>

 <div className="sessionrequesttable">
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
           <Accordion.Toggle as={Button} variant="link" eventKey="0">
             SessionRequest
           </Accordion.Toggle>
        </Card.Header>
           <Accordion.Collapse eventKey="0">
             
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
      <th>Tutor Assigned</th>
      <th>Student Rating</th>
      <th>Tutor Rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>11/26</td>
      <td>ReactJs</td>
      <td>Swetha</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>10/22</td>
      <td>HTML</td>
      <td>Tena</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>11/18</td>
      <td>HTML</td>
      <td>Mike</td>
      <td>2</td>
      <td>2</td>
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
             PaymentHistory
           </Accordion.Toggle>
        </Card.Header>
           <Accordion.Collapse eventKey="0">
             
           </Accordion.Collapse>
     </Card>
    </Accordion>

    </div>
   </div>

        );
    }
}
export default StudentProfile;