import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Top.propTypes = {
    mostBreeds: PropTypes.array
};

Top.defaultProps = {
    mostBreeds: []
};

function Top(props) {
    const { mostBreeds } = props

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