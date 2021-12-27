import React from 'react'
import styled from 'styled-components'
import { FetchedPhotos } from '../features/buttonSlice'
const StyledCard = styled('div')`
  border: 1px solid black;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  transition: all 2s ease;
  &:hover {
    img {
      transform: scale(2.1);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    transition: all 2s ease;
  }
`
interface Props {
  props: FetchedPhotos
}

const ImageComponent = ({ props }: Props) => {
  return (
    <StyledCard>
      <img src={props.url} alt="alt text" />
    </StyledCard>
  )
}

export default ImageComponent
