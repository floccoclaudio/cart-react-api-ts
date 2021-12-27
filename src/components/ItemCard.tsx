import React from 'react'
import { FakeStoreType } from '../types/types'
import styled, { keyframes } from 'styled-components'

// const HoverAnimation = keyframes
//     0% {
//       left: 0px;
//       top: 0px;
//     }
//     25% {
//       left: 200px;
//       top: 0px;
//     }
//     50% {
//       left: 200px;
//       top: 200px;
//     }
//     75% {
//       left: 0px;
//       top: 200px;
//     }
//     100% {
//       left: 0px;
//       top: 0px;
//     }
export const StyledCardInfo = styled('div')``
export const StyledCardPrice = styled('div')``
export const StyledCardImage = styled('img')`
  width: 100%;
  transition: all 2s ease;
  :hover {
    transform: scale(2.2);
  }
`
export const StyledCardDescription = styled('div')``

const StyledCard = styled('div')`
  border: 2px dashed turquoise;
  /* position: relative; */
  padding: 10px;
  margin: 10px;

  box-sizing: border-box;
  overflow: hidden;
`

const ItemCard = (props: FakeStoreType) => {
  return (
    <StyledCard>
      <StyledCardImage src={props.image} />
      <StyledCardInfo>
        <StyledCardPrice />
        <StyledCardDescription />
      </StyledCardInfo>
    </StyledCard>
  )
}

export default ItemCard
