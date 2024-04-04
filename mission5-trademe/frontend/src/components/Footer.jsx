import Foot from './Footer.module.css';
import React from 'react';
import Logo from '../../public/Logo.png';

import Marketplace from '../../public/Marketplace Icon.png';
import Jobs from '../../public/Jobs Icon.png';
import Motor from '../../public/Motor Icon.png';
import Property from '../../public/Property Icon.png';
import Services from '../../public/Services Icon.png';
import Mini from '../../public/Community Icon.png';

import FB from '../../public/Facebook.png';
import Twitter from '../../public/Twitter.png';
import D from '../../public/Mode Icon.png';

function Footer() {
    return(
    <footer className={Foot['Foot']}>

    <div className={Foot['Row1']}>
        <img className={Foot['TradeMe']} src={Logo}/>
        <p className={Foot['item']}>List an Item</p>
        <p className={Foot['item']}>Watchlist</p>
        <p className={Foot['item']}>Favourites</p>
        <p className={Foot['item']}>My Trade Me</p>
        <p className={Foot['item']}>Log Out</p>
    </div>
    
    <hr className={Foot['hr1']}></hr>

    <div className={Foot['Row2']}>

        <div className={Foot['Pair']}>
            <p className={Foot['item']}>Marketplace</p>
            <img className={Foot['TradeMe']} src={Marketplace} style={{ width: '40px' }} />
        </div>
        <div className={Foot['Pair']}>
            <p className={Foot['item']}>Jobs</p>
            <img className={Foot['TradeMe']} src={Jobs} style={{ width: '40px' }} />
        </div>
        <div className={Foot['Pair']}>
            <p className={Foot['item']}>Motor</p>
            <img className={Foot['TradeMe']} src={Motor} style={{ width: '40px' }} />
        </div>
        <div className={Foot['Pair']}>
            <p className={Foot['item']}>Property</p>
            <img className={Foot['TradeMe']} src={Property} style={{ width: '40px' }} />
        </div>
        <div className={Foot['Pair']}>
            <p className={Foot['item']}>Services</p>
            <img className={Foot['TradeMe']} src={Services} style={{ width: '40px' }} />
        </div>
        <div className={Foot['Pair']}>
            <p className={Foot['item']}>Community</p>
            <img className={Foot['TradeMe']} src={Mini} style={{ width: '40px' }} />
        </div>


    </div> 

    <div className={Foot['Row3']}>
        <p className={Foot['item']}>(c) 2024 Trade Me Limited</p>
        <p className={Foot['item']}>Desktop Site</p>
        <p className={Foot['item']}>About Us</p>
        <p className={Foot['item']}>Careers</p>
        <p className={Foot['item']}>Advertise</p>
        <p className={Foot['item']}>Privacy Policy</p>
        <p className={Foot['item']}>Terms & Conditions</p>
        <p className={Foot['item']}>Contact Us</p>

        <img className={Foot['D']} src={D} style={{ width: '20px', height: '20px', marginTop: '10px' }} />
        <img className={Foot['facebook']} src={FB} style={{ width: '40px'}} />
        <img className={Foot['twitter']} src={Twitter} style={{ width: '40px' }} />
    </div>


    </footer>
    )
}

export default Footer;