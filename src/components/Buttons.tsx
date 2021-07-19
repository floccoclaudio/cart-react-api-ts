import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import styled from 'styled-components'
import { fetchImages, fetchPosts, fetchUsers } from '../features/buttonSlice'
import UserCard from './UserCard'

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
  // const {posts:{data}}=useAppSelector(state => state.buttons)
  const { data: postData } = useAppSelector(state => state.buttons.posts)
  const { data: userData } = useAppSelector(state => state.buttons.users)
  const dispatch = useAppDispatch()
  return (
    <StyledButtonWrapper>
      <StyledButton
        onClick={() => {
          dispatch(fetchPosts())
        }}
      >
        Fetch Posts
      </StyledButton>
      {postData.length > 0 && (
        <>
          {postData.map(({ body, id }) => {
            return <p key={id}>{body}</p>
          })}
        </>
      )}
      <StyledButton
        onClick={() => {
          dispatch(fetchUsers())
        }}
      >
        Fetch Users
      </StyledButton>
      {userData.map(user => {
        return <UserCard user={user} key={user.id} />
      })}

      <StyledButton
        onClick={() => {
          dispatch(fetchImages())
        }}
      >
        fetch photos
      </StyledButton>

      <StyledButton>fetch photos</StyledButton>
    </StyledButtonWrapper>
  )
}

export default Buttons

//  <StyledButton onClick={() => dispatch(fetchPosts())}>
//   fetch comments
// </StyledButton>
// <StyledButton
//   onClick={() => {
//     fetchAlbums()
//   }}
// >
//   fetch albums{' '}
// </StyledButton>
