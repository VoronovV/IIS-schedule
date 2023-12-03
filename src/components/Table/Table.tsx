import React from "react";
import "./table.css";
import Card from "../Card/Card";

type ScheduleDay = {
  dayOfWeek: string;
  date: Date;
  lessons: {
    title: string;
    place: string;
    weeks: number[];
    time: Date;
    teacher: string;
  }[];
};

type TableProps = {
  schedule: ScheduleDay[];
};

const Table: React.FC<TableProps> = ({ schedule }) => {
  return (
    <div className="table">
      {schedule.map((day, index) => (
        <div key={index} className="day">
          <div>
            <span>{day.dayOfWeek}</span>
            <span>{day.date.toDateString()}</span>
          </div>
          {day.lessons.map((event, index) => (
            <Card key={index} lesson={event} />
          ))}
        </div>
      ))}
    </div>
  );
};

Table.defaultProps = {
  schedule: [
    {
      dayOfWeek: "asdas",
      date: new Date(),
      lessons: [
        {
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
        {
          title: "qwe",
          place: "qwe",
          weeks: [122, 2],
          time: new Date(),
          teacher: "qwe",
        },
      ],
    },
    {
      dayOfWeek: "asdas",
      date: new Date(),
      lessons: [
        {
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
        {
          title: "qwe",
          place: "qwe",
          weeks: [122, 2],
          time: new Date(),
          teacher: "qwe",
        },
      ],
    },
    {
      dayOfWeek: "asdas",
      date: new Date(),
      lessons: [
        {
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
        {
          title: "qwe",
          place: "qwe",
          weeks: [122, 2],
          time: new Date(),
          teacher: "qwe",
        },
      ],
    },
    {
      dayOfWeek: "asdas",
      date: new Date(),
      lessons: [
        {
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
        {
          title: "qwe",
          place: "qwe",
          weeks: [122, 2],
          time: new Date(),
          teacher: "qwe",
        },
      ],
    },
    {
      dayOfWeek: "asdas",
      date: new Date(),
      lessons: [
        {
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
        {
          title: "qwe",
          place: "qwe",
          weeks: [122, 2],
          time: new Date(),
          teacher: "qwe",
        },
      ],
    },
    {
      dayOfWeek: "asdas",
      date: new Date(),
      lessons: [
        {
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
        {
          title: "qwe",
          place: "qwe",
          weeks: [122, 2],
          time: new Date(),
          teacher: "qwe",
        },
      ],
    },
  ],
};

export default Table;
