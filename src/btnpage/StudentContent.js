import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import homepic from "../imagess/profile1.png";
import AuthService from "../../src/services/auth.service";
import { Table } from "react-bootstrap";

function StudentContent() {
  const [startDate, setStartDate] = useState(new Date());
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  return (
    <div>
      <section className="record_container">
        <section className="left_content">
          <h3 className="school_name">성결고등학교</h3>
          <section className="card_info">
            <Card style={{ width: "14rem" }}>
              <Card.Img variant="left" src={homepic} width="90px" />
              <Card.Body className="text=right">
                <Card.Title className="text-right">
                  {currentUser.username} 선생님
                </Card.Title>
                <hr />
                <Card.Subtitle className="text-center">
                  {currentUser.userid}
                </Card.Subtitle>
                <Card.Text className="text-right">
                  <div>{currentUser.userposition}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </section>
          <br></br>
          <div>
            {" "}
            <div>
              Today
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy년 MM월 dd일"
              />
            </div>
          </div>
          <br></br>
          <section className="active_record_submit">
            <h4>활동 기록 제출</h4>
            <hr className="hr1"></hr>
            <ul className="record_submit-student">
              <li>김도윤[나사 우주프로젝트]</li>{" "}
              {/*오늘 활동 기록을 제출한 학생들의 이름이 나도록 한다.*/}
              <li>김갑수[코딩 알고리즘 5등]</li>
              <li>김나나[쇼미더머니10 예선통과]</li>
              <li>정현배[삼성 시각디자인 공모전3등]</li>
            </ul>
            <hr className="hr1"></hr>
          </section>
        </section>
        <p>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        </p>
        <section className="right_content">
          <div className="submit_record_check">
            <Table striped bordered hover size="xl">
              <thead>
                <tr>
                  <th>3학년 6반 학생명단</th>
                  <th>학생 이름</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>김갑수</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>김진영</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>원영인</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>박원용</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>문예림</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>김수진</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>김조인</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>강호진</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>한동인</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>한경진</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>김도윤</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </section>
      </section>
    </div>
  );
}

export default StudentContent;
