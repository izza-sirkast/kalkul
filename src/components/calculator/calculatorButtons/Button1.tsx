"use client"

import React, { SetStateAction } from 'react'
import { evaluate } from 'mathjs'

type Props = {
    children: React.ReactNode,
    fontSize?: string,
    setDisplay?: React.Dispatch<SetStateAction<string>>,
    displayRef?: any,
    degrad? : string,
    setDegrad? : React.Dispatch<SetStateAction<string>>,
    calculateResult? : (inputFormula : string) => string
}

export default function Button1({children, fontSize = "2xl", setDisplay, displayRef, degrad, setDegrad, calculateResult}: Props) {

    // function calculateResult(inputFormula : string) : string{
    //   const formula = inputFormula.replace(/\s/g, '')
    //   let sanitizedFormula = ""
    //   for(let i = 0; i < formula.length; i++){
    //     if(
    //         (formula[i] == 's' && formula[i+1] == 'i' && formula[i+2] == 'n') ||
    //         (formula[i] == 'c' && formula[i+1] == 'o' && formula[i+2] == 's') ||
    //         (formula[i] == 't' && formula[i+1] == 'a' && formula[i+2] == 'n')
    //       ){
          
    //       let j = i+4
    //       let triVal = ''
    //       while(!isNaN(parseInt(formula[j]))){
    //         triVal += formula[j]
    //         j++
    //       }

    //       if(degrad == "Rad"){
    //         const piVal = formula[j] == 'π' ? Math.PI : 1
    //         triVal = (parseInt(triVal) * piVal * 180 / Math.PI).toLocaleString()
    //       }

    //       sanitizedFormula += formula[i] + formula[i+1] + formula[i+2] + '(' + triVal + 'deg' + ')'

    //       i = sanitizedFormula.length - 1
    //     }else{
    //       sanitizedFormula += formula[i]
    //     }
    //   }
    //   console.log(sanitizedFormula)
    //   return evaluate(sanitizedFormula).toLocaleString()
    // }

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

          case "=":
            calculateResult &&
            setDisplay(lastDisplay => {
              try {
                return calculateResult(lastDisplay)
              } catch (error) {
                return "error"
              }
            })   
            displayRef.focus()
            setTimeout(() => {
              displayRef.setSelectionRange(-1, -1)
            }, 0)
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