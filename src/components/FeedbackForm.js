import React from 'react';
import { Form, Button } from 'react-bootstrap';

function FeedbackForm() {
  return (
    <div className="container mt-5">
      <h2>Feedback Form</h2>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Feedback</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FeedbackForm;
