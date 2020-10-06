import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'
import { Loader } from '../components/Loader'




function ProfilePage() {
    const { token } = useContext(AuthContext)
    const [profil, setProfil] = useState(null)
    const { request, loading } = useHttp()

    const getLink = useCallback(async () => {
        try {
            let responsed = await request(`/api/auth/profil`, 'GET', null, false, {
                authorization: `Bearer ${token}`
            })
            console.log(responsed)
            setProfil(responsed)
        } catch (error) { }
    }, [token, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            {!loading && profil &&
                <div className="mt-3 d-flex ">
                    <div className="col">Ваша почта: {profil.email}</div>
                    <div className="col">Ваша логин: {profil.login}</div>
                    <div className="col">Ваших файлов: {profil.files.length}</div>
                </div>
            }

            {/* {
                link.map((item, idx) => {
                    return (
                        <Post item={item} key={idx}></Post>)
                })
            } */}
        </>
    )
}

export default ProfilePage