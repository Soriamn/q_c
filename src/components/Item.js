import React from 'react';
import { Link } from 'react-router-dom'

export const Item = (props) => {
    return(
        <Link to={ `/${props.breed}` } key={ props.index }>
            <li className="list-group-item list-group-item-action">{ props.breed }</li>
        </Link>
    )
}

