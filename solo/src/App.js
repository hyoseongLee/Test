import React,{useState} from 'react';
import Box from './component/Box';
import "./App.css";

const choice = {
  rock: {
    name: "Rock",
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg'
  },
  scissor: {
    name: "scissor",
    img: 'https://m.labcampus.com/web/product/big/202402/c28ab7971898c3516276bc4a2ad9ed2c.jpg'
  },
  paper: {
    name: "paper",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRms-3phGV5vsZxM4mUIn0V8MxJfAfPvsC7yw&s'
  }
};

function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
  };

  const randomChoice=()=> {
    let itemArray = Object.keys(choice); /** 객체에 키 값만 뽑아서 어레이로 만들어주는 함수다. */
    let randomItem = Math.floor(Math.random()*itemArray.length); /**Math.floor는 소수 앞자리 제외 버리는 함수. */
    let final = itemArray[randomItem]
    return choice[final];
  };

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect}/>
        <Box title="computer" item={computerSelect} />
      </div>
      <div className='main'>
        <button onClick={() => play("scissor")}> scissor </button>
        <button onClick={() => play("rock")}> rock</button>
        <button onClick={() => play("paper")} >paper</button>
      </div>
    </div>
  )
}

export default App;