/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const hoverColor = 'pink';

const divStyle = css`
  background-color: lightyellow;
  &:hover {
    background-color: ${hoverColor};
  }
`

const App = () => {
  return (
    <div css={divStyle}>
      <h1>Welcome to eve's issue tracker</h1>
    </div>
  )
}

export default App;
