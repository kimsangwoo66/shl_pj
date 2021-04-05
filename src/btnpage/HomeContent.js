import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { Nav } from "react-bootstrap";
import "../App.css";
import homepic from "../imagess/profile1.png";
import { ListGroup, ListGroupItem } from "reactstrap";
import DatePicker from "react-datepicker";
import { AiOutlineBgColors } from "react-icons/ai";

function HomeContent() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div>
        <h3>성결고등학교</h3>
        <div className="row">
          {" "}
          {/*첫번째 행의 구성 */}
          <div className="col-4">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="left" src={homepic} width="90px" />
              <Card.Body className="text=right">
                <Card.Title className="text-right">김철수 선생님</Card.Title>
                <hr />
                <Card.Subtitle className="text-right">
                  mrk211@sungkul.ac.kr
                </Card.Subtitle>
                <Card.Text className="text-right">
                  <div>1학년 2반</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            <div className="row">
              <h5>알림사항</h5>
              <h5 className="ml-auto">더보기+</h5>
            </div>
            <hr />
            <div>
              <ListGroup>
                <div>
                  <li>
                    <div className="row">
                      <div className="col-4" to="#">
                        전체/일반 공지-
                      </div>
                      <div className="col-6">공지내용</div>
                      <div className="ml-auto">선생님 성함 | 날짜</div>
                    </div>
                  </li>
                  <br></br> {/* 공지가 개시될때마다 반복해서 띄워줘야한다.*/}
                  <li>
                    <div className="row">
                      <div className="col-4" to="#">
                        전체/일반 공지-
                      </div>
                      <div className="col-6">공지내용</div>
                      <div className="ml-auto">선생님 성함 | 날짜</div>
                    </div>
                  </li>
                  <br></br> {/* 공지가 개시될때마다 반복해서 띄워줘야한다.*/}
                  <li>
                    <div className="row">
                      <div className="col-4" to="#">
                        전체/일반 공지-
                      </div>
                      <div className="col-6">공지내용</div>
                      <div className="ml-auto">선생님 성함 | 날짜</div>
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
          <Button className="btn-info">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy년 MM월 dd일"
            />
          </Button>

          <div>
            <br />
            <div className="row">
              <div className="col-7">
                <div>
                  <h5>오늘의 일정</h5>{" "}
                  {/*정확히 어떤 일정들을 담아야할지 모르겠다. */}
                  <hr className="class-2" />{" "}
                  {/*App.css 에 hr 타입 종류 메소드화*/}
                  <li>독서 감상문 제출 마감</li>{" "}
                  {/*오늘 날짜의 캘린더에 들어가있는 내용이 리스트에 나와야한다.*/}
                  <li>????????????????</li>
                  <hr className="class-2" />
                </div>
              </div>
              <div className="col-5">
                <div>
                  <h5>활동 기록 제출</h5>{" "}
                  {/*정확히 어떤 일정들을 담아야할지 모르겠다. */}
                  <hr className="class-2" />{" "}
                  {/*App.css 에 hr 타입 종류 메소드화*/}
                  <li>홍길동</li>{" "}
                  {/*오늘 활동 기록을 제출한 학생들의 이름이 나도록 한다.*/}
                  <li>홍길동</li>
                  <li>홍길동</li>
                  <li>홍길동</li>
                  <li>홍길동</li>
                  <li>홍길동</li>
                  <li>홍길동</li>
                  <hr className="class-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
