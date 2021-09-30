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

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function NoticeContent() {
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
    { dataField: "recordname", text: "제목" },

    { dataField: "name", text: "등록자" },
    { dataField: "submitday", text: "등록일" },
    { dataField: "read", text: "상태" },
    { dataField: "cont", text: "상태" },
  ];

  const data = [
    //테이블에 들어갈 데이터 임시 하드코딩
    {
      recordname: "독서 토론 대회 수상자",
      kind: "대회 및 수상",
      name: "배소진",
      submitday: "2021/09/29",
      read: "미확인",
    },
    {
      recordname: "10월 교내 대회 안내",

      name: "박제동",
      submitday: "2021/09/25",
      read: "미확인",
    },
    {
      recordname: "학생 기록 기준",
      name: "김철수",
      submitday: "2021/09/23",
      read: "미확인",
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
            <hr></hr>
            <div> {modalInfo.recordname}</div>
            <hr></hr>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>상세내용</h5>
          <text>
            최우수상 문예림 <br />
          </text>

          <text>
            우수상 김수진
            <br />
          </text>
          <text>
            동상 김도윤
            <hr />
          </text>
        </Modal.Body>
        <Modal.Footer className="modal_footer">
          <Button varient="secondary" onClick={handleClose}>
            확인
          </Button>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp; &emsp;
          &emsp;&emsp;
        </Modal.Footer>
      </Modal>
    );
  };

  const ModalContent1 = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ml-auto">
            {" "}
            <hr></hr>
            <div>이름 {modalInfo.name}</div>
            <hr></hr>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>활동내용</h5>
          <text>야스</text>
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
            <Card.Img variant="top" src={homepic} width="30px" height="100px" />
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
      </section>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>

      <section className="right_content">
        <br></br>
        <br></br>

        <div className="submit_record_check">
          <h4>공지사항</h4>
          <ul className="submit_record_select">
            <select>
              <option>연도</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
            </select>
            <select>
              <option>학기</option>
              <option>1학기</option>
              <option>2학기</option>
            </select>
            <select>
              <option>상태</option>
              <option>미확인</option>
              <option>입력완료</option>
            </select>
            <Button ariant="primary" onClick={() => setShowModal(true)}>
              글쓰기
            </Button>
          </ul>
          <MyVerticallyCenteredModal
            show={showModal}
            onHide={() => setShowModal(false)}
          />

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

export default NoticeContent;
