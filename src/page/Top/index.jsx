import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { getCatDetails } from '../../apis/getCatDetails';

Top.propTypes = {
};


function Top(props) {
    const [mostBreeds, setMostBreeds] = useState([])


    useEffect(() => {
        const queryParams = 'limit=10&page=0';
        getCatDetails(queryParams)
            .then((res) => {
                console.log('test top');
                console.log(res.data);
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
                                <img src={breed.image.url} alt="" />
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