import React, { useEffect } from 'react'
import { fetchInventory } from '../features/inventorySlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import ItemCard from './ItemCard'
import styled from 'styled-components'
//#region components
const StyledHeader = styled('div')`
  border: 2px solid black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
//#endregion

const ItemList = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchInventory())
  }, [dispatch])

  const inventory = useAppSelector(state => state.store.inventory)
  console.log(inventory)
  return (
    <StyledHeader>
      {inventory.map(item => {
        // return <ItemCard id={item.id} title={item.title} key={item.id} />
        return <ItemCard {...item} key={item.id} />
      })}
    </StyledHeader>
  )
}

export default ItemList
