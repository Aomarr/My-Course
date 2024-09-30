import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function WithAuth({ children }) {
    const user = useSelector(state => state.auth.value)
    if (user === null) {
        return <Navigate to={'/login'} replace/>
    }

    else {
        return <>{children}</>
    }
}
