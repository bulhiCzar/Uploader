import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap'
import { useHttp } from '../hooks/http.hooks'

import modalInfo from '../modules/toast/main'
import '../modules/toast/main.css'
import { AuthContext } from '../context/AuthContext'



function AuthPage() {
    const auth = useContext(AuthContext)

    const { loading, error, request, clearError } = useHttp()

    const [authSignIn, setAuthSignIn] = useState(true)

    const [valueEmail, setValueEmail] = useState('')
    const [valuePassword, setValuePassword] = useState('')
    const [valueLogin, setValueLogin] = useState('')
    const [valueCheck, setValueCheck] = useState(true)

    const [formLogin, setFormLogin] = useState({
        email: '', password: ''
    })

    const [buttonSingUp, setButtonSignUp] = useState(false)
    const [buttonSingIn, setButtonSignIn] = useState(false)



    useEffect(() => {
        modalInfo(error)
        // setTimeout(() => {
        //     clearError(null)
        // }, 1500)
        clearError(null)
        // console.log(error)
    }, [error, clearError])


    function formValidatonSignUp() {
        if (valueCheck && valueEmail.length > 2 && valuePassword.length > 4 && valueLogin.length > 2) {
            setButtonSignUp(true)
        } else {
            setButtonSignUp(false)
        }
    }
    function formValidatonSignIn() {
        if (formLogin.email.length > 1 && formLogin.password.length > 1) {
            setButtonSignIn(true)
        } else {
            setButtonSignIn(false)
        }
    }

    const changeLoginHandler = (event) => {
        setFormLogin({ ...formLogin, [event.target.name]: event.target.value })
        formValidatonSignIn()
    }


    const registerHandler = async (e) => {
        e.preventDefault()
        try {
            const send = { email: valueEmail, login: valueLogin, password: valuePassword }
            const data = await request('/api/auth/register', 'POST', send, true, { 'Content-Type': 'application/json;charset=utf-8' })
            modalInfo(data)
        } catch (error) { }
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await request('/api/auth/login', 'POST', {...formLogin}, true, { 'Content-Type': 'application/json;charset=utf-8' })
            // console.log(data.userId)
            auth.login(data.token, data.userId)
        } catch (error) { }
    }


    return (
        <div className="row justify-content-center align-items-center" style={{ marginTop: "10rem" }}>
            <div className="col-4 ">

                {authSignIn ?
                    <div className="row  switcher-auth text-center">
                        <div className="col-6 " onClick={setAuthSignIn.bind(null, false)}>Sign Up</div>
                        <div className="col-6 switcher-auth__active" onClick={setAuthSignIn.bind(null, true)}>Sign In</div>
                    </div>
                    :
                    <div className="row  switcher-auth text-center">
                        <div className="col-6 switcher-auth__active" onClick={setAuthSignIn.bind(null, false)}>Sign Up</div>
                        <div className="col-6 " onClick={setAuthSignIn.bind(null, true)}>Sign In</div>
                    </div>
                }




                {authSignIn ?

                    <form className="mt-4" onSubmit={loginHandler}>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="Email"
                                name="email"
                                // aria-describedby="emailHelp"
                                onChange={changeLoginHandler}
                                // value={valueEmail}
                                // onChange={
                                //     (e) => {
                                //         setValueEmail(e.target.value)
                                //         formValidatonSignIn()
                                //     }
                                // }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label" aria-describedby="passwordHelpBlock">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="Password"
                                name="password"
                                onChange={changeLoginHandler}
                                // value={valuePassword}
                                // onChange={
                                //     (e) => {
                                //         setValuePassword(e.target.value)
                                //         formValidatonSignIn()
                                //     }
                                // }
                            />
                        </div>

                        {buttonSingIn ?
                            <button type="submit" className="btn bg-success btn-block text-white"  disabled={loading}>Exit</button>
                            :
                            <button type="submit" className="btn btn-block text-white bg-danger bg-gradient" disabled >Exit</button>
                        }

                    </form>

                    :

                    <form className="mt-4" onSubmit={registerHandler}>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                // id="Email"
                                // aria-describedby="emailHelp"
                                value={valueEmail}
                                onChange={
                                    (e) => {
                                        setValueEmail(e.target.value)
                                        formValidatonSignUp()
                                    }
                                }
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Login" className="form-label">Login</label>
                            <input
                                type="text"
                                className="form-control"
                                // id="Login"
                                value={valueLogin}
                                onChange={
                                    (e) => {
                                        setValueLogin(e.target.value)
                                        formValidatonSignUp()
                                    }
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label" aria-describedby="passwordHelpBlock">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                // id="Password"
                                value={valuePassword}
                                onChange={
                                    (e) => {
                                        setValuePassword(e.target.value)
                                        formValidatonSignUp()
                                    }
                                }
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="CheckRuls"
                                checked={valueCheck}
                                onChange={
                                    (e) => {
                                        setValueCheck(e.target.checked)
                                        formValidatonSignUp()
                                    }
                                }
                            />
                            <label className="form-check-label" htmlFor="CheckRuls">Check rules</label>
                        </div>

                        {buttonSingUp ?
                            <button className="btn bg-success btn-block text-white" disabled={loading} >Register</button>
                            :
                            <button type="submit" className="btn btn-block text-white bg-danger bg-gradient" disabled >Register</button>
                        }

                    </form>

                }

            </div>


        </div>
    )
}

export default AuthPage