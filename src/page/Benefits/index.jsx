import React from 'react';
import { benefits, explain } from '../../data/content';
import { FcLike } from 'react-icons/fc'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './style.scss';

function Benefits() {
    return (
        <div className="benefits">
            <div>
                <span>Benefits</span>
            </div>
            <div>
                <LazyLoadImage
                    src="https://cdn2.thecatapi.com/images/VXppGG5rK.jpg"
                    alt=""
                />
            </div>
            <div>
                <p>{explain}</p>
            </div>
            <div>
                {
                    benefits.map((benefit) => (
                        <div>
                            <div>
                                <FcLike />
                            </div>
                            <span>{benefit}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Benefits;