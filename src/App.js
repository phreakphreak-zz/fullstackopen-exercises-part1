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
      {text}: {value}
    </p>
  );
};
const Statistics = ({ feedback }) => {
  const [good, neutral, bad, all, average, positive] = feedback.statesFeedback;
  return (
    <div>
      <h1>{feedback.titleStatistics}</h1>
      <Statistic type={good} />
      <Statistic type={neutral} />
      <Statistic type={bad} />
      <Statistic type={all} />
      <Statistic type={average} />
      <Statistic type={positive} />
    </div>
  );
};

const Header = ({ feedback }) => <h1>{feedback.titleHeader}</h1>;

const App = () => {
  const [stats, setStats] = useState({
    all: 0,
    average: 0,
    positive: 0,
  });
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
        handleClick: () => {
          setStats({
            all: stats.all + 1,
            average: (stats.all + 1) / 3,
            positive: (100 / (stats.all + 1)) * good,
          });
          setGood(good + 1);
        },
      },
      {
        text: "neutral",
        value: neutral,
        handleClick: () => {
          setStats({
            all: stats.all + 1,
            average: (stats.all + 1) / 3,
            positive: (100 / (stats.all + 1)) * good,
          });
          setNeutral(neutral + 1);
        },
      },
      {
        text: "bad",
        value: bad,
        handleClick: () => {
          setStats({
            all: stats.all + 1,
            average: (stats.all + 1) / 3,
            positive: (100 / (stats.all + 1)) * good,
          });
          setBad(bad + 1);
        },
      },
      {
        text: "all",
        value: stats.all,
      },
      {
        text: "average",
        value: stats.average,
      },
      {
        text: "positive",
        value: stats.positive,
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
