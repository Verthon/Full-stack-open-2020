import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
  const [mostVotedIndex, setMostVotedIndex] = useState(0)

  const findMostVoted = (arr, value) => {
    return arr.findIndex(element => element === value)
  }

  const largestNumber = (data) => {
    return data.reduce((acc, current) => {
      return current > acc ? current : acc;
    }, 0);
  };
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  const onVote = (index) => {
    setMostVotedIndex(findMostVoted(votes, largestNumber(votes)))
    const data = [...votes];
    data[index] += 1;
    setVotes(data);
  };
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => onVote(selected)}>vote</button>
      <button onClick={() => setSelected(getRandomInt(anecdotes.length - 1))}>
        next anecdote
      </button>

      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVotedIndex]}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
