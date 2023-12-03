import React from "react";
import "./card.css";
import { Tooltip } from "antd";

export type CardProps = {
  lesson: {
    title: string;
    place: string;
    weeks: number[];
    extra_information?: string;
    time: Date;
    teacher: string;
  };
};

const Card: React.FC<CardProps> = ({ lesson }) => {
  return (
    <div className="card">
      <div className="color purple"></div>
      <div className="info">
        <div className="card-title">
          <span>
            <b>{lesson.title}</b>
          </span>
          <span>
            <b>{lesson.place}</b>
          </span>
        </div>
        <div className="data">
          <span>
            Время:{" "}
            <b>
              {lesson.time.getHours()}:{lesson.time.getMinutes()}
            </b>
          </span>
          <span>
            Недели:
            {lesson.weeks.map((event, index) => (
              <span key={index}>
                {event}
                {index !== lesson.weeks.length - 1 ? ", " : ""}
              </span>
            ))}
            {lesson.extra_information && (
              <span> ({lesson.extra_information})</span>
            )}
          </span>
        </div>
        <div>
          <Tooltip title="Teacher name" trigger="hover">
            <button className="teacher-button">{lesson.teacher}</button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  lesson: {
    title: "Default Title",
    place: "Default Place",
    weeks: [1, 2],
    time: new Date(),
    teacher: "Default Teacher",
  },
};

export default Card;
