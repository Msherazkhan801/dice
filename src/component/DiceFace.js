import React from 'react'
import {Eye} from "./Constant_Layout/index"
function DiceFace({rollValue}) {
   
  return (
    <tr>
        {
            Array(rollValue).fill(null).map(item => {
                return <Eye />
       
            })
        }
    </tr>
  )
}

export default DiceFace