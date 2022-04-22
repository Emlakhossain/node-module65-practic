import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/user/add'>User</Link>
            <Link to='/update'>Udpade</Link>
        </div>
    );
};

export default Header;