import React from 'react'
// import { useAppSelector } from '../app/hooks'idProps {
import ImageComponent from './ImageComponent'
import { FetchedPhotos } from '../features/buttonSlice'
import styled from 'styled-components'
interface GridProps {
  photos: FetchedPhotos[]
}

const StyledGrid = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 321px) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`

const GridImages = (props: GridProps) => {
  return (
    <StyledGrid>
      {props.photos.map(image => {
        return <ImageComponent key={image.id} props={image} />
      })}
    </StyledGrid>
  )
}

export default GridImages
