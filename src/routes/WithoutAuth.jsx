import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function WithoutAuth({ children }) {
    const user = useSelector(state => state.auth.value)
    if (user === null) {
        return <>{ children }</>
    }
    
    else {
        return <Navigate to={'/'} replace/>
    }
}
