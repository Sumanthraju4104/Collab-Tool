import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Dashboardheader from './Dashboardheader';
function Dashboard() {
    const navigate=useNavigate();
    const documents = [
        { name: 'Document 1', date: '2024-12-10', id: 1 },
        { name: 'Document 2', date: '2024-12-11', id: 2 },
        { name: 'Document 3', date: '2024-12-12', id: 3 },
        { name: 'Document 4', date: '2024-12-13', id: 1 },
        { name: 'Document 5', date: '2024-12-14', id: 2 },
        { name: 'Document 6', date: '2024-12-15', id: 3 },
      ];
  return (
    <>
        <Dashboardheader/>
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
          }}>
        <Container >
        <Row>
        {documents.map((doc) => (
        <Col xs={12} sm={6} md={4} lg={3} key={doc.id} className="mb-4">
        <Card style={{
            width: '200px',
            height: '200px', 
            margin:'10px',
            
          }}>
        <Card.Header>{doc.name}</Card.Header>
        <Card.Body>
            <Card.Text>
                created on {doc.date}
            </Card.Text>
        <Button variant="primary" onClick={() => {
                  console.log(`Opening document: ${doc.name}`);
                  navigate(`/document`, { state: doc });
                }}>open document</Button>
        </Card.Body>
        </Card>
        </Col>
        ))};
         </Row>
        </Container>
        <Button variant="primary" style={{width:"150px"}} onClick={()=>{
            navigate('/createdocument')
        }}>Create Document</Button>
        </div>
    </>
  )
}

export default Dashboard