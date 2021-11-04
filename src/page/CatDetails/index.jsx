import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { getBreedById, getImageById } from '../../apis/getCatDetails';

CatDetails.propTypes = {

};

function CatDetails(props) {
    const [breed, setBreed] = useState([])
    const [images, setImages] = useState([])

    let { id } = useParams()
    console.log('pram id', id)

    useEffect(() => {
        getBreedById(id)
            .then((res) => {
                setBreed(res.data)
            })
    }, [])

    useEffect(() => {
        getImageById(id)
            .then((res) => {
                console.log('image data', res.data);
                setImages(res.data)
            })
    }, [])

    return (
        <div className="cat">
            <div className="cat-top">
                <div className="cat-img">
                    <img src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`} alt="" />
                </div>
                <div className="cat-details">
                    <div className="cat-details-name">
                        <span>{breed.name}</span>
                    </div>
                    <div className="cat-details-des">
                        <p>{breed.description}</p>
                    </div>
                    <div className="cat-details-temp">
                        <span>Temperament:</span>
                        <span>{breed.temperament}</span>
                    </div>
                    <div className="cat-details-origin">
                        <span>Origin:</span>
                        <span>{breed.origin}</span>
                    </div>
                    <div className="cat-details-life">
                        <span>Life Span:</span>
                        <span>{breed.life_span}</span>
                    </div>
                    <div className="cat-details-adapt">
                        <span>Adaptability:</span>
                        <span>{breed.adaptability}</span>
                    </div>
                    <div className="cat-details-affect">
                        <span>Affection level:</span>
                        <span>{breed.affection_level}</span>
                    </div>
                    <div className="cat-details-child">
                        <span>Child Friendly:</span>
                        <span>{breed.child_friendly}</span>
                    </div>
                    <div className="cat-details-groom">
                        <span>Grooming:</span>
                        <span>{breed.grooming}</span>
                    </div>
                    <div className="cat-details-intelligence">
                        <span>Intelligence:</span>
                        <span>{breed.intelligence}</span>
                    </div>
                    <div className="cat-details-health">
                        <span>Health issues:</span>
                        <span>{breed.health_issues}</span>
                    </div>
                    <div className="cat-details-social">
                        <span>Social needs:</span>
                        <span>{breed.social_needs}</span>
                    </div>
                    <div className="cat-details-stranger">
                        <span>Stranger friendly:</span>
                        <span>{breed.stranger_friendly}</span>
                    </div>
                </div>
            </div>
            <div className="cat-other">
                {
                    images.map((image) => (
                        <div >
                            <img src={image.url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default CatDetails;