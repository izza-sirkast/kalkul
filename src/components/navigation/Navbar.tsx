import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='flex sticky w-full top-0  px-2 py-1 border-b border-black'>
        <h1 className='block text-2xl'>Kalkul</h1>
    </nav>
  )
}