import React, {useContext, useEffect, useRef} from 'react'
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
    const ref = useRef()

    const { token, login, logout, userId } = useAuth()

    const uploadImage = async e => {
        e.preventDefault()
        let i
        const files = e.target.elements.buffer.files

        const data = new FormData()

        for (i = 0; i < files.length; ++i) {
            data.append(`idx${i}`, files[i])
        }


        const name = ref.current.value

        if (files.length < 0 || !name){
            return modalInfo({type: 'error', message: 'поля пустые'})
        }


        const res = await request(`api/file/upload/${name}`, 'POST', data, false, { authorization: `Bearer ${token}` })

        if (res.type === 'success') {
            history.push('/files/')
        }

        console.log(res)

        modalInfo(res)
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
                <input type="file" id="file" accept="image/*" name="buffer" />
                <label htmlFor="file" class="btn-3">
                    <span>Выберите файлы</span>
                </label>
                <input type="text" ref={ref} placeholder='название файла'/>
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