"use client"

import React, { useEffect, useState } from 'react'
import { GoArrowSwitch } from "react-icons/go";
import { getFactor, getFactorLength, lengthConverter, massConverter } from './libs/UnitConverterLib';

type Props = {}

export default function UnitConverter({}: Props) {
    // pQ = physical quantity
    const [pQ, setPQ] = useState("Length")
    const [openPQSelect, setOpenPQSelect] = useState(false)

    const [unit1, setUnit1] = useState("Meter")
    const [openUnit1Select, setOpenUnit1Select] = useState(false)

    const [unit2, setUnit2] = useState("Meter")
    const [openUnit2Select, setOpenUnit2Select] = useState(false)

    const [input1, setInput1] = useState("1")
    const [input2, setInput2] = useState("1")

    let factor = getFactor(pQ, unit1, unit2)

    // All possible variable value for pq, unit1, unit2
    const pqVals = ["Length", "Mass", "Time", "Speed", "Temperature"]
    const unitVals = {
        Length : ["Milimeter", "Centimeter", "Decimeter", "Meter", "Decameter", "Hectometer", "Kilometer"],
        Mass : ["Microgram","Miligram", "Centigram", "Decigram","Gram", "Decagram", "Hectogram", "Kilogram", "Metric Ton", "Stone", "Pound", "Ounce"],
        Time : ["Nanosecond", "Microsecond", "Milisecond", "Second", "Minute", "Hour", "Day", "Week", "Month", "Year", "Decade", "Century"]
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

    function convertUnit(inputValStr : string, inputFrom : string){
        
        const lastChar = inputValStr.at(-1)
        if(!/^\d$/.test(lastChar || 'a')){
            if(lastChar == "."){
                inputFrom == "1"
                    ? setInput1(inputValStr)
                    : setInput2(inputValStr)
            }else if(lastChar == undefined){
                setInput1("0")
                setInput2("0")
            }
            return
        }

        let inputVal : number = parseFloat(inputValStr)
        if(isNaN(inputVal)){
            inputVal = 0
        }

        let output;
        if(inputFrom == "1"){
            setInput1(inputVal.toString())
            switch(pQ){
                case "Length":
                    output = lengthConverter(inputVal, unit1, unit2)
                    setInput2(output.toString())
                    break;
                case "Mass":
                    output = massConverter(inputVal, unit1, unit2)
                    setInput2(output.toString())
                    break;
                }
        }else{
            setInput2(inputVal.toString())
            switch(pQ){
                case "Length":
                    output = lengthConverter(inputVal, unit2, unit1)
                    setInput1(output.toString())
                    break;
                case "Mass":
                    output = massConverter(inputVal, unit2, unit1)
                    setInput1(output.toString())
                    break;
            }
        }
    }

    useEffect(() => {
        // Refresh Calculation
        convertUnit(input1, "1")
    }, [unit1])
    
    useEffect(() => {
        // Refresh Calculation
        convertUnit(input2, "2")
    }, [unit2])

    useEffect(() => {
        setInput1("1")
        setInput2("1")
        setUnit1(curUnitVals[0])
        setUnit2(curUnitVals[0])
    }, [pQ])

    
  return (
    <div className='min-h-40 bg-blue-300 w-10/12 mt-5 p-5 rounded-md'>
        <div>
            <button className='px-3 py-1 w-36 rounded-md border border-black flex justify-between items-center bg-blue-200' onClick={() => setOpenPQSelect(prev => !prev)}>
                <p>{pQ}</p>
                <p>&#8595;</p>
            </button>
            {openPQSelect &&
                <div className='w-36 absolute z-30 bg-blue-300'>
                    {
                        pqVals.map(val => (
                            <button className='border-b border-x border-black w-36 rounded-md hover:bg-blue-100 text-sm p-0.5' key={val} onClick={() => {
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
                <input type="text" className='w-36 rounded-md border border-black px-2 focus:outline-none' value={input1} onChange={(e) => convertUnit(e.target.value, "1")}  />

                <button className='px-3 py-1 w-36 rounded-md border border-black flex justify-between items-center bg-blue-200' onClick={() => setOpenUnit1Select(prev => !prev)}>
                        <p>{unit1}</p>
                        <p>&#8595;</p>
                </button>
                {openUnit1Select &&
                    <div className='w-36 absolute z-10 bg-blue-200'>
                        {curUnitVals.map(val => (
                            <button className='border-b border-x border-black w-36 rounded-md hover:bg-blue-100 text-sm p-0.5' key={val} onClick={() => {
                                setUnit1(val)
                                setOpenUnit1Select(p => !p)
                            }}>{val}</button>
                        ))}
                    </div>
                }

                
            </div>

            <GoArrowSwitch className='text-2xl' />

            <div>
                <input type="text" className='w-36 rounded-md border border-black px-2 focus:outline-none' value={input2} onChange={(e) => convertUnit(e.target.value, "2")}  />

                <button className='px-3 py-1 w-36 rounded-md border border-black flex justify-between items-center bg-blue-200' onClick={() => setOpenUnit2Select(prev => !prev)}>
                        <p>{unit2}</p>
                        <p>&#8595;</p>
                </button>
                {openUnit2Select &&
                    <div className='w-36 absolute z-10 bg-blue-200'>
                        {curUnitVals && curUnitVals.map(val => (
                            <button className='border-b border-x border-black w-36 rounded-md hover:bg-blue-100 text-sm p-0.5' key={val} onClick={() => {
                                setUnit2(val)
                                setOpenUnit2Select(p => !p)
                            }}>{val}</button>
                        ))}
                    </div>
                }
            </div>


        </div>

        <p className='mt-7 bg-blue-200 px-2 rounded-md border border-black'>
            Formula : 1 {unit1} = {factor} {unit2}
        </p>

    </div>
  )
}