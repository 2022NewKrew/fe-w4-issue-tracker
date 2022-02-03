import React from 'react'
import { IssuesProvider } from '@Context/issues/IssuesContext.jsx'
import Issues from '@Context/issues/Issues.jsx'

const App = () => {
  return (
    <IssuesProvider>
      <Issues></Issues>
    </IssuesProvider>
  )
}

export default App
