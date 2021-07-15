import React from 'react'
import { FakeStoreType } from '../types/types'
import styled, { keyframes } from 'styled-components'
// const ItemCard = (props: Pick<FakeStoreType , 'id'>) => {

const HoverAnimation = keyframes`
    0% {
      left: 0px;
      top: 0px;
    }
    25% {
      left: 200px;
      top: 0px;
    }
    50% {
      left: 200px;
      top: 200px;
    }
    75% {
      left: 0px;
      top: 200px;
    }
    100% {
      left: 0px;
      top: 0px;
    }`

const StyledCard = styled('div')`
  border: 2px dashed turquoise;
  position: relative;
  padding: 10px;
  margin: 10px;

  :hover {
    animation-name: ${HoverAnimation};
    animation-duration: 10s;
    animation-timing-function: 5s;
  }
`

const ItemCard = (props: FakeStoreType) => {
  return <StyledCard>{props.id}</StyledCard>
}

export default ItemCard
