"use client"

import React, { useEffect, useState } from 'react'
import { GoArrowSwitch } from "react-icons/go";
import { lengthConverter, massConverter } from './libs/UnitConverterLib';

type Props = {}

export default function UnitConverter({}: Props) {
    // pQ = physical quantity
    const [pQ, setPQ] = useState("Length")
    const [openPQSelect, setOpenPQSelect] = useState(false)

    const [unit1, setUnit1] = useState("Meter")
    const [openUnit1Select, setOpenUnit1Select] = useState(false)

    const [unit2, setUnit2] = useState("Centimeter")
    const [openUnit2Select, setOpenUnit2Select] = useState(false)

    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)


    // All possible variable value for pq, unit1, unit2
    const pqVals = ["Length", "Mass", "Time", "Speed", "Temperature"]
    const unitVals = {
        Length : ["Milimeter", "Centimeter", "Decimeter", "Meter", "Decameter", "Hectometer", "Kilometer"],
        Mass : ["Microgram","Miligram", "Centigram", "Decigram","Gram", "Decagram", "Hectogram", "Kilogram", "Metric Ton", "Stone", "Pound", "Ounce"],
        Time : ["Nanosecond", "Microsecond", "Milisecond", "Second", "Minute", "Hour", "Day", "Week", "Month", "Year", "Decade"]
    }
    
    let curUnitVals : string[] = [""];
    switch(pQ){
        case "Length":
            curUnitVals = unitVals.Length
            break
        case "Mass":
            curUnitVals = unitVals.Mass
            break
        case "Time":
            curUnitVals = unitVals.Time
            break
    }

    function convertUnit(inputVal : number, inputFrom : string){
        setInput1(inputVal)

        let output;
        if(inputFrom == "1"){
            switch(pQ){
                case "Length":
                    output = lengthConverter(inputVal, unit1, unit2)
                    setInput2(output as number)
                    break;
                case "Mass":
                    output = massConverter(inputVal, unit1, unit2)
                    setInput2(output as number)
                    break;
            }
        }else{
            switch(pQ){
                case "Length":
                    output = lengthConverter(inputVal, unit2, unit1)
                    setInput1(output as number)
                    break;
                case "Mass":
                    output = massConverter(inputVal, unit2, unit1)
                    setInput1(output as number)
                    break;
            }
        }
    }

    useEffect(() => {
        // Refresh Calculation
        convertUnit(input2, "2")
    }, [unit1])
    
    useEffect(() => {
        // Refresh Calculation
        convertUnit(input1, "1")
    }, [unit2])

    useEffect(() => {
        setInput1(0)
        setInput2(0)
        setUnit1(curUnitVals[0])
        setUnit2(curUnitVals[0])
    }, [pQ])

  return (
    <div className='min-h-80 bg-blue-100 w-10/12 mt-5 p-5 rounded-md'>
        <div>
            <button className='px-3 py-1 w-36 rounded-md border border-black flex justify-between items-center' onClick={() => setOpenPQSelect(prev => !prev)}>
                <p>{pQ}</p>
                <p>&#8595;</p>
            </button>
            {openPQSelect &&
                <div className='w-36 absolute z-30 bg-blue-200'>
                    {
                        pqVals.map(val => (
                            <button className='border-b border-x border-black w-36 rounded-md hover:bg-blue-100 text-sm p-0.5' onClick={() => {
                                setPQ(val)
                                setOpenPQSelect(p => !p)
                            }}>{val}</button>
                        ))
                    }
                </div>
            }
        </div>

        <div className='flex mt-5 justify-between items-center'>
            <div>
                <input type="number" className='w-36 rounded-md border border-black px-2 focus:outline-none' value={input1} onChange={(e) => convertUnit(parseInt(e.target.value), "1")}  />

                <button className='px-3 py-1 w-36 rounded-md border border-black flex justify-between items-center' onClick={() => setOpenUnit1Select(prev => !prev)}>
                        <p>{unit1}</p>
                        <p>&#8595;</p>
                </button>
                {openUnit1Select &&
                    <div className='w-36 absolute z-10 bg-blue-200'>
                        {curUnitVals.map(val => (
                            <button className='border-b border-x border-black w-36 rounded-md hover:bg-blue-100 text-sm p-0.5' onClick={() => {
                                setUnit1(val)
                                setOpenUnit1Select(p => !p)
                            }}>{val}</button>
                        ))}
                    </div>
                }

                
            </div>

            <GoArrowSwitch className='text-2xl' />

            <div>
                <input type="number" className='w-36 rounded-md border border-black px-2 focus:outline-none' value={input2} onChange={(e) => convertUnit(parseInt(e.target.value), "2")}  />

                <button className='px-3 py-1 w-36 rounded-md border border-black flex justify-between items-center' onClick={() => setOpenUnit2Select(prev => !prev)}>
                        <p>{unit2}</p>
                        <p>&#8595;</p>
                </button>
                {openUnit2Select &&
                    <div className='w-36 absolute z-10 bg-blue-200'>
                        {curUnitVals && curUnitVals.map(val => (
                            <button className='border-b border-x border-black w-36 rounded-md hover:bg-blue-100 text-sm p-0.5' onClick={() => {
                                setUnit2(val)
                                setOpenUnit2Select(p => !p)
                            }}>{val}</button>
                        ))}
                    </div>
                }

            </div>

        </div>

    </div>
  )
}