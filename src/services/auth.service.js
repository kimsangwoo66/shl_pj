import axios from "axios"; //Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리

const API_URL = "http//localhost:8080/api/auth/";

class AuthService {
  login(userid, userpassword) {
    return axios
      .post(API_URL + "signin", {
        userid,
        userpassword,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("users");
  }

  register(userid, userpassword, username, usertel, userschool, position) {
    //post{사용자_아이디, 사용자_비밀번호, 사용자_이름, 사용자_전화번호, 사용자_학교, 사용자_담당}
    return axios.post(API_URL + "signup", {
      userid,
      userpassword,
      username,
      usertel,
      userschool,
      position,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
