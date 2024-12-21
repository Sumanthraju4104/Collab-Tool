import React from 'react'
import Card from 'react-bootstrap/Card';
import Dashboardheader from './Dashboardheader';
function Opendocument() {

  return (
    <>
    <Dashboardheader/>
    <Card style={{ width: 'auto' , height:'auto'}}>
      <Card.Body>
        <Card.Title> Title of the document</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">subtitle of the document</Card.Subtitle>
        <Card.Text>
          content of the document can be printed here
        </Card.Text>
        <Card.Link to="/register" className="btn btn-primary btn-lg me-3">Update</Card.Link>
        <Card.Link to="/login" className="btn btn-danger btn-lg">Delete</Card.Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default Opendocument