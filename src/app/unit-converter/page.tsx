import React from 'react'
import UnitConverter from '@/components/calculator/UnitConverter'

type Props = {}

export default function UnitConverterPage({}: Props) {
  return (
    <section className="flex w-full py-5 justify-center">
        <UnitConverter />
    </section>
  )
}