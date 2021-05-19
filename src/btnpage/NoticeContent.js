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
  ];

  const data = [
    //테이블에 들어갈 데이터 임시 하드코딩
    {
      recordname: "컴퓨터 웹개발 동아리",

      name: "김갑수",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "정의란 무엇인가 독후감",

      name: "김둘둘",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "독서 토론 대회",
      kind: "대회 및 수상",
      name: "김셋",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "4차학생회 회의",
      kind: "임원활동",
      name: "김다섯",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "xx",
      kind: "동아리",
      name: "김여섯",
      submitday: "xx",
      read: "미확인",
    },
    {
      recordname: "xx",
      kind: "동아리",
      name: "김일곱",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "xx",
      kind: "동아리",
      name: "김여덜",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "xx",
      kind: "동아리",
      name: "김아홉",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "xx",
      kind: "동아리",
      name: "김열",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "xx",
      kind: "동아리",
      name: "김열하나",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "xx",
      kind: "동아리",
      name: "김열둘",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "xx",
      kind: "동아리",
      name: "김열셋",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "xx",
      kind: "동아리",
      name: "김열넷",
      submitday: "2021/03/14",
      read: "미확인",
    },
    {
      recordname: "xx",
      kind: "동아리",
      name: "김열여섯",
      submitday: "2021/03/14",
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
          <Button className="btn-info">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy년 MM월 dd일"
            />
          </Button>
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
            <Button onclick={show ? <ModalContent1 /> : null}>글쓰기</Button>
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

export default NoticeContent;
