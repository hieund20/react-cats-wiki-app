import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './style.scss';
import '../../effects/blur.scss';


Carousels.propTypes = {
    breed: PropTypes.array
};

Carousels.defaultProps = {
    breed: []
};

function Carousels({ breed }) {

    return (
        <div className="carousel">
            <Carousel>
                {
                    breed.map((item) => (
                        <Paper>
                            <LazyLoadImage
                                src={item.url}
                                alt=""
                            />
                        </Paper>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Carousels;