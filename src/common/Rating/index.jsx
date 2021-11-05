import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Rating.propTypes = {
    rate: PropTypes.number
};

Rating.defaultProps = {
    rate: 0
};

function Rating({ rate }) {
    const rateArr = ['rate', 'rate', 'rate', 'rate', 'rate']

    for (var i = 0; i < rate; i++) {
        rateArr[i] = 'rate --active'
    }
    console.log(rateArr)

    return (
        <div className="rating">
            {
                rateArr.map((rating) => (
                    <div className={`rating-${rating}`}>
                    </div>
                ))
            }
        </div>
    );
}

export default Rating;