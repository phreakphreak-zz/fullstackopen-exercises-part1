import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  const { parts, exercises } = props;
  return (
    <div>
      <Part part={parts.p1} exercises={exercises.e1} />
      <Part part={parts.p2} exercises={exercises.e2} />
      <Part part={parts.p3} exercises={exercises.e3} />
    </div>
  );
};
const Total = (props) => {
  const { exercises } = props;
  return (
    <p>Number of exercises {exercises.e1 + exercises.e2 + exercises.e3}</p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = {
    p1: "Fundamentals of React",
    p2: "Using props to pass data",
    p3: "State of a component",
  };
  const exercises = {
    e1: 10,
    e2: 7,
    e3: 14,
  };

  return (
    <div>
      <Header course={course} /> 
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
