import React, { useCallback, useEffect, useMemo, useState } from 'react'
import './Assets/Styles/reset.css'
import TextArea from './Components/Common/Input/TextArea'
import Button, { BUTTON_SIZE, BUTTON_TYPE } from './Components/Common/Button/Button'
import TextInput, { TEXT_INPUT_STATE, TEXT_INPUT_TYPE } from './Components/Common/Input/TextInput'
import ColorCodeInput from './Components/Common/Input/ColorCodeInput'
import styled from 'styled-components'
import { ReactComponent as PlusIcon } from './Assets/Icon/ic-plus.svg'

const BigDiv = styled.div`
  width: 300px;
  height: 300px;
`

const App = () => {
  return (
    <>
      <Button
        type={ BUTTON_TYPE.STANDARD }
        size={ BUTTON_SIZE.LARGE }
        text="LARGE STANDARD"
        onClickListener={ () => {
          console.log('clicked')
        } } />
      <Button
        type={ BUTTON_TYPE.STANDARD }
        size={ BUTTON_SIZE.LARGE }
        text="LARGE STANDARD DISABLE"
        isDisabled
        onClickListener={ () => {
          console.log('clicked')
        } } />
      <Button
        type={ BUTTON_TYPE.STANDARD }
        size={ BUTTON_SIZE.MEDIUM }
        text="MEDIUM STANDARD"
        onClickListener={ () => {
          console.log('clicked')
        } } />
      <Button
        type={ BUTTON_TYPE.STANDARD }
        size={ BUTTON_SIZE.SMALL }
        text="SMALL STA"
        Icon={ PlusIcon }
        onClickListener={ () => {
          console.log('clicked')
        } } />
      <Button
        type={ BUTTON_TYPE.SECONDARY }
        size={ BUTTON_SIZE.SMALL }
        text="SMALL SEC"
        Icon={ PlusIcon }
        onClickListener={ () => {
          console.log('clicked')
        } } />
      <Button
        type={ BUTTON_TYPE.TEXT }
        size={ BUTTON_SIZE.MEDIUM }
        text="MEDIUM TEXT"
        Icon={ PlusIcon }
        isRightIcon
        onClickListener={ () => {
          console.log('clicked')
        } } />
      <Button
        type={ BUTTON_TYPE.TEXT }
        size={ BUTTON_SIZE.SMALL }
        text="SMALL TEXT"
        Icon={ PlusIcon }
        isRightIcon
        onClickListener={ () => {
          console.log('clicked')
        } } />
      <TextInput type={ TEXT_INPUT_TYPE.LARGE }
                 state={ TEXT_INPUT_STATE.NORMAL }
                 placeholder="아이디"
                 onInputValueChangeListener={ () => {
                   console.log('change')
                 } } />
      <TextInput type={ TEXT_INPUT_TYPE.LARGE }
                 state={ TEXT_INPUT_STATE.SUCCESS }
                 placeholder="아이디"
                 onInputValueChangeListener={ () => {
                   console.log('change')
                 } } />
      <TextInput type={ TEXT_INPUT_TYPE.LARGE }
                 state={ TEXT_INPUT_STATE.ERROR }
                 placeholder="아이디"
                 onInputValueChangeListener={ () => {
                   console.log('change')
                 } } />
      <TextInput type={ TEXT_INPUT_TYPE.LARGE }
                 state={ TEXT_INPUT_STATE.NORMAL }
                 placeholder="아이디"
                 isDisabled
                 onInputValueChangeListener={ () => {
                   console.log('change')
                 } } />
      <TextInput type={ TEXT_INPUT_TYPE.MEDIUM }
                 state={ TEXT_INPUT_STATE.NORMAL }
                 placeholder="아이디"
                 onInputValueChangeListener={ () => {
                   console.log('change')
                 } } />
      <TextInput type={ TEXT_INPUT_TYPE.MEDIUM }
                 state={ TEXT_INPUT_STATE.SUCCESS }
                 placeholder="아이디"
                 onInputValueChangeListener={ () => {
                   console.log('change')
                 } } />
      <TextInput type={ TEXT_INPUT_TYPE.MEDIUM }
                 state={ TEXT_INPUT_STATE.ERROR }
                 placeholder="아이디"
                 onInputValueChangeListener={ () => {
                   console.log('change')
                 } } />
      <TextInput type={ TEXT_INPUT_TYPE.SMALL }
                 state={ TEXT_INPUT_STATE.NORMAL }
                 placeholder="아이디"
                 onInputValueChangeListener={ () => {
                   console.log('change')
                 } } />
      <TextInput type={ TEXT_INPUT_TYPE.SMALL }
                 state={ TEXT_INPUT_STATE.SUCCESS }
                 placeholder="아이디"
                 onInputValueChangeListener={ () => {
                   console.log('change')
                 } } />
      <TextInput type={ TEXT_INPUT_TYPE.SMALL }
                 state={ TEXT_INPUT_STATE.ERROR }
                 placeholder="아이디"
                 onInputValueChangeListener={ () => {
                   console.log('change')
                 } } />
      <ColorCodeInput />
      <BigDiv>
        <TextArea placeholder="코멘트를 입력하세요" />
      </BigDiv>
    </>
  )
}

export default App