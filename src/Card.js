import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

function Card() {
    const usercontext = useContext(UserContext);
    return (
        <Link to="/card">
            <h2>
            {usercontext}
            </h2>
        </Link>
    );
}

export default Card;
