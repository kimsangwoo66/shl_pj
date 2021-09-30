import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../btnpage/Cresgister.css";
//import { Nav } from "react-bootstrap";
import "../App.css";
import homepic from "../imagess/profile1.png";
import { ListGroup } from "reactstrap";
import DatePicker from "react-datepicker";
//import { AiOutlineBgColors } from "react-icons/ai";
import Calendars from "../component/Calendars";
import { useLocation } from "react-router";
import AuthService from "../../src/services/auth.service";

//const userid = this.props.location.state.userid;

function HomeContent() {
  const location = useLocation();
  //const userid = location.state.userid;
  //const userposition = location.state.userposition;
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser); //현재 로그인한 선생님 정보를 불러옴
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div>
        <h3>성결고등학교</h3>
        <div className="row">
          {" "}
          {/*첫번째 행의 구성 */}
          <div className="col-5">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="left" src={homepic} width="90px" />
              <Card.Body className="text=right">
                <Card.Title className="text-right">
                  {currentUser.username} 선생님
                </Card.Title>
                <hr />
                <Card.Subtitle className="text-right">
                  {currentUser.userid}
                </Card.Subtitle>
                <Card.Text className="text-right">
                  <div>{currentUser.userposition}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            <div className="row">
              <Link to="/notice">
                <h5>공지사항</h5>
              </Link>
            </div>
            <hr />
            <div>
              <ListGroup>
                <div>
                  <li>
                    <div className="row">
                      <div className="col-4" to="#">
                        전체 공지-
                      </div>
                      <div className="col-6">독서 토론 대회 수상자</div>
                      <div className="ml-auto">배소진 선생님 |2021/09/29</div>
                    </div>
                  </li>
                  <br></br> {/* 공지가 개시될때마다 반복해서 띄워줘야한다.*/}
                  <li>
                    <div className="row">
                      <div className="col-4" to="#">
                        전체 공지-
                      </div>
                      <div className="col-6">10월 교내 대회 안내</div>
                      <div className="ml-auto">박제동 선생님 | 2021/09/25</div>
                    </div>
                  </li>
                  <br></br> {/* 공지가 개시될때마다 반복해서 띄워줘야한다.*/}
                  <li>
                    <div className="row">
                      <div className="col-4" to="#">
                        전체 공지-
                      </div>
                      <div className="col-6">학생 기록 기준</div>
                      <div className="ml-auto">김철수 선생님 | 2021/09/23</div>
                    </div>
                  </li>
                </div>
              </ListGroup>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-5">
          <div>
            Today
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy년 MM월 dd일"
            />
          </div>

          <div>
            <br />
            <div className="row">
              <div className="col-7">
                <div>
                  <h5>활동 기록 제출</h5>{" "}
                  {/*정확히 어떤 일정들을 담아야할지 모르겠다. */}
                  <hr className="class-2" />{" "}
                  {/*App.css 에 hr 타입 종류 메소드화*/}
                  <ul className="record_submit-student">
                    <li>김도윤[나사 우주프로젝트]</li>{" "}
                    {/*오늘 활동 기록을 제출한 학생들의 이름이 나도록 한다.*/}
                    <li>김갑수[코딩 알고리즘 5등]</li>
                    <li>김나나[쇼미더머니10 예선통과]</li>
                    <li>정현배[삼성 시각디자인 공모전3등]</li>
                  </ul>
                  <hr className="class-2" />
                </div>
              </div>
              <div className="col-5">
                <div>
                  <h5>오늘의 일정</h5>{" "}
                  {/*정확히 어떤 일정들을 담아야할지 모르겠다. */}
                  <hr className="class-2" />{" "}
                  {/*App.css 에 hr 타입 종류 메소드화*/}
                  <li>독서 감상문 제출 마감</li>{" "}
                  {/*오늘 날짜의 캘린더에 들어가있는 내용이 리스트에 나와야한다.*/}
                  <hr className="class-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <br />
          <Calendars />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
