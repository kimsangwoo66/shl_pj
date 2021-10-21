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

function StudentContent() {
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
    { dataField: "recordname", text: "번호" },
    { dataField: "kind", text: "학생이름" },
    ,
  ];

  const data = [
    //테이블에 들어갈 데이터 임시 하드코딩
    {
      recordname: "1",
      kind: "김갑수",
    },
    {
      recordname: "2",
      kind: "김진영",
      name: "김오인",
      submitday: "2021/08/11",
      read: "확인",
    },
    {
      recordname: "3",
      kind: "원영인",
      name: "정재훈",
      submitday: "2021/08/03",
      read: "확인",
    },
    {
      recordname: "4",
      kind: "박원용",
      name: "마제동",
      submitday: "2021/07/20",
      read: "확인",
    },
    {
      recordname: "5",
      kind: "문예림",
      name: "마동석",
      submitday: "2021/07/15",
      read: "확인",
    },
    {
      recordname: "6",
      kind: "김수진",
      name: "이제훈",
      submitday: "2021/07/11",
      read: "확인",
    },
    {
      recordname: "7",
      kind: "김조인",
      name: "이예라",
      submitday: "2021/06/14",
      read: "확인",
    },
    {
      recordname: "8",
      kind: "강호진",
      name: "성지곤",
      submitday: "2021/05/17",
      read: "확인",
    },
    {
      recordname: "9",
      kind: "한동인",
      name: "성지곤",
      submitday: "2021/05/17",
      read: "확인",
    },
    {
      recordname: "10",
      kind: "한경진",
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
            {/* <table className="table-modal">
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
            </table> */}
            김갑수
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>제출기록</h5>
          <text>
            안양시 워킹홀릭
            <br />
            오징어게임 보조출연
            <br />
            사랑의 쌀 배달
            <br />
            에베레스트 정복
            <br />
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
          <h4>3학년 6반 학생명단</h4>
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

export default StudentContent;
