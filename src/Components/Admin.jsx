import React from 'react'
import { Link } from 'react-router-dom'
import Users from './Users'

const Admin = () => {
  return (
    <div>Admin
        <Link to="/">Home</Link>

        <Users />
    </div>
  )
}

export default Admin