import React from 'react'



export const FileCard = ({ file }) => {
    file = file[0]
    console.log(file.link)
    return (
        <>
            {/* <div className="card mb-3 justify-content-center align-items-center"> */}
            <div className="card mb-3 mt-4 col">
                <img src={file.link} className="rouded" style={{height: '18rem'}} alt="..." />
                <div className="card-body">
                    {/* <h5 className="card-title font-weight-bold">Ваша фотография</h5> */}
                    <p className="card-text">Владелец: <b className='font-weight-bold'>{file.master}</b></p>
                    <p className="card-text">Сылка: <a href={file.link} target="_blank" rel="noopener noreferrer">{file.link}</a></p>
                    <p className="card-text">Дата создания: <b className='font-weight-bold'>{new Date(file.data).toLocaleDateString()}</b></p>
                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
        </>
    )
}