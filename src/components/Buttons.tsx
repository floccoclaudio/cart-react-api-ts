import React from 'react'
import { useAppDispatch } from '../app/hooks'
import styled from 'styled-components'
import { fetchPosts, fetchComments, fetchAlbums } from '../features/buttonSlice'
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

const Buttons = () => {
  const dispatch = useAppDispatch()
  return (
    <StyledButtonWrapper>
      <StyledButton
        onClick={() => {
          dispatch(fetchPosts())
        }}
      >
        fetch posts
      </StyledButton>
      <StyledButton onClick={() => dispatch(fetchPosts())}>
        fetch comments
      </StyledButton>
      <StyledButton
        onClick={() => {
          fetchAlbums()
        }}
      >
        fetch albums{' '}
      </StyledButton>
      <StyledButton>fetch photos</StyledButton>
      {/* <StyledButton>fetch</StyledButton> */}
    </StyledButtonWrapper>
  )
}

export default buttons
