import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";

import { useState } from "react";

// the state will be set

// the state will check if the user included an @ for the email

export const ContactMe = () => {
  // this state input
  const [emailInput, setEmailInput] = useState("");
  // this state error message
  const [emailMessage, setEmailMessage] = useState("");

  const formValidation = () => {
    console.log("hello contact");

    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailInput.match(regEx)) {
      console.log("email");
      setEmailMessage("email is not valid");
    }
  };

  const handleOnChange = (e) => {
    console.log("handleChange");
    setEmailInput(e.target.value);
  };

  return (
    <Form onSubmit={formValidation}>
      <h1 className="form-header">Fill Out This Form:</h1>
      <Form.Group
        // className="mb-3"
        controlId="formBasicEmail"
        className="input-fields"
        width="2rem"
      >
        <Form.Label className="input-fields">Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="input-fields" controlId="formBasicPassword">
        <Form.Label className="input-fields">Email address</Form.Label>
        <Form.Control
          // type="email"
          placeholder="Enter Email"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="input-fields" controlId="formBasicCheckbox">
        <Form.Group
          // className="mb-3"
          controlId="formBasicEmail"
          className="input-fields"
          width="2rem"
        >
          <Form.Label className="input-fields">Message</Form.Label>
          <Form.Control
            type="message"
            placeholder="Enter A Messgae"
            className="message"
          />
          <div className="submit-btn">
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
            <div className="email-message">{emailMessage}</div>
          </div>
        </Form.Group>
      </Form.Group>
    </Form>
  );
};
