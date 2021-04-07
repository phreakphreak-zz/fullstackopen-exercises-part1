import React, { useState } from "react";

const Button = ({ type }) => {
  const { handleClick, text } = type;
  return <button onClick={handleClick}>{text}</button>;
};
const Buttons = ({ feedback }) => {
  const [good, neutral, bad] = feedback.statesFeedback;
  return (
    <div>
      <Button type={good} />
      <Button type={neutral} />
      <Button type={bad} />
    </div>
  );
};

const Statistic = ({ type }) => {
  const { text, value } = type;
  return (
    <p>
      {text} {value}
    </p>
  );
};
const Statistics = ({ feedback }) => {
  const [good, neutral, bad] = feedback.statesFeedback;
  return (
    <div>
      <h1>{feedback.titleStatistics}</h1>
      <Statistic type={good} />
      <Statistic type={neutral} />
      <Statistic type={bad} />
    </div>
  );
};

const Header = ({ feedback }) => <h1>{feedback.titleHeader}</h1>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = {
    titleHeader: "Give Feedback",
    titleStatistics: "Statistics",
    statesFeedback: [
      {
        text: "good",
        value: good,
        handleClick: () => setGood(good + 1),
      },
      {
        text: "neutral",
        value: neutral,
        handleClick: () => setNeutral(neutral + 1),
      },
      {
        text: "bad",
        value: bad,
        handleClick: () => setBad(bad + 1),
      },
    ],
  };

  return (
    <div>
      <Header feedback={feedback} />
      <Buttons feedback={feedback} />
      <Statistics feedback={feedback} />
    </div>
  );
};

export default App;
