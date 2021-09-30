import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import homepic from "../imagess/profile1.png";
import DatePicker from "react-datepicker";
import { BsSearch } from "react-icons/bs";
import Calendars from "../component/Calendars";
import AuthService from "../../src/services/auth.service";

import "./Cplancontent.css";

function PlanContent() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);
  const [startDate, setStartDate] = useState(new Date());
  return (
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
          <h4>오늘의 일정</h4>
          <hr className="hr1"></hr>
          <ul className="record_submit-student">
            <li>독서 감상문 제출 마감</li>
          </ul>
          <hr className="hr1"></hr>
        </section>
      </section>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>

      <section className="right_content">
        <br></br>
        <br></br>

        <div className="myclass_month_plan_header">
          <h4>우리반 이달의 일정</h4>
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;
          </p>
          <div className=".search-container button">
            <input type="search" placeholder="검색"></input>
            <button type="button">
              <i>
                <BsSearch></BsSearch>
              </i>
            </button>
          </div>
        </div>
        <Calendars />
      </section>
    </section>
  );
}

export default PlanContent;
