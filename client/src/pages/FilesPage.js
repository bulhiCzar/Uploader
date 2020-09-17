import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Loader } from '../components/Loader'
import { FilesList } from '../components/FilesList'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'


function FilesPage() {
    const { token } = useContext(AuthContext)
    const [files, setFiles] = useState([])
    const { request, loading } = useHttp()

    const getFiles = useCallback(async () => {
        try {
            const responsed = await request(`/api/file`, 'GET', null, false, {
                authorization: `Bearer ${token}`
            })
            setFiles(responsed)
            // console.log(responsed)
        } catch (error) { } 
    }, [token, request])

    useEffect(() => {
        getFiles()
        // console.log(files)
    }, [getFiles])

    if (loading) {
        return <Loader />
    }


    return (
        <div className="row">
            {files ?
                files.map((item, idx) => {
                    return (
                        <FilesList item={item} key={idx} />
                    )
                })
                : 
                <p className="d-flex justify-content-center align-items-center mt-5">Вы еще не загружали файлы</p>
            }
        </div>
    )
}

export default FilesPage