import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
//import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("비밀번호가 맞지 않습니다.");
    }
    try {
      setError("");
      setLoading(true);
      //await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("계정 생성 실패");
    }
    setLoading(false);
  }

  return (
    <div className="login_center">
      <Card style={{ width: "100rem" }}>
        <Card.Body>
          <h2 className="text-center mb-4">회원가입</h2>

          {error && <Alert varient="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>전화번호</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              회원가입 인증
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center m2">
          이미 아이디가 있습니까?
          <Link to="/">로그인 화면이동</Link>
        </div>
      </Card>
    </div>
  );
}
