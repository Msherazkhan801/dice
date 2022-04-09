import React, { useState } from 'react';
import "./App.css"
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
    <div className="container mx-auto m-8 flex">
      <div>
        <Dice isRolling={isRolling} rollValue={rollValue}/>
      </div>
      <div className="ml-4">
        <div>
          <button className="text-center w-32 border btn " disabled={isRolling} onClick={rollDice}>Throw dice</button>
        </div>
        <div>
          <p className="mt-2 text-center text-result">Last throw: {rollValue}</p>
        </div>
      </div>
    </div>
  )
}

const Dice = ({isRolling ,rollValue}) => (
  // <div className='panel'>
  <table className="border border-black rounded-md p-48  " >
    <tbody>
    {(!rollValue || rollValue === 1 ) && <React.Fragment >
      <tr >
        <Nothing/>
        <Nothing/>
        <Nothing/>
      </tr>
      <tr>
        <Nothing/>
        <Eye/>
        <Nothing/>
      </tr>
      <tr>
        <Nothing/>
        <Nothing/>
        <Nothing/>
      </tr>
      </React.Fragment>}
      {/* for 2 */}
     { ( rollValue === 2 ) && <React.Fragment>
      <tr>
        <Nothing/>
        <Nothing/>
        <Nothing/>
      </tr>
      <tr>
        <Eye/>
        <Nothing/>
        <Eye/>
      </tr>
      <tr>
        <Nothing/>
        <Nothing/>
        <Nothing/>
      </tr>
      </React.Fragment>}
        {/* for 3 */}
       { ( rollValue === 3 ) && <React.Fragment>
        <tr>
        <Nothing/>
        <Nothing/>
        <Nothing/>
      </tr>
      <tr>
        <Eye/>
        <Eye/>
        <Eye/>
      </tr>
      <tr>
        <Nothing/>
        <Nothing/>
        <Nothing/>
      </tr>  
      </React.Fragment>}
      {/* for 4 */}
     { ( rollValue === 4 ) && <React.Fragment>
      <tr>
        <Eye/>
        <Nothing/>
        <Eye/>
      </tr>
      <tr>
        <Nothing/>
        <Nothing/>
        <Nothing/>
      </tr>
      <tr>
        <Eye/>
        <Nothing/>
        <Eye/>
      </tr>  
      </React.Fragment>}
      {/* /////5//////// */}
  {  ( rollValue === 5 ) &&  <React.Fragment>
      <tr>
        <Eye/>
        <Nothing/>
        <Eye/>
      </tr>
      <tr>
        <Nothing/>
        <Eye/>
        <Nothing/>
      </tr>
      <tr>
        <Eye/>
        <Nothing/>
        <Eye/>
      </tr> 
      </React.Fragment>}
       {/* ///////6////// */}
     { ( rollValue === 6 ) && <React.Fragment>
      <tr>
        <Eye/>
        <Nothing/>
        <Eye/>
      </tr>
      <tr>
        <Eye/>
        <Nothing/>
        <Eye/>
      </tr>
      <tr>
        <Eye/>
        <Nothing/>
        <Eye/>
      </tr>  
      </React.Fragment>}
    </tbody>
  </table>
  // </div>
)

const Eye = () => (<td className="w-12 h-12 p-2"><div className="bg-black w-12 h-12 rounded-full">&nbsp;</div></td>);
const Nothing = () => (<td className="w-12 h-12 p-2"><div className="bg-white w-12 h-12 rounded-full">&nbsp;</div></td>);
