import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { benefits, explain } from '../../data/content';
import { FcLike } from 'react-icons/fc'

Benefits.propTypes = {

};

function Benefits(props) {
    return (
        <div className="benefits">
            <div>
                <span>Benefits</span>
            </div>
            <div>
                <img src="https://cdn2.thecatapi.com/images/VXppGG5rK.jpg" alt="" />
            </div>
            <div>
                <p>{explain}</p>
            </div>
            <div>
                {
                    benefits.map((benefit) => (
                        <div>
                            <FcLike />
                            <span>{benefit}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Benefits;