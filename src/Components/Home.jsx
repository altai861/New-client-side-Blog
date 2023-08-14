import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home
        <section>
            <Link to="/admin">Admin</Link>
            <Link to="/profile">Profile</Link>
        </section>
    </div>
  )
}

export default Home