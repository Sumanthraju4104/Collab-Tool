import React from 'react'
import Form from 'react-bootstrap/Form';
import Dashboardheader from './Dashboardheader';
function Creatdocument() {
  return (
    <>
    <Dashboardheader/>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Title of Document</Form.Label>
      <Form.Control type="text" placeholder="Enter Title" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Content of document</Form.Label>
      <Form.Control as="textarea" placeholder="Enter Content" rows={3} />
    </Form.Group>
  </Form>
  </>
  )
}

export default Creatdocument