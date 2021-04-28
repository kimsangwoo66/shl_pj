import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import homepic from "../imagess/profile1.png";

function StudentContent() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <section className="record_container">
        <section className="left_content">
          <h3 className="school_name">성결고등학교</h3>
          <section className="card_info">
            <Card style={{ width: "14rem" }}>
              <Card.Img
                variant="top"
                src={homepic}
                width="30px"
                height="100px"
              />
              <Card.Body className="text=right">
                <Card.Title className="text-right">김철수 선생님</Card.Title>
                <hr />
                <Card.Subtitle className="text-center">
                  mrk211@sungkul.ac.kr
                </Card.Subtitle>
                <Card.Text className="text-right">
                  <div>1학년 2반</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </section>
          <br></br>
          <div>
            {" "}
            <Button className="btn-info">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy년 MM월 dd일"
              />
            </Button>
          </div>
          <br></br>
          <section className="active_record_submit">
            <h4>활동 기록 제출</h4>
            <hr className="hr1"></hr>
            <ul className="record_submit-student">
              <li>김덕배</li>
              <li>김갑수</li>
              <li>김나나</li>
              <li>정현배</li>
            </ul>
            <hr className="hr1"></hr>
          </section>
        </section>
        <p>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        </p>
      </section>
    </div>
  );
}

export default StudentContent;
