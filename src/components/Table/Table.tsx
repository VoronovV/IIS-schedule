import React from "react";
import "./table.css";
import Card, { CardProps } from "../Card/Card";

type ScheduleDay = {
  date: Date;
  lessons: CardProps["lesson"][];
};

type TableProps = {
  schedule: ScheduleDay[];
};

const Table: React.FC<TableProps> = ({ schedule }) => {
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return (
    <div className="table">
      {schedule.map((day, index) =>
        index < 8 ? (
          <div key={index} className="day">
            <div className="day_header">
              <span>{daysOfWeek[day.date.getDay()]}</span>
              <span>
                {day.date.getDate()}.{day.date.getMonth() + 1}
              </span>
            </div>
            <div className="lessons">
              {day.lessons.map((lesson, index) => (
                <Card key={index} lesson={lesson} />
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )
      )}
    </div>
  );
};

Table.defaultProps = {
  schedule: [
    {
      date: new Date(),
      lessons: [
        {
          title: "КГТ",
          place: "502-2",
          weeks: [12, 2],
          time: new Date(),
          extra_information: "asdasd",
          teacher: "asdas",
        },
        {
          title: "КГТ",
          place: "502-2",
          weeks: [12, 2],
          time: new Date(),
          extra_information: "asdasd",
          teacher: "asdas",
        },
        {
          title: "КГТ",
          place: "502-2",
          weeks: [12, 2],
          time: new Date(),
          extra_information: "asdasd",
          teacher: "asdas",
        },
        {
          title: "КГТ",
          place: "502-2",
          weeks: [12, 2],
          time: new Date(),
          extra_information: "asdasd",
          teacher: "asdas",
        },
      ],
    },
    {
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
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
      ],
    },
    {
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
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
      ],
    },
    {
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
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
      ],
    },
    {
      date: new Date(),
      lessons: [
        {
          title: "КГТ",
          place: "502-2",
          weeks: [12, 2],
          time: new Date(),
          extra_information: "asdasd",
          teacher: "asdas",
        },
        {
          title: "КГТ",
          place: "502-2",
          weeks: [12, 2],
          time: new Date(),
          extra_information: "asdasd",
          teacher: "asdas",
        },
        {
          title: "КГТ",
          place: "502-2",
          weeks: [12, 2],
          time: new Date(),
          extra_information: "asdasd",
          teacher: "asdas",
        },
        {
          title: "КГТ",
          place: "502-2",
          weeks: [12, 2],
          time: new Date(),
          extra_information: "asdasd",
          teacher: "asdas",
        },
      ],
    },
    {
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
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
      ],
    },
    {
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
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
      ],
    },
    {
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
          title: "asdas",
          place: "asdas",
          weeks: [12, 2],
          time: new Date(),
          teacher: "asdas",
        },
      ],
    },
  ],
};

export default Table;
