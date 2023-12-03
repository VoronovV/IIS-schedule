import React from "react";
import "./card.css";

type CardProps = {
  lesson: {
    title: string;
    place: string;
    weeks: number[];
    time: Date;
    teacher: string;
  };
};

const Card: React.FC<CardProps> = ({ lesson }) => {
  return (
    <div className="Card">
      <div className="color"></div>
      <div>
        <span>{lesson.title}</span>
        <span>{lesson.place}</span>
      </div>
      <div>
        <span>
          {lesson.weeks.map((event, index) => (
            <span key={index}>{event}</span>
          ))}
        </span>
        <span>{lesson.time.toDateString()}</span>
      </div>
      <div>
        <a href="">{lesson.teacher}</a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  lesson: {
    title: "Default Title",
    place: "Default Title",
    weeks: [1, 2],
    time: new Date(),
    teacher: "Default Title",
  },
};

export default Card;
