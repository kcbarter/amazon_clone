import React from 'react';
import '../styling/header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <a href='/'>
                <img className='header_logo' alt='amazon_logo'
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </a>
            <div className="header_search">
                <input className="header_searchIn"/>
                <SearchIcon className="header_searchIcon" />
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
                <div className='header_basketOption'>
                    <a href='/checkout'>
                        <ShoppingBasketIcon className='shopping_basket'/>
                    </a>
                    <span className='header_optionTwo header_basketCount'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;