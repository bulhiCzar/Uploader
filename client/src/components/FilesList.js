import React from 'react'



export const FilesList = ({ item }) => {
    // console.log(item)
    // console.log(key)

    return (
        <>
            <div className="card mt-3 " style={{width: '33.33%'}} >
                <img src={item.link} className="rouded "  style={{height: '18rem'}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Дата: <b className='font-weight-bold'>{new Date(item.data).toLocaleDateString()}</b></h5>
                    <p className="card-text">Сылка: <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>
                    <a href={`/detail/${item.name}`} className="btn btn-primary">Подробнее</a>
                </div>
            </div>
        </>
    )
}