import React, { useState, useEffect } from 'react'
import { FetchUserData } from '../features/buttonSlice'
// import { useAsync } from 'react-use'
import axios from 'axios'
//NEVER DO THIS
// const axios = require('axios').default

const AxiosFetch = () => {
  const [userData, setUserData] = useState<FetchUserData[]>([])

  useEffect(() => {
    axios
      .get<FetchUserData[]>('https://jsonplaceholder.typicode.com/users')
      .then(result => setUserData(result.data))
    // .then(setUserData(result))
  }, [])
  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .then(function (response: FetchUserData[]) {
  //       setUserData(response)
  //     })
  // }, [])

  // useEffect(() => {
  //   const fetchEffect = async () => {
  //     const response = await axios.get(
  //       'https://jsonplaceholder.typicode.com/users',
  //     )
  //     const result = await response.data
  //     setUserData(result)
  //   }
  //   fetchEffect()
  //   console.log(userData)
  // }, [])

  // useAsync(async () => {
  //   const { data } = await axios.get<FetchUserData[]>(
  //     'https://jsonplaceholder.typicode.com/users',
  //   )
  //   setUserData(data)
  // }, [])
  console.log(userData)
  return <div>axios fetcehd</div>
}

export default AxiosFetch
