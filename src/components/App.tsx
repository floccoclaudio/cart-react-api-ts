import React from 'react'
import ItemList from './ItemList'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Navbar from './Navbar'
import Buttons from './Buttons'
const StyledAppWrapper = styled('div')`
  border: 5px solid purple;
  padding: 5px;
`

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyledAppWrapper>
        {/* <Navbar /> */}
        <Switch>
          {/* <Route path="/" exact>
            <ItemList />
          </Route>
        </Switch>
        <Switch>
          <Route path="/page1/">
            <div>page 1</div>
          </Route> */}
          <Route path="/" exact>
            <Buttons />
          </Route>
        </Switch>
      </StyledAppWrapper>
    </BrowserRouter>
  )
}

export default App
