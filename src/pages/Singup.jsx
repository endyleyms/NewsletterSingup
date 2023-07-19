import { ReactComponent as MySvg } from "../assets/images/illustration-sign-up-desktop.svg";
import { useNavigate } from 'react-router-dom';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

function SingUp() {
  const navigation = useNavigate();

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setError("Valid email required!");
    }else{
      navigation('/sucess')
    }
    // regex to identify if the input has an email as text value
  };

  return (
    <div className="App">
      <div className="Container1">
        <div className="containerInfo">
          <h1 className="title">Stay updated!</h1>
          <div>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul style={{ listStyleType: "none", paddingLeft: "0rem" }}>
              <li className="liclass">
                <FaCheckCircle color="hsl(4, 100%, 67%)" size={20} />
                <p style={{ paddingLeft: "10px" }}>
                  Product discovery and building what matters
                </p>
              </li>
              <li className="liclass">
                <FaCheckCircle color="hsl(4, 100%, 67%)" size={20} />
                <p style={{ paddingLeft: "10px" }}>
                  Measuring toensure updates are a success
                </p>
              </li>
              <li className="liclass">
                <FaCheckCircle color="hsl(4, 100%, 67%)" size={20} />
                <p style={{ paddingInlineStart: "10px" }}>And much more!</p>
              </li>
            </ul>
            <Form className="Form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="form-control"
                  placeholder="email@company.com"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  isInvalid={!!error}
                />
                <Form.Control.Feedback type="invalid">
                  {error}
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button className="btn btn-outline-primary btn-lg" onClick={handleSubmit}>
              Subscribe to monthly newsletter
            </Button>
          </div>
        </div>
        <div className="imgcontainer">
          <MySvg className="imgsvg" />
        </div>
      </div>
    </div>
  );
}

export default SingUp;
