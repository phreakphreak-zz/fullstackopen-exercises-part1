import React, { useState } from "react";

const Button = ({ stat }) => {
  const { handleClick, text } = stat;
  return <button onClick={handleClick}>{text}</button>;
};
const Buttons = ({ feedback }) => {
  const [good, neutral, bad] = feedback.statesFeedback;
  return (
    <div>
      <Button stat={good} />
      <Button stat={neutral} />
      <Button stat={bad} />
    </div>
  );
};

const Statistic = ({ stat }) => {
  const { text, value } = stat;
  let paragraph = text ==="positive"?`${text}: ${value}%`:`${text}: ${value}`
  return (
    <p>
      {paragraph}
    </p>
  );
};
const Statistics = ({ feedback }) => {
  const [good, neutral, bad, all, average, positive] = feedback.statesFeedback;
  if (all.value > 0) {
    return (
      <div>
        <h1>{feedback.titleStatistics}</h1>
        <Statistic stat={good} />
        <Statistic stat={neutral} />
        <Statistic stat={bad} />
        <Statistic stat={all} />
        <Statistic stat={average} />
        <Statistic stat={positive} />
      </div>
    ); 
  } else {
    return (
      <div>
        <h1>{feedback.titleStatistics}</h1>
        <p>no given feedback</p>
      </div>
    );
  }
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
            positive:(100*(good+1))/(stats.all+1)
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
            positive:(100*(good))/(stats.all+1)
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
            positive:(100*(good))/(stats.all+1)
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
