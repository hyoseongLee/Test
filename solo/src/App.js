import React, { useState } from 'react';
import Box from './component/Box';
import "./App.css";

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdvXfD0TgJwe39QnYRVeFxPCp21S7E8BX9w&s"
  },
  scissor: {
    name: "Scissor",
    img: "https://image.utoimage.com/preview/cp868706/2016/12/201612001091_500.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://cdn.crowdpic.net/detail-thumb/thumb_d_BD030450290C2E8F769E16352FDFF090.jpg"
  }
};



function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result,setResult] = useState ("");

  const play = (userchoice) => {
    setUserSelect(choice[userchoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgment(choice[userchoice],computerChoice))
  };

const randomChoice = () => {
  let itemArray = Object.keys(choice);
  let randomItem = Math.floor(Math.random() * itemArray.length);
  let final = itemArray[randomItem];
  return choice[final];
};

  const judgment = (user,computer) => {
    if (user.name === computer.name) { return "Tie"} 
    else if (user.name === "Rock") return computer.name === "Scissor" ? "win" : "lose";
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
    else if (user.name === "Scissor") return computer.name === "Paper" ? "win" : "lose";
  };

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className='main'>
        <button onClick={() => play("scissor")}> Scissor </button>
        <button onClick={() => play("rock")}> Rock </button>
        <button onClick={() => play("paper")}> Paper </button>
      </div>
    </div>
  )
};

export default App;
