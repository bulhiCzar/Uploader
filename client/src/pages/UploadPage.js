import React, { useContext, useEffect } from 'react'
import { useAuth } from '../hooks/auth.hooks'
import { useHttp } from '../hooks/http.hooks'
import modalInfo from '../modules/toast/main'
// import '../modules/dropZone/dropzone-5.7.0/index'
import '../modules/dropZone/main'
import '../modules/dropZone/main.css'
import AuthContext from '../context/AuthContext'
import { useHistory } from 'react-router-dom'


function UploadPage() {
    const { error, request, clearError } = useHttp()
    const history = useHistory()
    // const auth = useContext(AuthContext)
    // const [image, setImage] = useState('')
    // const [loading, setLoading] = useState(false)
    // const [file, setFile] = useState(null)

    const { token, login, logout, userId } = useAuth()

    const uploadImage = async e => {
        e.preventDefault()
        let i
        const files = e.target.elements.buffer.files

        const data = new FormData()

        for (i = 0; i < files.length; ++i) {
            // console.log(files[i])
            data.append(`idx${i}`, files[i])
        }

        // data.append('token', token)

        // setLoading(true)
        // console.log(files)

        // console.log(data.values())
        // // const res = await fetch('api/file/upload', { method: 'POST', body: data })
        // // const res = await request('api/file/upload', 'POST', data, {token})
        // const res = await fetch('api/file/test', { method: 'POST', body: data, headers: { 'Content-Type': 'multipart/form-data' } })
        // const res = await fetch('api/file/test', { method: 'POST', body: data })
        // const res = await request('api/file/test', 'POST', data, { 'Content-Type': 'multipart/form-data' })
        // const res = await request('api/file/test', 'POST', data, false)
        const res = await request('api/file/upload', 'POST', data, false, { authorization: `Bearer ${token}` })
        // const res = await fetch('api/test/test', { method: 'POST', body: data, headers: { 'Content-Type': 'multipart/form-data' } })

        if (res.type === 'success') {
            history.push('/files/')
        }

        console.log(res)

        modalInfo(res)
        // if (res.failLoad > 0) {
        //     alert(res.failLoad + " файлов уже было загружено")
        // }


    }
    useEffect(() => {

    }, [])


    const uploadTest = async e => {
        e.preventDefault()
        // const res = await fetch('api/test/test', { method: 'POST', body: data, headers: { 'Content-Type': 'multipart/form-data' } })
    }



    return (
        <div className="App">

            <form onSubmit={uploadImage}>
                <label>Загрузка файлов</label><br />
                {/* <input type="file" name="buffer" accept="image/*" multiple className="mt-5 p-5" /><br /><br /> */}
                <input type="file" id="file" accept="image/*" name="buffer" multiple />
                <label htmlFor="file" class="btn-3">
                    <span>Выберите файлы</span>
                </label>
                <input type="submit" name="send"  className="button-upload" />
                
            </form>
            <hr />
            {/* <div class="container">
                <form class="file-uploader">

                    <label htmlFor="file-input">Select your files</label>
                    <input id="file-input" type="file" />

                </form>
            </div> */}

        </div>
    )
}
export default UploadPage