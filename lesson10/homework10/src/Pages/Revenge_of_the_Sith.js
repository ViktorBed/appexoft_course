import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RevengeOfTheSith = () =>{
    const [film, setFilm] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/films');
                setFilm(response.data.results[3]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {film && (
                <div className={"film"}>
                    <h1>Title: {film.title}</h1>
                    <div>Director: {film.director}</div>
                    <div>Producer: {film.producer}</div>
                    <div>Release Date: {film.release_date}</div>
                    <p>{film.opening_crawl}</p>
                </div>
            )}
        </div>
    );
};
export default RevengeOfTheSith;