import React from 'react'
import { LargeButton, MediumButton, SmallButton } from '@Atoms/buttons'
import { LargeInput, MediumInput, SmallInput } from '@Atoms/inputs'

const Btn1 = LargeButton
const Btn2 = MediumButton
const Btn3 = SmallButton
const Input1 = LargeInput
const Input2 = MediumInput
const Input3 = SmallInput

function Collections() {
  return (
    <div>
      <Btn1></Btn1>
      <br/>
      <Btn2></Btn2>
      <br/>
      <Btn3></Btn3>
      <br/>
      <Input1></Input1>
      <br/>
      <Input2></Input2>
      <br/>
      <Input3></Input3>
      <br/>
    </div>
  )
}

export default Collections
