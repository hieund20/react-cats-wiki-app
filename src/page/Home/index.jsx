import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

Home.propTypes = {
    mostBreeds: PropTypes.array,
    onSeeMore: PropTypes.func,
};

Home.defaultProps = {
    mostBreeds: [],
    onSeeMore: null
};

function Home(props) {
    const { mostBreeds, onSeeMore } = props

    const handleSeeMore = () => {
        if (!onSeeMore) return;
        onSeeMore();
    }

    return (
        <div className='home'>
            <div className='home-hero'>
            </div>
            <div className="home-most">
                <div className="home-most-container">
                    <div>
                        <span>Most Searched Breeds</span>
                        <hr />
                    </div>
                    <div>
                        <div>
                            <span>66+ Breeds For you to discover</span>
                        </div>
                        <div>
                            <Link to="/top">
                                <div onClick={() => handleSeeMore()}>
                                    <span>SEE MORE</span>
                                    <span className="material-icons">
                                        trending_flat
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        {
                            mostBreeds.map((breed) => (
                                <div className="card">
                                    <img src={breed.image.url} alt="" />
                                    <div>
                                        <span>{breed.name}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="home-benefits">
                <div>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <span>Why should you have a cat?</span>
                    </div>
                    <div>
                        <p>
                            Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
                        </p>
                    </div>
                    <div>
                        <span>READ MORE</span>
                        <span className="material-icons">
                            trending_flat
                        </span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Home;