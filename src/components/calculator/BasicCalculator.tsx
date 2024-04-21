"use client"

import React, { ReactHTMLElement, useEffect, useState, useRef } from 'react'
import Button1 from './calculatorButtons/Button1'

type Props = {}

export default function BasicCalculator({}: Props) {
  const [display, setDisplay] = useState("")
  const displayRef = useRef<HTMLInputElement>(null)

  function inputHandler(input : React.ChangeEvent<HTMLInputElement>){
    setDisplay(input.target.value)
  }

  function focusInput(){
    displayRef.current?.focus()
  }

  // function changeCaretPos(inParenthesis : boolean){
  //   displayRef.current?.focus();
  //   if(inParenthesis){
  //     setTimeout(() => {
  //       if (displayRef.current !== null && displayRef.current.selectionStart !== null) {
  //         const caretPos = displayRef.current.selectionStart - 1
  //         displayRef.current.setSelectionRange(caretPos, caretPos);
  //         }
  //     }, 0);
  //   }
  // }
  

  return (
    <div className='h-66 rounded-sm shadow-md bg-blue-200 px-3 py-3 calcuWidth1' >
        <section className='block w-full h-12 bg-blue-400 mb-3 flex justify-end items-center px-3'>
            <input className='text-xl text-right bg-blue-400 outline-none w-full' value={display} onChange={(e) => inputHandler(e)} ref={displayRef} />
        </section>

        <div className='flex w-full justify-between mb-2'>
          <Button1 fontSize={"xl"} displayRef={displayRef.current}>Deg</Button1>
          <Button1 fontSize={"xl"} displayRef={displayRef.current}>Rad</Button1>
          <Button1 setDisplay={setDisplay} focusInput={focusInput} displayRef={displayRef.current}>7</Button1>
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
          <Button1 fontSize='2xl' setDisplay={setDisplay} displayRef={displayRef.current}>&#215;</Button1>
          <Button1 fontSize='2xl' setDisplay={setDisplay} displayRef={displayRef.current}>&#247;</Button1>
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
          <Button1 fontSize='2xl' displayRef={displayRef.current}>=</Button1>
        </div>
    </div>
  )
}