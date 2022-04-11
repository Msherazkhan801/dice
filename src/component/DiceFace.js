import React from 'react'

function DiceFace({rollValue}) {
    const Eye = () => (<td className="w-12 h-12 p-2"><div className="bg-black w-12 h-12 rounded-full">&nbsp;</div></td>);
    const Nothing = () => (<td className="w-12 h-12 p-2"><div className="bg-white w-12 h-12 rounded-full">&nbsp;</div></td>);
    
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