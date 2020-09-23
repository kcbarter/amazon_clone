import React from 'react';
import '../styling/home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_Image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt='faded_picture'
                 />

                 <div className='home_row'>
                    <Product />
                 </div>
                 
                 <div className='home_row'>

                 </div>

                 <div className='home_row'>

                 </div>
            </div>
        </div>
    )
}

export default Home;