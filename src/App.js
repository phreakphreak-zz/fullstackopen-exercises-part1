import React, { useState } from "react";

const Button = ({ handlerClick, text }) => {
  return <button onClick={handlerClick}>{text}</button>;
};

const Anecdote = ({ title, text, vote }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <p> has {vote} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [selected, setSelected] = useState(0);

  const [anecdoteMostVotes, setAnecdoteMostVotes] = useState({
    text: anecdotes[0],
    votes: votes[0],
  });
  const handlerClickSelected = () => {
    let element = Math.round(Math.random() * (anecdotes.length - 1)).toFixed(0);
    //console.log("element: ", element);
    return setSelected(element);
  };

  const getMostVotes = (votes) => {
    let arr = Object.values(votes);
    let maxValue = Math.max(...arr);
    for (let [key, value] of Object.entries(votes)) {
      if (value === maxValue) {
        return {
          text: anecdotes[key],
          votes: value,
        };
      }
    }
  };
  const handlerClickVotes = () => {
    const newVotes = {
      ...votes,
      [selected]: votes[selected] + 1,
    };
    setAnecdoteMostVotes(getMostVotes(newVotes));
    setVotes(newVotes);
  };

  return (
    <div>
      <Anecdote
        title={"Anecdote of the day"}
        text={anecdotes[selected]}
        vote={votes[selected]}
      />
      {/* exercises 1.13 */}
      <Button text={"vote"} handlerClick={handlerClickVotes} />
      <Button text={"next phrase"} handlerClick={handlerClickSelected} />
      <Anecdote
        title={"Anecdote with most votes"}
        text={anecdoteMostVotes.text}
        vote={anecdoteMostVotes.votes}
      />
    </div>
  );
};

export default App;
