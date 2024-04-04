import { useState } from 'react';
import React from 'react'
import style from './ResultsBar.module.css'

export default function ResultsBar() {
    const [sortByMenu, setSortByMenu] = useState(0);

    const handleClick = () => {
         setSortByMenu(!sortByMenu);
    }

  return (
    <>
    <div className={style.resultsBar}>
        <div>
            <h1 className={style.showingResults}>Showing 300+ results for 'lamps'</h1>
        </div>
        <div className={style.favourites}>
            <img src="FavouriteIcon.jpg"/>
            <p>Save search to favourites</p>
        </div>
        <div>
            <p  className={style.sortBy}>Sort By</p>
            <div className={style.dropDown} onClick={handleClick}>
                <button>Price</button>
                <img src="ArrowDropDownBlack.png"></img>
            </div>
            {/* {sortByMenu && (
                <div className={style.dropDownMenu}>
                    <p>Closing date</p>
                    <p>Number of bids</p>
                </div>
            )} */}
        </div>
    </div>
    </>
  )
}
