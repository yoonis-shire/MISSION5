import React from 'react'
import style from './Header.module.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
    <div className={style.header}>
        <nav>
            <ul className={style.topHeader}>
                <li>Trade Me</li>
                <li>Trade Me Insurance</li>
                <li>Holiday Homes</li>
                <li>FindSomeone</li>
                <li>MotorWeb</li>
                <li>homes.co.nz</li>
            </ul>
        </nav>

        <div className={style.whiteNav}>
            <img className={style.logo} src="Logo.png" onClick={() => navigate('/')}/>
            <div className={style.whiteNavLeft}>
                <p className={style.browse}>Browse</p><img className={style.whiteArrow} src="ArrowDropDownGray.png"/>
                <div className={style.vl}></div>
                <img className={style.searchIcon} src="SearchIcon.png"/>
                <input placeholder="Search all of Trade Me" type="search" id="gsearch" name="gsearch"/>
            </div>
            <div className={style.whiteNavRight}>
                <ul>
                    <li><img src="WatchLaterIcon.jpg"/>Watchlist</li>
                    <li><img src="FavouriteIcon.jpg"/>Favourites</li>
                    <li><img src="EditIcon.jpg"/>Start a listing</li>
                    <li>My Trade Me<img src="AccountIcon.png"/></li>
                </ul>
            </div>
        </div>

        <nav className={style.redNav}>
            <div className={style.redNavLeft}>
                <ul>
                    <li>Browse Marketplace<img src="ArrowDropDown.png"></img></li>
                    <li>Stores</li>
                    <li>Deals</li>
                    <li>Book a courier</li>
                </ul>
            </div>
            <div className={style.redNavRight}>
                <ul>
                    <img src="CompareIconWhite.png"/>
                    <li>Compare List</li>
                    <li>List an item</li>
                </ul>
            </div>
        </nav>

        <div className={style.homeMarketPlace}>
            <p>Home / Marketplace</p>
        </div>
    </div>
    </>
  )
}
