import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //브라우저 라우터를 써야 그 위의 컴포넌트들이 모든화면에 공유가 된다.

import FindIdPw from "./component/Authpages/FindIdPw";
import MainStack from "./component/MainStack";
import HomeContent from "./btnpage/HomeContent";
import PlanContent from "./btnpage/PlanContent";
import RegisterContent from "./btnpage/RegisterContent";
import StudentContent from "./btnpage/StudentContent";

import Signup from "./component/Authpages/Signup";

import Login from "./component/Authpages/Login";
//import Dashboard from "./Dashboard";

//로그인 화면을 제외한 나머지 화면에 상단 바가 나와야 한다. router안에 mainstack을 넣으면 모든화면에 탭바가 나타나는데
//그렇게되면 로그인 화면에도 나타나게 되서 문제가 생긴다. 따라서 메인스텍 컴포넌트 안에 원하는 경로의 컴포넌트를 넣어서 그 컴포넌트 들에만 상단바가 보이게 한다.
function App() {
  return (
    <div className="App">
      <div className="w-100" style={{ maxWidth: "100%" }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/findIdPw" component={FindIdPw} />

            <MainStack>
              <Route exact path="/MainStack" component={MainStack} />
              <Route exact path="/home" component={HomeContent} />
              <Route exact path="/student" component={StudentContent} />
              <Route exact path="/register" component={RegisterContent} />
              <Route exact path="/plan" component={PlanContent} />
            </MainStack>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
