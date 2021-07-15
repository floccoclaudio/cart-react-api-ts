import React from 'react'
import styled from 'styled-components'

const StyledButtonWrapper = styled('div')`
  display: grid;
  margin: 10px;
  padding: 10px;
`
const StyledButton = styled('button')`
  margin: 10px;
  padding: 10px;
  background-color: bisque;
  cursor: pointer;
  border: 5px inset blueviolet;
`

const buttons = () => {
  return (
    <StyledButtonWrapper>
      <StyledButton>fetch</StyledButton>
      <StyledButton>fetch</StyledButton>
      <StyledButton>fetch</StyledButton>
      <StyledButton>fetch</StyledButton>
      <StyledButton>fetch</StyledButton>
    </StyledButtonWrapper>
  )
}

export default buttons
