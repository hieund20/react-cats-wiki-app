import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import { TextField, Autocomplete } from '@mui/material';

Home.propTypes = {
    mostBreeds: PropTypes.array,
    allBreeds: PropTypes.array
};

Home.defaultProps = {
    mostBreeds: [],
    allBreeds: []
};

function Home(props) {
    const { mostBreeds, allBreeds } = props

    // const handleChange = (e) => {

    // }

    // const handleSeeMore = () => {
    //     if (!onSeeMore) return;
    //     onSeeMore();
    // }

    return (
        <div className='home'>
            <div className='home-hero'>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    className="combo-box"
                    freeSolo
                    options={allBreeds}
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option) => (
                        <Link to={`/${option.id}`} {...props}>{option.name}</Link>
                    )}
                    onChange={(e, value) => console.log(value)}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Enter your breed" />}
                />
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
                                <div>
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
                        <Link to="/benefits">
                            <span>READ MORE</span>
                            <span className="material-icons">
                                trending_flat
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="../../images/cat1/png" alt="cat" />
                        <img src="../../images/cat3.png" alt="cat" />
                    </div>
                    <div>
                        <img src="../../images/cat2.png" alt="cat" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;