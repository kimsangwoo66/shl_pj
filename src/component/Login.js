import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
//import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import title1 from "../imagess/title1.png";
import "../App.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      //await login(emailRef.current.value, passwordRef.current.value);
      history.push("/Dashboard");
    } catch {
      setError("로그인에 실패하셨습니다.");
    }
    setLoading(false);
  }

  return (
    <div className="login_center">
      <Card style={{ width: "80%" }}>
        <img src={title1} alt="" class="img-responsive center-block"></img>
        <Card.Body>
          {error && <Alert varient="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>아이디</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Link to="/MainStack">
              <Button
                variant="secondary"
                disabled={loading}
                className="w-100"
                type="submit"
              >
                로그인
              </Button>{" "}
            </Link>
          </Form>

          <Link to="/signup">아이디/비밀번호찾기</Link>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <Link to="/signup">회원가입</Link>
        </Card.Body>
      </Card>
    </div>
  );
}
