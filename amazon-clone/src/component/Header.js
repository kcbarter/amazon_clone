import React from 'react';
import '../styling/header.css';


function Header() {
    return (
        <div className='header'>
            <img className='header_logo' alt='amazon_logo'
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            <div className="header_search">
                <input className="header_searchIn"/>
                {/*Logo */}
            </div>
            <div className="header_nav">
                <div className='header_option'>
                    <span className='header__optionOne'>
                        Hello
                    </span>
                    <span className='header__optionTwo'>
                        Sign In
                    </span>
                </div>
                <div className='header_option'>
                <span className='header__optionOne'>
                        Returns
                    </span>
                    <span className='header__optionTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header_option'>
                <span className='header__optionOne'>
                        Your
                    </span>
                    <span className='header__optionTwo'>
                        Prime
                    </span>
                </div>
                <div className='header_option'>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;