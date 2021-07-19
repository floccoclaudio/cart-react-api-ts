import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledRouter = styled(Router)`
  border: 2px solid black;
  padding: 5px;
`
const StyledLink = styled(Link)`
  border: 2px solid purple;
  padding: 5px;
  margin: 5px;
`

interface Props {}

const Cart = (props: Props) => {
  return (
    <StyledRouter>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/page1">page 1</StyledLink>
    </StyledRouter>
  )
}

export default Cart
