import React from 'react'
import "../../App.css"
import DiceFace from '../DiceFace';
const DiceLayout = ({isRolling ,rollValue}) => {
  return (
      <div className='mx-auto bg'>
        <table className="border border-black rounded-md p-48  " >
            <DiceFace rollValue={rollValue}  />
        </table>
     </div>
  )
}

export default DiceLayout