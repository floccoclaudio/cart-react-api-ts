import React from 'react'
import ItemList from './ItemList'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Navbar from './Navbar'
import Buttons from './Buttons'
import UserPage from './UserPage'
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
          <Route path="/" exact>
            <Buttons />
          </Route>
          <Route path="/:id">
            {/* <ItemList /> */}
            <UserPage />
          </Route>
        </Switch>
        {/* <Route path="/" exact>
          </Route>
        </Switch> */}
      </StyledAppWrapper>
    </BrowserRouter>
  )
}

export default App
