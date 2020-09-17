import { useCallback, useEffect, useState } from "react"

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
    // const [userLogin, setUserLogin] = useState(null)



    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)
        // console.log(id)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))
    }, [])



    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)

        localStorage.removeItem(storageName)

    }, [])


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.id)
        }
        setReady(true)
    }, [login])

    const id = () => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            // console.log(data)
            return data.id
        }
    }

    return { login, logout, token, userId, id, ready }
}