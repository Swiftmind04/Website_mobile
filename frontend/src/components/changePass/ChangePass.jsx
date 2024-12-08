import React from 'react'
import { useSelector } from 'react-redux'

export default function ChangePass() {
    const { currentUser } = useSelector(state => state.user)

    return (
        <div className='container'>
           
        </div>
    )
}
