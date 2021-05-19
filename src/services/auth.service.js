import axios from "axios"; //Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리

const API_URL = "http://localhost:8080/api/auth/"; //API 전송 서버를 임시로 내 로컬 로컬포트로 지정

class AuthService {
  //로그인 및 회원가입 인증 클래스
  login(userid, password, userposition) {
    return axios
      .post(API_URL + "signin", {
        userid,
        password,
        userposition,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data)); // 서버로 부터 받은 json 형태의  user 데이터를 로컬 스토리지로 우선 저장
          return response.data;
        } else if (!response) alert("아이디 비번을 다시 입력해주세요!");

        //return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(userid, password, username, usertell, userschool, userposition) {
    //post{사용자_아이디, 사용자_비밀번호, 사용자_이름, 사용자_전화번호, 사용자_학교, 사용자_담당}
    return axios.post(API_URL + "signup", {
      userid,
      password,
      username,
      usertell,
      userschool,
      userposition,
    });
  }

  noticetable(noticetitle, username, userposition, noticecontent, openrange) {
    //공지사항 등록하기
    return axios.post(API_URL + "noticeup");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user")); //json 파싱 방법으로 로컬저장소에 한 사용자의 튜플 정보를 저장한다.
  }
}

export default new AuthService();
