import React from 'react'

type Props = {
    children: React.ReactNode,
    fontSize?: string
}

export default function Button1({children, fontSize = "2xl"}: Props) {
  return (
    <div className={`bg-blue-300 w-12 h-10 flex justify-center items-center text-${fontSize} border border-blue-400 cursor-pointer hover:bg-blue-400`}>
        {children}
    </div>
  )
}