import React from 'react';

const Box = (props) => {
  let resultMessage;
  // 컴퓨터가 승/패/비김에 따른 결과 처리
  if (props.result === "win") {
    resultMessage = props.title === "You" ? "You Win!" : "Computer Lose!";
  } else if (props.result === "lose") {
    resultMessage = props.title === "You" ? "You Lose!" : "Computer Win!";
  } else if (props.result === "tie") {
    resultMessage = "It's a Tie!";
  } else {
    resultMessage = "";
  }

  return (
    <div className={`box ${props.result}`}>
      <h1>{props.title}</h1>
      <h2 data-testid="item-name">{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} alt={props.item?.name} />
      <h2>{resultMessage}</h2>
    </div>
  );
};

export default Box;
