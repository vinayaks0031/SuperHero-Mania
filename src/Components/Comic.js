import React, { useState, useEffect } from 'react'
import '../css/comic.css'
import DefaultCards from './subcomponent/DefaultCards';
// import ComicCard from './subcomponent/ComicCard';

export default function Comic() {
    const [inputData, setinputData] = useState("");
    const [apiData, setApiData] = useState([]);
    const [apiComicData, setComicApiData] = useState([]);
    const [isComic, setIsComic] = useState(false);

    const getComicDataBySearch = async () => {
        const publickey = '1f2bf00e3fc21a5a0d0150c65c32cf9b';
        const hash = "eb252b6e38c4fd8d323b4d22859b5430";
        const response = await fetch(`https://gateway.marvel.com/v1/public/comics?title=${inputData}&ts=1&apikey=${publickey}&hash=${hash}`);
        const data = await response.json();
        setComicApiData(data.data.results);
    }

    const getDataBySearch = async () => {
        const publickey = '1f2bf00e3fc21a5a0d0150c65c32cf9b';
        const hash = "eb252b6e38c4fd8d323b4d22859b5430";
        const response = await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${inputData}&ts=1&apikey=${publickey}&hash=${hash}`);
        const data = await response.json();
        setApiData(data.data.results);
    }

    const getData = async () => {
        const publickey = '1f2bf00e3fc21a5a0d0150c65c32cf9b';
        const hash = "eb252b6e38c4fd8d323b4d22859b5430";
        const response = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publickey}&hash=${hash}`);
        const data = await response.json();
        setApiData(data.data.results);

    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>

            <nav className="navbar navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    <p className="navbar-brand mx-2" onClick={() => setIsComic(false)}>HERO SEARCH</p>
                    <p className="navbar-brand mx-2" onClick={() => {
                        setIsComic(true);
                        setinputData("thor");
                    }}>comic</p>
                    <div className="d-flex mx-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={inputData} onChange={(e) => setinputData(e.target.value)} />
                        {isComic ? <button className="btn btn-outline-light" onClick={getComicDataBySearch} >Search</button> : <button className="btn btn-outline-light" onClick={getDataBySearch} >Search</button>}
                    </div>
                </div>
            </nav>
            {isComic ? <DefaultCards aData={apiComicData} isComic={isComic} heading="Comics" para="Search you favorite Comic" /> : <DefaultCards aData={apiData} isComic={isComic} heading="Heros" para="Search you favorite Comicsearch you favorite hero by there firstname (eg. spider for spider man)" />}
        </>
    )
}
