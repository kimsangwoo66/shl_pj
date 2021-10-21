import React, { useState } from "react";
import "../btnpage/Cresgister.css";
import { Card, Button, Modal } from "react-bootstrap";
import homepic from "../imagess/profile1.png";
import { BsSearch } from "react-icons/bs";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import DatePicker from "react-datepicker";
import AuthService from "../../src/services/auth.service";

const selectRow = (props) => {
  props.history.push("/home");
};

const onChangeHandler = (e) => {
  console.log(e.data.value);
  let newArray = this.searchArray.filter((d) => {
    console.log(d);
    let searchValue = d.title.toLowerCase();
    return searchValue.indexOf(e.target.value) !== -1;
  });
  //useState({ Items: newArray });
};

function RegisterContent() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser);
  const [startDate, setStartDate] = useState(new Date());
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createCustomInsertButton = (onclick) => {
    return (
      <button style={{ color: "red" }} onclick={onclick}>
        Add
      </button>
    );
  };

  const columns = [
    { dataField: "recordname", text: "기록명" },
    { dataField: "kind", text: "카테고리" },
    { dataField: "name", text: "이름" },
    { dataField: "submitday", text: "제출일" },
    { dataField: "read", text: "상태" },
  ];

  const data = [
    //테이블에 들어갈 데이터 임시 하드코딩
    {
      recordname: "서울시 코딩교육",
      kind: "교외활동",
      name: "김도윤",
      submitday: "2021/09/23",
      read: "확인",
    },
    {
      recordname: "정의란 무엇인가 독후감",
      kind: "기타",
      name: "김오인",
      submitday: "2021/08/11",
      read: "확인",
    },
    {
      recordname: "독서 토론 대회",
      kind: "대회 및 수상",
      name: "정재훈",
      submitday: "2021/08/03",
      read: "확인",
    },
    {
      recordname: "4차학생회 회의",
      kind: "임원활동",
      name: "박서준",
      submitday: "2021/07/25",
      read: "확인",
    },
    {
      recordname: "GPU칩 분해일지",
      kind: "동아리",
      name: "마제동",
      submitday: "2021/07/20",
      read: "확인",
    },
    {
      recordname: "인천 앞바다 쓰레기 수거",
      kind: "동아리",
      name: "마동석",
      submitday: "2021/07/15",
      read: "확인",
    },
    {
      recordname: "30층 빌딩 모델 설계",
      kind: "동아리",
      name: "이제훈",
      submitday: "2021/07/11",
      read: "확인",
    },
    {
      recordname: "남극 연구소 방문일지",
      kind: "기타",
      name: "이예라",
      submitday: "2021/06/14",
      read: "확인",
    },
    {
      recordname: "동네 전력 소비량 조사",
      kind: "기타",
      name: "성지곤",
      submitday: "2021/05/17",
      read: "확인",
    },
  ];

  const rowEvents = {
    onClick: (e, row) => {
      console.log(row);
      setModalInfo(row);
      toggleTrueFalse();
    },
  };

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ml-auto">
            {" "}
            <table className="table-modal">
              <tbody>
                <tr className="table-modal-td">
                  <td className="table-modal-td">
                    카테고리
                    <span className="table-modal-fontsize">교외 활동</span>
                  </td>
                  <td className="table-modal-td">
                    기록명
                    <span className="table-modal-fontsize">
                      서울시 코딩교육
                    </span>
                  </td>
                  <td className="table-modal-td">
                    제출일
                    <span className="table-modal-fontsize">9월 30일</span>
                  </td>
                </tr>
                <tr className="table-modal-td">
                  <td className="table-modal-td">
                    이름
                    <span className="table-modal-fontsize">김도윤</span>
                  </td>
                  <td className="table-modal-td">
                    <span className="table-modal-fontsize">3학년 6반 11번</span>
                  </td>
                  <td className="table-modal-td">
                    상태
                    <span className="table-modal-fontsize">확인</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>활동내용</h5>
          <text>
            학교 외부에서 시행하는 코딩 체험을 해봤다.  c언어, 파이썬, 자바 등등
            다양한 체험을 할 수 있었다. 나는 처음에 c언어파트로 들어가 "hello
            world" 라는 단어가 생성되도록 따라했는데 너무 신기했다. 다양한
            언어들로 간단한 코드 생성을 해봤고, 평소에 관심이 많았지만 이번
            체험을 통해서 더욱더 관심이 생겼다
          </text>
        </Modal.Body>
        <Modal.Footer className="modal_footer">
          <Button varient="secondary" onClick={handleClose}>
            내용복사
          </Button>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;
          <Button varient="secondary" onClick={handleClose}>
            확인완료
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

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
              <Card.Subtitle className="text-right">
                아이디 : {currentUser.userid}
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
      </section>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>

      <section className="right_content">
        <br></br>
        <br></br>

        <div className="submit_record_check">
          <h4>제출 기록 확인</h4>
          <ul className="submit_record_select">
            <select>
              <option>날짜</option>
              <option>2021/03/11</option>
            </select>
            <select>
              <option>카테고리</option>
              <option>동아리</option>
              <option>기타</option>
              <option>대회 및 수상</option>
              <option>임원활동</option>
            </select>
            <select>
              <option>상태</option>
              <option>미확인</option>
              <option>입력완료</option>
            </select>
          </ul>

          <div className=".search-container button">
            <input type="search" placeholder="검색"></input>
            <button type="button">
              <i>
                <BsSearch></BsSearch>
              </i>
            </button>
          </div>
        </div>
        <hr></hr>
        <div>
          {" "}
          {/*공지사항 리스트 테이블 하드코딩 및 1차 프로토타입 제작*/}
          <BootstrapTable
            //selectRow={selectRow}
            keyField="name"
            data={data}
            hover
            columns={columns}
            pagination={paginationFactory()}
            bordered={false}
            rowEvents={rowEvents}
          />
          {show ? <ModalContent /> : null}
        </div>
        <hr></hr>
        <section className="record_table"></section>
      </section>
    </section>
  );
}

export default RegisterContent;
