"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {}

export default function BottomNav({}: Props) {
    const pathName = usePathname()

  return (
    <section className='mt-10 '>
        <p className="ml-3 mb-2 text-lg">Other Calculators</p>
        <div className="border-t border-t-black px-3 py-3 flex flex-wrap">
            
            <Link href={'/'} className={`mr-10 ${pathName == '/' ? 'text-blue-900' : 'text-blue-500'} hover:text-blue-900`}>Basic Calculator</Link>

            <Link href={'/unit-converter'} className={`mr-10 ${pathName == '/unit-converter' ? 'text-blue-900' : 'text-blue-500'} hover:text-blue-900`}>Unit Converter</Link>
        </div>
    </section>
  )
}