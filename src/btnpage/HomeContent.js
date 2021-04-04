import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { Nav } from "react-bootstrap";
//import "../../App.css";
import homepic from "../imagess/profile1.png";

function HomeContent() {
  return (
    <div>
      <h3>성결고등학교</h3>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="left" src={homepic} width="100px" />
        <Card.Body className="text=right">
          <Card.Title className="text-right">김철수 선생님</Card.Title>
          <hr />
          <Card.Subtitle className="text-right">
            mrk211@sungkul.ac.kr
          </Card.Subtitle>
          <Card.Text className="text-right">1학년 2반</Card.Text>
          <Card.Text className="text-right">010-1234-5678</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomeContent;
