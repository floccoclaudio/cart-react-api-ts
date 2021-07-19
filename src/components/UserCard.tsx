import React from 'react'
import { Link } from 'react-router-dom'

import { FetchUserData } from '../features/buttonSlice'
interface UserProps {
  user: FetchUserData
}

const UserCard: React.FC<UserProps> = props => {
  //   const neededUrl = props.user.website.split('.')[0]
  return <Link to={`/${props.user.id}`}>{props.user.address.city}</Link>
}

export default UserCard
