import React from "react";
import data from "../assets/data1.json";
const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((project, index) => (
          <TimelineItem
            key={index}
            heading={project.title}
            text={project.date}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => {
  return (
    <div
      className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"}`}
    >
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default Timeline;
