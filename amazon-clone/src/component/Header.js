import React from 'react';
import '../styling/header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link }  from 'react-router-dom';
import { useStateValue } from '../StateProvider.js';
import { auth } from '../firebase.js';

function Header() {
    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' alt='amazon_logo'
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            <div className="header_search">
                <input className="header_searchIn"/>
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header_option'>
                            <span className='header__optionOne'>
                                {user ? 'Hello, ' + user.email : 'Hello'}
                            </span>
                            <span className='header__optionTwo'>
                                {user ? 'Sign Out' : 'Sign in'}
                            </span>
                    </div>
                </Link>
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
                <Link to='/checkout'>
                    <div className='header_basketOption'>
                        <ShoppingBasketIcon className='shopping_basket'/>
                        <span className='header_optionTwo header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;