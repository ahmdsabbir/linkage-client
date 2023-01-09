import React from 'react';
import { NavLink } from 'react-router-dom';

const Unauthorized = () => {
    return (
        <div>
            <h2 className='text-5xl'>Unauthorized</h2>
            <p>back to <NavLink to={'/login'} className='btn'>Login</NavLink></p>
        </div>
    );
};

export default Unauthorized;