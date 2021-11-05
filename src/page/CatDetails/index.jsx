import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getBreedById } from '../../apis/getCatDetails';
import './style.scss'
import _ from 'lodash';
import Rating from '../../common/Rating';
import Carousels from '../../common/Carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../effects/blur.scss';


function CatDetails({ scrollPosition }) {
    const [breed, setBreed] = useState([])
    let { id } = useParams()

    useEffect(() => {
        getBreedById(id)
            .then((res) => {
                setBreed(res.data)
            })
    }, [])

    return (
        <div className="cat">
            {
                !_.isEmpty(breed) &&
                <>
                    <div className="cat-top">
                        <div className="cat-top-img">
                            <div>
                            </div>
                            <div>
                                <LazyLoadImage
                                    src={breed[0].url}
                                    alt="cat"
                                    effect="blur"
                                />
                            </div>
                        </div>
                        <div className="cat-top-details">
                            <div className="cat-top-details-name">
                                <span>{breed[0].breeds[0].name}</span>
                            </div>
                            <div className="cat-top-details-des">
                                <p>{breed[0].breeds[0].description}</p>
                            </div>
                            <div className="cat-top-details-temp">
                                <span>Temperament: </span>
                                <span>{breed[0].breeds[0].temperament}</span>
                            </div>
                            <div className="cat-top-details-origin">
                                <span>Origin: </span>
                                <span>{breed[0].breeds[0].origin}</span>
                            </div>
                            <div className="cat-top-details-life">
                                <span>Life Span: </span>
                                <span>{breed[0].breeds[0].life_span}</span>
                            </div>
                            <div className="cat-top-details-adapt">
                                <span>Adaptability: </span>
                                <Rating rate={breed[0].breeds[0].adaptability} />
                            </div>
                            <div className="cat-top-details-affect">
                                <span>Affection level: </span>
                                <Rating rate={breed[0].breeds[0].affection_level} />
                            </div>
                            <div className="cat-top-details-child">
                                <span>Child Friendly: </span>
                                <Rating rate={breed[0].breeds[0].child_friendly} />
                            </div>
                            <div className="cat-top-details-groom">
                                <span>Grooming: </span>
                                <Rating rate={breed[0].breeds[0].grooming} />
                            </div>
                            <div className="cat-top-details-intelligence">
                                <span>Intelligence: </span>
                                <Rating rate={breed[0].breeds[0].intelligence} />

                            </div>
                            <div className="cat-top-details-health">
                                <span>Health issues: </span>
                                <Rating rate={breed[0].breeds[0].health_issues} />

                            </div>
                            <div className="cat-top-details-social">
                                <span>Social needs: </span>
                                <Rating rate={breed[0].breeds[0].social_needs} />

                            </div>
                            <div className="cat-top-details-stranger">
                                <span>Stranger friendly: </span>
                                <Rating rate={breed[0].breeds[0].stranger_friendly} />
                            </div>
                        </div>
                    </div>
                    <div className="cat-other">
                        <div>
                            <span>Other photos</span>
                        </div>
                        <div>
                            {
                                breed.slice(1).map((image) => (
                                    <div>
                                        <LazyLoadImage
                                            src={image.url}
                                            alt=""
                                            effect="blur"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            {
                                <Carousels
                                    breed={breed.slice(1)}
                                    swipe={true}
                                    autoPlay={false}
                                />
                            }
                        </div>
                    </div>
                </>
            }
        </div >
    );
}

export default CatDetails;