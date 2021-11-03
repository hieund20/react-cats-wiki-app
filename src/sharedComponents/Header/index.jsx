import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

Header.propTypes = {
    onBackToHome: PropTypes.func
};

Header.propTypes = {
    onBackToHome: null
};

function Header(props) {
    const { onBackToHome } = props

    const handleBackToHome = () => {
        if (!onBackToHome) return;
        onBackToHome();
    }

    return (
        <header>
            <div>
                <Link to="/">
                    <img
                        src="https://dev-challenges-catwiki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcatwikilogo.92dea8ab.svg&w=128&q=75"
                        alt=""
                        onClick={() => handleBackToHome()} />
                </Link>
            </div>
        </header>
    );
}

export default Header;