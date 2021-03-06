import React, { useEffect, useState } from 'react';
import { getMostBreed } from '../../apis/getCatDetails';

import './style.scss';


function Top() {
    const [mostBreeds, setMostBreeds] = useState([])

    useEffect(() => {
        const queryParams = 'limit=10&page=0';
        getMostBreed(queryParams)
            .then((res) => {
                setMostBreeds(res.data);
            })
    }, [])

    return (
        <div className="top">
            <div className="top-header">
                <span>Top 10 most searched breeds</span>
            </div>
            <div className="top-breeds">
                {
                    mostBreeds.map((breed) => (
                        <div>
                            <div>
                                <img
                                    src={breed.image.url}
                                    alt="breed-cat-top-10"
                                />
                            </div>
                            <div>
                                <div>
                                    <span>{breed.name}</span>
                                </div>
                                <div>
                                    <p>{breed.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Top;