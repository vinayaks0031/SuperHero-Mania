import React from 'react'
import Alt from '../../img/alt.png'

export default function DefaultCards({ aData, heading, para, isComic }) {
    return (
        <>
            <div className="container" >
                <h1 className="head-text">{heading}</h1>
                <p className="instruc">{para}</p>
                <div className="d-flex flex-wrap justify-content-center" >
                    {
                        aData.map((e) => {
                            const { name, title, id, description } = e;
                            const { path } = e.thumbnail;
                            return (
                                <div className="card my-2 mx-3" key={id} style={{ width: "18rem" }}>
                                    <img alt={Alt} className="card-img-top" src={path + ".jpg"} />
                                    <div className="card-body">
                                        <h4>{isComic ? title : name}</h4>
                                        <p className="card-text">{description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
