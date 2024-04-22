"use client"

import React, { SetStateAction } from 'react'

type Props = {
    children: React.ReactNode,
    fontSize?: string,
    setDisplay?: React.Dispatch<SetStateAction<string>>,
    displayRef?: any,
    degrad? : string,
    setDegrad? : React.Dispatch<SetStateAction<string>>
}

export default function Button1({children, fontSize = "2xl", setDisplay, displayRef, degrad, setDegrad}: Props) {

    function buttonHandler(){
      const val = children?.toLocaleString()
      const caretPos = displayRef.selectionStart

      if(val == 'Deg' || val == 'Rad'){
        setDegrad && setDegrad(lastDegrad => val)
      }

      if(setDisplay){
        switch(val){
          case "AC":
            setDisplay(lastDisplay => "")
            displayRef.focus()
            break
          case "DEL":
            const lastFirstSection = caretPos - 1 >= 0 ? caretPos - 1 : 0
            setDisplay(lastDisplay => lastDisplay.slice(0, lastFirstSection) + lastDisplay.slice(caretPos, lastDisplay.length))
            displayRef.focus()
            setTimeout(() => {
              displayRef.setSelectionRange(lastFirstSection, lastFirstSection)
            }, 0)
            break
          case "sin":
          case "cos":
          case "tan":
          case "log":
            val && setDisplayAndCaret(val + '()', true)
            break          
          default:
            val && setDisplayAndCaret(val, false)
            break            
        }
      }
    }

    function setDisplayAndCaret(input:string, inParenthesis:boolean){
      const caretPos = displayRef.selectionStart
      if(setDisplay){
        setDisplay(lastDisplay => {
          return lastDisplay.slice(0,caretPos) + input + lastDisplay.slice(caretPos,lastDisplay.length) 
        })
      }
      displayRef.focus()
      setTimeout(() => {
        inParenthesis 
          ? displayRef.setSelectionRange(caretPos + 4, caretPos + 4)
          : displayRef.setSelectionRange(caretPos + 1, caretPos + 1)
      }, 0)

    }

  let bgColor;
  if((children == 'Deg' && degrad == 'Deg') || (children == 'Rad' && degrad == 'Rad')){
    bgColor = 'bg-blue-400'
  }else{
    bgColor = 'bg-blue-300'
  }

  return (
    <button onClick={buttonHandler} className={`${bgColor} w-12 h-10 flex justify-center items-center text-${fontSize} border border-blue-400 cursor-pointer hover:bg-blue-400`}>
        {children}
    </button>
  )
}