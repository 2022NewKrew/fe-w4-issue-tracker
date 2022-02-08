import React from 'react'
import { LargeButton, MediumButton, SmallButton } from '@Components/UI/atoms/buttons'

const Btn1 = LargeButton
const Btn2 = MediumButton
const Btn3 = SmallButton

function Collections() {
  return (
    <div>
      <Btn1></Btn1>
      <br/>
      <Btn2></Btn2>
      <br/>
      <Btn3></Btn3>
    </div>
  )
}

export default Collections
