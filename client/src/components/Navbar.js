import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    function logoutHandler(event) {
        event.preventDefault()

        auth.logout()
        history.push('/')
    }

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg container-flued mh-100" style={{ height: '4rem' }}>
            <div className="container">
                <span className="navbar-brand">FileLoader</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-right justify-content-end text-uppercase" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/upload">UpLoad</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/files">Files</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profil</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={logoutHandler}>LogOut</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}