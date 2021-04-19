//import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Form, Button, Card, Alert, Row, Col, FormText } from "react-bootstrap";
//import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import title1 from "../../imagess/title1.png";
import AuthService from "../../services/auth.service";
//import CheckButton from "react-validation/build/button";

//react bootstrap 에서 제공하는 required 형식 알아봐야됨
const required = (value) => {
  if (!value) {
    return <div role="alert">이칸을 입력해야 합니다!</div>;
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    //이름 형식 검사
    return (
      <div className="alert alert-danger" role="alert">
        사용자 이름을 3자리 이상 입력해 주세요!
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    //비밀번호 형식 검사
    return (
      <div className="alert alert-danger" role="alert">
        비밀번호는 적어도 6자리 이상 40자리 미만으로 입력해주세요!
      </div>
    );
  }
};

export default class Signup extends Component {
  //const emailRef = useRef();
  //const passwordRef = useRef();
  //const passwordConfirmRef = useRef();
  //const { signup } = useAuth();
  //const [error, setError] = useState("");
  //const [loading, setLoading] = useState(false);
  //const history = useHistory();

  /*async function handleSubmit(e) {
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
  }*/

  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeUsertell = this.onChangeUsertell.bind(this);
    this.onChangeUserSchool = this.onChangeUserSchool.bind(this);
    this.onChnageUserPosition = this.onChnageUserPosition.bind(this);
    //this.onChangeteacherident

    this.state = {
      userid: "",
      password: "",
      username: "",
      usertell: "",
      userschool: "",
      userposition: "",
      successful: false,
      message: "",
    };
  }

  onChangeUserId(e) {
    this.setState({
      userid: e.target.value,
    });
  }

  onChangeUserpassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeUsertell(e) {
    this.setState({
      usertell: e.target.value,
    });
  }

  onChangeUserSchool(e) {
    this.setState({
      userschool: e.target.value,
    });
  }

  onChnageUserPosition(e) {
    this.setState({
      userposition: e.target.value,
    });
  }

  //서버로 회원 가입 양식 제출 핸들러
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    AuthService.register(
      this.state.userid,
      this.state.password,
      this.state.username,
      this.state.usertell,
      this.state.userschool,
      this.state.userposition
    ).then(
      (response) => {
        alert("회원가입이 완료됬습니다.");
        this.props.history.push("/"); //회원가입이 완료된 후에 로그인 화면으로 넘어가도록 설정
        this.setState({
          message: response.data.message,
          successful: true,
        });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage,
        });
        alert(
          "이미 존재하는 계정이거나 잘못 입력하셨습니다. 다시 입력해주세요"
        ); //DB에 기존에 존재하던 계정이 있을시
      }
    );
  }
  render() {
    return (
      <div className="container">
        <Card style={{ width: "80%" }}>
          <img
            src={title1} //배경사진 삽입
            alt=""
            class="img-responsive center-block"
            height="150px"
          ></img>
          <Card.Body>
            <h2 className="text-center mb-4">회원가입</h2>

            <Form
              onSubmit={this.handleRegister}
              ref={(c) => {
                this.form = c;
              }}
            >
              {!this.state.successful && ( //htmlfor 은 다른속성에 연관시킬 예약어 기능을 한다.
                <div>
                  <Form.Group as={Row}>
                    <Form.Label htmlFor="userid" column sm={2}>
                      아이디
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="text" //각 타입의 형태를 지정해줘야 DB로 값이 넘어간다.
                        placeholder="6~15자리의 영문 및 숫자 입력"
                        value={this.state.userid}
                        onChange={this.onChangeUserId}
                        required={required}
                      />
                    </Col>
                    <Button sm={4} variant="secondary">
                      중복확인
                    </Button>
                  </Form.Group>
                  <Form.Group as={Row} id="password">
                    <Form.Label htmlFor="password" column sm={2}>
                      비밀번호
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="password"
                        placeholder="영어,숫자,특수문자 중 2개 이상 8~16자리 입력"
                        value={this.state.password}
                        onChange={this.onChangeUserpassword}
                        //validations={[required]}
                        required
                      />
                    </Col>
                    <FormText>사용 불가</FormText>
                  </Form.Group>

                  <Form.Group as={Row} id="">
                    <Form.Label htmlFor="username" column sm={2}>
                      이름
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="text"
                        placeholder="이름 입력"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        //ref={emailRef}
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} id="">
                    <Form.Label htmlFor="usertell" column sm={2}>
                      전화번호
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="text"
                        placeholder="전화번호 입력(-제외)"
                        value={this.state.usertell}
                        onChange={this.onChangeUsertell}
                        //ref={emailRef}
                        required
                      />
                    </Col>
                    <Button sm={4} variant="secondary">
                      본인인증
                    </Button>
                  </Form.Group>

                  <Form.Group as={Row} id="">
                    <Form.Label htmlFor="userschool" column sm={2}>
                      학교
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="text"
                        placeholder="학교 선택"
                        value={this.state.userschool}
                        onChange={this.onChangeUserSchool}
                        //ref={emailRef}
                        required
                      />
                    </Col>
                    <Button sm={4} variant="secondary">
                      학교검색
                    </Button>
                  </Form.Group>

                  <Form.Group as={Row} id="">
                    <Form.Label htmlFor="userposition" column sm={2}>
                      담당
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="text"
                        placeholder="담당 선택"
                        //ref={emailRef}
                        value={this.state.userposition}
                        onChange={this.onChnageUserPosition}
                        required
                      />
                    </Col>
                    <Button sm={4} variant="secondary">
                      담당선택
                    </Button>
                  </Form.Group>

                  <Form.Group as={Row} id="">
                    <Form.Label column sm={2}>
                      재직증명서
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        //type=""
                        placeholder="파일 첨부(형식: PDF,한글)"
                        //ref={emailRef}
                        //required
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
                        //disabled={loading}
                        className="w-40 "
                        type="submit"
                        variant="secondary"
                        //style={{ display: "none" }}
                        ref={(c) => {
                          this.checkBtn = c;
                        }}
                        /* onClick={() => {
                      history.push("/");
                    }}*/
                      >
                        회원가입 신청
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {this.state.message}
                  </div>
                </div>
              )}
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
}
