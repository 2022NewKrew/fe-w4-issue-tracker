import React from 'react'
import { LargeButton, MediumButton, SmallButton } from '@Atoms/buttons'
import { LargeInput, MediumInput, SmallInput } from '@Atoms/inputs'
import { IssuesProvider } from '@Context/issues/IssuesContext.jsx'
import Issues from '@Molecules/Issues.jsx'


function Collections() {
  return (
    <div>
      <IssuesProvider>
        <Issues></Issues>
      </IssuesProvider>
      <br/>
      <br/>
      <LargeButton></LargeButton>
      <br/>
      <MediumButton></MediumButton>
      <br/>
      <SmallButton></SmallButton>
      <br/>
      <LargeInput></LargeInput>
      <br/>
      <MediumInput></MediumInput>
      <br/>
      <SmallInput></SmallInput>
      <br/>
    </div>
  )
}

export default Collections
