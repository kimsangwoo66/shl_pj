import React, { useState } from "react";
//import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css";
import "../App.css";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";

export default function Calendars() {
  return (
    <div>
      <ScheduleComponent currentView="Month">
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
      {/*<Calendar onChange={onChange} value={value} />*/}
    </div>
  );
}
