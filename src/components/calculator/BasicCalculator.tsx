"use client"

import React, { ReactHTMLElement, useEffect, useState, useRef } from 'react'
import Button1 from './calculatorButtons/Button1'

import { evaluate } from 'mathjs'

type Props = {}

export default function BasicCalculator({}: Props) {
  const [display, setDisplay] = useState("")
  const [degrad, setDegrad] = useState("Deg")
  const [rerender, setRerender] = useState("")

  const displayRef = useRef<HTMLInputElement>(null)

 useEffect(() => {
    displayRef.current?.focus()
    setRerender(r => r+"rerender")
 }, [])

 const handleKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
  if(e.key == 'Enter'){
    e.preventDefault()
    setDisplay(lastDisplay => {
      return calculateResult(lastDisplay)
    })
  }
 } 

 function calculateResult(inputFormula : string) : string{
  const formula = inputFormula.replace(/\s/g, '')
  let sanitizedFormula = ""
  for(let i = 0; i < formula.length; i++){
    if(
        (formula[i] == 's' && formula[i+1] == 'i' && formula[i+2] == 'n') ||
        (formula[i] == 'c' && formula[i+1] == 'o' && formula[i+2] == 's') ||
        (formula[i] == 't' && formula[i+1] == 'a' && formula[i+2] == 'n')
      ){
      
      let j = i+4
      let triVal = ''
      while(!isNaN(parseInt(formula[j]))){
        triVal += formula[j]
        j++
      }

      if(degrad == "Rad"){
        const piVal = formula[j] == 'π' ? Math.PI : 1
        triVal = (parseInt(triVal) * piVal * 180 / Math.PI).toLocaleString()
      }

      sanitizedFormula += formula[i] + formula[i+1] + formula[i+2] + '(' + triVal + 'deg' + ')'

      i = sanitizedFormula.length - 1
    }else{
      sanitizedFormula += formula[i]
    }
  }
  return evaluate(sanitizedFormula).toLocaleString()
}

  return (
    <div className='h-66 rounded-sm shadow-md bg-blue-200 px-3 py-3 calcuWidth1' >
        <section className='w-full h-12 bg-blue-400 mb-3 flex justify-end items-center px-3'>
            <input className='text-xl text-right bg-blue-400 outline-none w-full' id="calc-display" value={display} onChange={(e) => setDisplay(e.target.value)} ref={displayRef} onKeyDown={handleKeyPress} />
        </section>

        <div className='flex w-full justify-between mb-2'>
          <Button1 fontSize={"xl"} displayRef={displayRef.current} degrad={degrad} setDegrad={setDegrad}>Deg</Button1>
          <Button1 fontSize={"xl"} displayRef={displayRef.current} degrad={degrad} setDegrad={setDegrad}>Rad</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>7</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>8</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>9</Button1>
          <Button1 fontSize={"xl"} setDisplay={setDisplay} displayRef={displayRef.current}>DEL</Button1>
          <Button1 fontSize={"xl"} setDisplay={setDisplay} displayRef={displayRef.current}>AC</Button1>
        </div>

        <div className='flex w-full justify-between mb-2'>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>&pi;</Button1>
          <Button1 fontSize='xl' setDisplay={setDisplay} displayRef={displayRef.current}>sin</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>4</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>5</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>6</Button1>
          <Button1 fontSize='2xl' setDisplay={setDisplay} displayRef={displayRef.current}>*</Button1>
          <Button1 fontSize='2xl' setDisplay={setDisplay} displayRef={displayRef.current}>/</Button1>
        </div>

        <div className='flex w-full justify-between mb-2'>
          <Button1 fontSize='xl' setDisplay={setDisplay} displayRef={displayRef.current}>log</Button1>
          <Button1 fontSize='xl' setDisplay={setDisplay} displayRef={displayRef.current}>cos</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>1</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>2</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>3</Button1>
          <Button1 fontSize={"2xl"} setDisplay={setDisplay} displayRef={displayRef.current}>+</Button1>
          <Button1 fontSize={"2xl"} setDisplay={setDisplay} displayRef={displayRef.current}>-</Button1>
        </div>

        <div className='flex w-full justify-between'>
          <Button1 fontSize={"xl"} setDisplay={setDisplay} displayRef={displayRef.current}>^</Button1>
          <Button1 fontSize={"xl"} setDisplay={setDisplay} displayRef={displayRef.current}>tan</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>0</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>.</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>&#40;</Button1>
          <Button1 setDisplay={setDisplay} displayRef={displayRef.current}>&#41;</Button1>
          <Button1 fontSize='2xl' setDisplay={setDisplay} displayRef={displayRef.current} degrad={degrad} calculateResult={calculateResult}>=</Button1>
        </div>
    </div>
  )
}