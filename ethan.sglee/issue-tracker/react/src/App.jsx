import React from 'react'
import { IssuesProvider } from './context/issues/IssuesContext.jsx'
import Issues from './context/issues/Issues.jsx'

const App = () => {
  return (
    <IssuesProvider>
      <Issues></Issues>
    </IssuesProvider>
  )
}

export default App
