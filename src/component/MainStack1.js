import React, { useState } from "react";
import HomeContent from "../btnpage/HomeContent";
import PlanContent from "../btnpage/PlanContent";
import RegisterContent from "../btnpage/RegisterContent";
import StudentContent from "../btnpage/StudentContent";
import homepic from "../imagess/homepic.png";
//import "bootstrap/dist/css/bootstrap.css"; //bootstrap 라이브러리
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./MainStack.css";
import { IconContext } from "react-icons";

import { Link, Switch, Route } from "react-router-dom";

export default function MainStack() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <nav className={"navbar navbar-expand-lg navbar-light bg-light "}>
        <Link to={"/home"} className="navbar-brand">
          <img src={homepic}></img>
        </Link>
        <div class="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              홈
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/student"} className="nav-link">
              학생
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              기록
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/plan"} className="nav-link">
              일정
            </Link>
          </li>
        </div>

        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              님
            </Link>
          </li>
        </div>

        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </nav>
      <hr />

      <div className="container mt-3">
        <Switch>
          <Route exact path="/home" component={HomeContent} />
          <Route exact path="/student" component={StudentContent} />
          <Route exact path="/register" component={RegisterContent} />
          <Route exact path="/plan" component={PlanContent} />
        </Switch>
      </div>
    </div>
  );
}
