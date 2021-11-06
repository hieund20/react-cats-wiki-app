import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';


function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img
                        src="https://dev-challenges-catwiki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcatwikilogo.92dea8ab.svg&w=128&q=75"
                        alt="" />
                </Link>
            </div>
        </header>
    );
}

export default Header;