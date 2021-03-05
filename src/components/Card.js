import React from 'react'
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div class={props.properties}>
            <img src={props.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title text-center">{props.title}</h5>
                <p class="card-text text-center">{props.description}</p>
            </div>
            <div class="container-fluid p-3 bg-light text-center">
                <a href={props.url} class="btn btn-primary ">Find Out More!</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    properties: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
}

export default Card
