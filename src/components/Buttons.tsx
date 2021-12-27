import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import styled from 'styled-components'
import { fetchImages, fetchPosts, fetchUsers } from '../features/buttonSlice'
import { fetchInventory } from '../features/inventorySlice'
import UserCard from './UserCard'
import AxiosFetch from './AxiosFetch'
import GridImages from './GridImages'
import ItemList from './ItemList'

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
const StyledWrapper = styled('div')`
  border: 2px solid red;
  padding: 10px;
`

const Buttons: React.FC = () => {
  // const {posts:{data}}=useAppSelector(state => state.buttons)
  const { data: postData } = useAppSelector(state => state.buttons.posts)
  const postError = useAppSelector(state => state.buttons.posts.isError)
  const { data: userData } = useAppSelector(state => state.buttons.users)
  const { data: photosData } = useAppSelector(state => state.buttons.photos)
  const { isShopSuccess } = useAppSelector(state => state.store)
  const dispatch = useAppDispatch()
  const throwError = () => {
    throw new Error('ma ch stai criann fra')
  }
  return (
    <StyledButtonWrapper>
      <StyledButton>
        <AxiosFetch />
      </StyledButton>
      <StyledButton
        onClick={() => {
          dispatch(fetchPosts())
        }}
      >
        Fetch Posts
      </StyledButton>
      {postError && throwError()}
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
        Call grid
      </StyledButton>
      <StyledWrapper>
        {photosData.length > 0 && <GridImages photos={photosData} />}
      </StyledWrapper>
      <StyledButton
        onClick={() => {
          dispatch(fetchInventory())
        }}
      >
        show Item List from fakeStore
      </StyledButton>
      <StyledWrapper>{isShopSuccess && <ItemList />}</StyledWrapper>
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
