import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'
import { Loader } from '../components/Loader'
import { FileCard } from '../components/FileCard'



function DetailPage() {
    const { token } = useContext(AuthContext)
    const [link, setLink] = useState(null)
    const linkId = useParams().id
    const { request, loading } = useHttp()

    const getLink = useCallback(async () => {
        try {
            let file = await request(`/api/file/${linkId}`, 'GET', null, false, {
                authorization: `Bearer ${token}`
            })
            setLink(file)
        } catch (error) { }
    }, [token, linkId, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            {!loading && link && <FileCard file={link} />}

            {/* {
                link.map((item, idx) => {
                    return (
                        <Post item={item} key={idx}></Post>)
                })
            } */}
        </>
    )
}

export default DetailPage