import React, { Component } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
//import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import title1 from "../../imagess/title1.png";
import "../../App.css";
import { render } from "@testing-library/react";
import AuthService from "../../services/auth.service";

export default class Login extends Component {
  //const idRef = useRef();
  //const passwordRef = useRef();
  //const { login } = useAuth();
  //const [error, setError] = useState("");
  //const [loading, setLoading] = useState(false);
  //const history = useHistory();

  /*handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/Dashboard");
    } catch {
      setError("로그인에 실패하셨습니다.");
    }
    setLoading(false);
  }*/
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);

    this.state = {
      userid: "",
      password: "",
      loading: false,
      message: "",
      userposition: "",
    };
  }

  onChangeUserID(e) {
    this.setState({
      userid: e.target.value,
    });
  }

  onChangeUserPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  //서버로 로그인 요청 핸들러
  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    AuthService.login(
      this.state.userid,
      this.state.password,
      this.state.userposition
    ).then(
      () => {
        alert("로그인되었습니다."); // 로그인 검증 성공시 알림 메시지

        //class형 컴포넌트에서는 state나 props앞에 this를 써줘야한다.
        //this.props.history.push("/home");
        this.props.history.push({
          pathname: "/home",
          state: {
            userid: this.state.userid,
            userposition: this.state.userposition,
          },
        });

        window.location.reload();
      },
      (error) => {
        //비밀번호 및 아이디 가 DB에 없을경우 에러 메시지
        alert("아이디 및 비밀번호가 잘못되었습니다.");
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        this.setState({
          loading: false,
          message: resMessage,
        });
      }
    );
  }

  render() {
    return (
      <div className="login_center">
        <Card style={{ width: "80%" }}>
          <img src={title1} alt="" class="img-responsive center-block"></img>
          <Card.Body>
            {<Alert varient="danger"></Alert>}
            <Form
              onSubmit={this.handleLogin}
              ref={(c) => {
                this.form = c;
              }}
            >
              <Form.Group id="text">
                <Form.Label htmlFor="userid">아이디</Form.Label>
                <Form.Control
                  name="id"
                  type="text"
                  value={this.state.userid}
                  onChange={this.onChangeUserID}
                  required //부트 스트랩에서 제공하는 형식
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label htmlFor="password">비밀번호</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChangeUserPassword}
                  required
                />
              </Form.Group>
              <Button
                variant="secondary"
                //disabled={loading}
                className="w-100"
                type="submit"
                ref={(c) => {
                  this.checkBtn = c;
                }}
              >
                로그인
              </Button>{" "}
            </Form>

            <Link to="/FindIdPw">아이디/비밀번호찾기</Link>
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
}
