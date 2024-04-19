import React from 'react'
import Button1 from './calculatorButtons/Button1'

type Props = {}

export default function BasicCalculator({}: Props) {
  return (
    <div className='h-66 rounded-sm shadow-md bg-blue-200 px-3 py-3 calcuWidth1' >
        <section className='block w-full h-12 bg-blue-400 mb-3 flex justify-end items-center px-3'>
            <p className='text-xl'>95</p>
        </section>

        <div className='flex w-full justify-between mb-2'>
          <Button1 fontSize={"xl"}>Deg</Button1>
          <Button1 fontSize={"xl"}>Rad</Button1>
          <Button1>7</Button1>
          <Button1>8</Button1>
          <Button1>9</Button1>
          <Button1 fontSize={"xl"}>DEL</Button1>
          <Button1 fontSize={"xl"}>AC</Button1>
        </div>

        <div className='flex w-full justify-between mb-2'>
          <Button1>&pi;</Button1>
          <Button1 fontSize='xl'>sin</Button1>
          <Button1>4</Button1>
          <Button1>5</Button1>
          <Button1>6</Button1>
          <Button1 fontSize='3xl'>&#215;</Button1>
          <Button1 fontSize='3xl'>&#247;</Button1>
        </div>

        <div className='flex w-full justify-between mb-2'>
          <Button1 fontSize='xl'>Log</Button1>
          <Button1 fontSize='xl'>cos</Button1>
          <Button1>1</Button1>
          <Button1>2</Button1>
          <Button1>3</Button1>
          <Button1 fontSize={"3xl"}>+</Button1>
          <Button1 fontSize={"3xl"}>-</Button1>
        </div>

        <div className='flex w-full justify-between'>
          <Button1 fontSize={"xl"}>^</Button1>
          <Button1 fontSize={"xl"}>tan</Button1>
          <Button1>0</Button1>
          <Button1>.</Button1>
          <Button1>&#40;</Button1>
          <Button1>&#41;</Button1>
          <Button1 fontSize='3xl'>=</Button1>
        </div>
    </div>
  )
}