import React from 'react';
import { Link } from 'react-router-dom'

export const Item = (props) => {
    return(
        <Link to={ `/${props.breed}` } key={ props.index }>
            <li>{ props.breed }</li>
        </Link>
    )
}

