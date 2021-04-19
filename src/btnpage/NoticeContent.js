import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import homepic from "../imagess/profile1.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const data = [
  //테이블에 들어갈 데이터 임시 하드코딩
  { cknotice: "독서감상문 제출", nday: 1, name: "김갑수", read: "읽음" },
  {
    cknotice: "2학년 수학경시대회 참여희망 학생",
    nday: 2,
    name: "김지현",
    read: "안읽음",
  },
  { cknotice: "기타 등등", nday: 3, name: "김나나", read: "읽음" },
];

class NoticeContent extends Component {
  constructor() {
    super();

    this.state = {
      //각 콤보박스의 초기값 설정
      yeardropDownValue: "연도",
      semesterdropDownValue: "학기",
      readdropDownValue: "상태",
      search: "",
    };
  }

  changeValue(text) {
    //연도 값 변경 핸들러
    this.setState({ yeardropDownValue: text });
  }

  SchangeValue(text) {
    //학기값 변경 핸들러
    this.setState({ semesterdropDownValue: text });
  }

  RchangeValue(text) {
    //읽기 상태 변경 핸들러
    this.setState({ readdropDownValue: text });
  }

  handleSearch(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h3>성결고등학교</h3>
        <div className="row">
          <div className="col-2">
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
          </div>
          <div className="col-1"></div>
          <div className="col-9">
            <div className="row">
              <div className="col-3">
                {" "}
                <h4>공지사항</h4>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-1.5">
                    <DropdownButton
                      variant="outline-secondary"
                      id="dropdown-item-button"
                      title={this.state.yeardropDownValue}
                    >
                      <Dropdown.Item as="button">
                        <div
                          onClick={(e) =>
                            this.changeValue(e.target.textContent)
                          }
                        >
                          2019년
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item as="button">
                        <div
                          onClick={(e) =>
                            this.changeValue(e.target.textContent)
                          }
                        >
                          2020년
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item as="button">
                        <div
                          onClick={(e) =>
                            this.changeValue(e.target.textContent)
                          }
                        >
                          2021년
                        </div>
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>

                  <div className="col-1.5">
                    <DropdownButton
                      variant="outline-secondary"
                      id="dropdown-item-button"
                      title={this.state.semesterdropDownValue}
                    >
                      <Dropdown.Item as="button">
                        <div
                          onClick={(e) =>
                            this.SchangeValue(e.target.textContent)
                          }
                        >
                          1학기
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item as="button">
                        <div
                          onClick={(e) =>
                            this.SchangeValue(e.target.textContent)
                          }
                        >
                          2학기
                        </div>
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>

                  <div className="col-2">
                    <DropdownButton
                      variant="outline-secondary"
                      id="dropdown-item-button"
                      title={this.state.readdropDownValue}
                    >
                      <Dropdown.Item as="button">
                        <div
                          onClick={(e) =>
                            this.RchangeValue(e.target.textContent)
                          }
                        >
                          읽음
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item as="button">
                        <div
                          onClick={(e) =>
                            this.RchangeValue(e.target.textContent)
                          }
                        >
                          안읽음
                        </div>
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>

                  <div className="col-3">
                    <input
                      value={this.search}
                      name="search"
                      onChange={this.handleSearch}
                      placeholder="검색"
                    ></input>
                  </div>
                  <div className="col-2"></div>
                  <div className="col-2">
                    <Button variant="secondary">등록하기</Button>{" "}
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>

            <div>
              {" "}
              {/*공지사항 리스트 테이블 하드코딩 및 1차 프로토타입 제작*/}
              <BootstrapTable data={data}>
                <TableHeaderColumn dataField="cknotice"></TableHeaderColumn>

                <TableHeaderColumn dataField="name" isKey width="200">
                  등록자
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="nday"
                  width="200"
                  //filter={{ type: "TextFilter", delay: 1000 }}
                >
                  등록일
                </TableHeaderColumn>
                <TableHeaderColumn dataField="read" width="70">
                  상태
                </TableHeaderColumn>
              </BootstrapTable>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default NoticeContent;
