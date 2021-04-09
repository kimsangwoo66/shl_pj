import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Row, Col, FormText } from "react-bootstrap";
//import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import title1 from "../../imagess/title1.png";

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
    <div className="container">
      <Card style={{ width: "80%" }}>
        <img
          src={title1}
          alt=""
          class="img-responsive center-block"
          height="150px"
        ></img>
        <Card.Body>
          <h2 className="text-center mb-4">회원가입</h2>

          {error && <Alert varient="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} id="email">
              <Form.Label column sm={2}>
                아이디
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="email"
                  placeholder="6~15자리의 영문 및 숫자 입력"
                  ref={emailRef}
                  required
                />
              </Col>
              <Button sm={4} variant="secondary">
                중복확인
              </Button>
            </Form.Group>
            <Form.Group as={Row} id="email">
              <Form.Label column sm={2}>
                비밀번호
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="email"
                  placeholder="영어,숫자,특수문자 중 2개 이상 8~16자리 입력"
                  ref={emailRef}
                  required
                />
              </Col>
              <FormText>사용 불가</FormText>
            </Form.Group>

            <Form.Group as={Row} id="email">
              <Form.Label column sm={2}>
                이름
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="email"
                  placeholder="이름 입력"
                  ref={emailRef}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} id="email">
              <Form.Label column sm={2}>
                전화번호
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="email"
                  placeholder="전화번호 입력(-제외)"
                  ref={emailRef}
                  required
                />
              </Col>
              <Button sm={4} variant="secondary">
                본인인증
              </Button>
            </Form.Group>

            <Form.Group as={Row} id="email">
              <Form.Label column sm={2}>
                학교
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="email"
                  placeholder="학교 선택"
                  ref={emailRef}
                  required
                />
              </Col>
              <Button sm={4} variant="secondary">
                학교검색
              </Button>
            </Form.Group>

            <Form.Group as={Row} id="email">
              <Form.Label column sm={2}>
                담당
              </Form.Label>
              <Col sm={7}>
                <Form.Control placeholder="담당 선택" ref={emailRef} required />
              </Col>
              <Button sm={4} variant="secondary">
                담당선택
              </Button>
            </Form.Group>

            <Form.Group as={Row} id="email">
              <Form.Label column sm={2}>
                재직증명서
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="email"
                  placeholder="파일 첨부(형식: PDF,한글)"
                  ref={emailRef}
                  required
                />
              </Col>
              <Button sm={4} variant="secondary">
                첨부하기
              </Button>
            </Form.Group>
            <br />
            <div class="row">
              <div className="col-5"></div>
              <div className="col-6">
                <Button
                  disabled={loading}
                  className="w-40 "
                  type="submit"
                  variant="secondary"
                >
                  회원가입 신청
                </Button>
              </div>
            </div>
          </Form>
          <hr />
          <div className="w-100 text-center m2">
            이미 아이디가 있습니까?
            <Link to="/">로그인 화면이동</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
