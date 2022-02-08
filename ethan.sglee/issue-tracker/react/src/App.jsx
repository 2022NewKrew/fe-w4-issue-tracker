import React from 'react'
import { IssuesProvider } from '@Context/issues/IssuesContext.jsx'
import Issues from '@Context/issues/Issues.jsx'
import Collections from '@Components/pages/collections'

const App = () => {
  return (
    <div>
      <IssuesProvider>
        <Issues></Issues>
      </IssuesProvider>
      <br/>
      <br/>
      <Collections></Collections>
    </div>
  )
}

export default App
