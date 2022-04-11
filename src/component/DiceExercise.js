import React, { useState } from 'react';
import "../App.css"
import DiceLayout from './Dice';
export default function App()  {
  const [isRolling, setIsRolling]=useState(false)
  const [rollValue, setRollValue]=useState(null)

  const rollDice= () =>{
    setRollValue(null);
    setIsRolling(true);
    
setTimeout(()=>{
  const newValue = Math.floor(Math.random() * 6) + 1;
  setRollValue(newValue)
  setIsRolling(false)
},3000)


  }
  return (
    <div className="container mx-auto m-8   my-20px">
      <div className='mx-auto'>
        <DiceLayout isRolling={isRolling} rollValue={rollValue}/>
      </div>
      <div className="ml-4">
        <div>
          <button className="text-center w-32 border btn  my-5" disabled={isRolling} onClick={rollDice}>Throw dice</button>
        </div>
          <p className="">Last throw: {rollValue}</p>
        <div>
        </div>
      </div>
    </div>
  )
}

