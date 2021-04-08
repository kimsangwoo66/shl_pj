import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Col, Row } from "react-bootstrap";
//import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import title1 from "../../imagess/title1.png";
import "../../App.css";

export default function FindPw() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //const { login } = useAuth();
  //const [error, setError] = useState("");
  //const [loading, setLoading] = useState(false);
  //const history = useHistory();

  /*async function handleSubmit(e) {
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
  }*/

  return (
    <div className="container-expand-inverse">
      <div>
        <Link to="/">
          {" "}
          {/*타이틀 이미지를 눌렀을때 홈화면으로 이동*/}
          <img
            width="100%"
            src={title1}
            alt=""
            class="img-responsive center-block"
            height="300px" /*300px 정도가 딱 절반 정도 */
          ></img>
        </Link>
      </div>

      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <h4>아이디 찾기</h4>
              <hr />
              <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    이름
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="email" placeholder="이름" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPhone">
                  <Form.Label column sm={3}>
                    전화번호
                  </Form.Label>
                  <Col sm={6}>
                    <Form.Control placeholder="전화번호 11자리 입력(-제외)"></Form.Control>
                  </Col>
                  <Button sm={3} variant="secondary">
                    본인인증
                  </Button>
                </Form.Group>
              </Form>
              <hr />
              <div className="row">
                <div className="col-4"></div>
                <div className="col-6">
                  <Button variant="secondary">아이디 찾기</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-8">
              <h4>비밀번호 찾기</h4>
              <hr />
              <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    이름
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="email" placeholder="이름 입력" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    아이디
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="email" placeholder="아이디 입력" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPhone">
                  <Form.Label column sm={3}>
                    전화번호
                  </Form.Label>
                  <Col sm={6}>
                    <Form.Control placeholder="전화번호 11자리 입력(-제외)"></Form.Control>
                  </Col>
                  <Button variant="secondary" sm={3}>
                    본인인증
                  </Button>
                </Form.Group>
              </Form>
              <hr />
              <div className="row">
                <div className="col-4"></div>
                <div className="col-6">
                  <Button variant="secondary">비밀번호 찾기</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
