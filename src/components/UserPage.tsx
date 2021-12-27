import React, { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { useParams } from 'react-router-dom'
import { fetchUser } from '../features/buttonSlice'
interface Props {}

const UserPage = (props: Props) => {
  //   let location = useLocation()
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    dispatch(fetchUser(id))
  }, [dispatch, id])

  return <div></div>
}

export default UserPage
