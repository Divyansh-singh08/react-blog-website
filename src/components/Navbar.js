import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <div className='nav-link'>
            <ul id='nav'>
            {/* Link components coming from react-router-dom part */}
            {/* so we import that well */}
                <li className='li-ink'><Link style={{color:'yellow',textDecoration:'none'}} to='/'>Home</Link></li>
                <li className='li-ink'><Link style={{color:'yellow' ,textDecoration:'none'}} to='/create-post'>Create Post</Link></li>
                {/* <li><Link to='/'>Home</Link></li> */}
                {/* <li><Link to='/'>Home</Link></li> */}

            </ul>
        </div>
    );
}

export default Navbar;