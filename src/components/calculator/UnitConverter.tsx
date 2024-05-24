"use client"

import React, { useState } from 'react'

type Props = {}

export default function UnitConverter({}: Props) {
    const [unit, setUnit] = useState("length")
    const [openUnitSelect, setOpenUnitSelect] = useState(false)

  return (
    <div className=''>
        <div>
            <button className='px-3 py-1 w-36 rounded-md border border-black flex justify-between items-center' onClick={() => setOpenUnitSelect(prev => !prev)}>
                <p>{unit}</p>
                <p>&#8595;</p>
            </button>
            {openUnitSelect &&
            <div className='flex flex-row'>
                <button>Length</button>
            </div>
            }
        </div>

    </div>
  )
}