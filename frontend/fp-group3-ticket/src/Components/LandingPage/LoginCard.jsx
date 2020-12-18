import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const LoginCard = () => {
  return (
    <Card className="loginCard">
      <Card.Body>
        <Card.Title className="text-center">
          <h3>Log in</h3>
        </Card.Title>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <Link to="/tickets">
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default LoginCard;
