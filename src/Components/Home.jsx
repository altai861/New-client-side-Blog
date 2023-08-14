import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useLogout from '../hooks/useLogout'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const { auth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  const signout = async () => {
    await logout();
  }

  return (
    <div>Home
        <section>
            <Link to="/admin">Admin</Link>
            <Link to="/profile">Profile</Link>
        </section>
        <div>
          { auth.accessToken ?  <button onClick={signout}>Sign out</button>
          : null}
         
        </div>
    </div>
  )
}

export default Home