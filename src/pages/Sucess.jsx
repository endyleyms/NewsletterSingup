import React from 'react'
import "../App.css";
import { FaCheckCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";

export const Sucess = () => {
  return (
    <div className='App'>
      <div className='Container1Success'>
      <div className="containerInfo">
        <FaCheckCircle color="hsl(4, 100%, 67%)" size={80} />
        <h1 className="titleSuccess">Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <strong>ash@loremcompany.com</strong>  Please opne it and click the button inside to confirm your subscription.</p>
        <Button className="btn btn-outline-primary btn-lg">
          Dismiss message
        </Button>
      </div>
      </div>
    </div>
  )
}
