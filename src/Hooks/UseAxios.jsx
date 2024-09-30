import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function UseAxios() {

const token = useSelector(state => state.auth.value?.token)

  const instance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return (
    instance
  )
}
