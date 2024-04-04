import React from 'react'
import style from './FilterBar.module.css'

export default function FilterBar() {
  return (
    <div className={style.filterBox}>
        <p className={style.filters}>Filters</p>

        <p className={style.price}>Price</p>
        <hr className={style.hr1}></hr>
        <ul className={style.priceFilters}>
            <li className={style.min}>$<input placeholder="Min" type="search" id="price" name="price"/></li>
            <li className={style.max}>$<input placeholder="Max" type="search" id="price" name="price"/></li>
        </ul>
        <div className={style.go}>Go</div>

        <p className={style.regions}>Regions</p>
        <p className={style.selectAll}>Select All</p>
        <hr className={style.hr2}></hr>
        <div className={style.regionRadio}>
            <label className={style.container}>Northland
                <input type="radio" name="region"/>
                <span className={style.circle}></span>
            </label>
            <label className={style.container}>Auckland
                <input type="radio" name="region"/>
                <span className={style.circle}></span>
            </label>
            <label className={style.container}>Waikato
                <input type="radio" name="region"/>
                <span className={style.circle}></span>
            </label>
        </div>
        <p className={style.viewAll}>+ View All</p>

        <p className={style.condition}>Condition</p>
        <hr className={style.hr3}></hr>
        <div className={style.conditionRadio}>
            <label className={style.container}>New
                <input type="radio" name="condition"/>
                <span className={style.circle}></span>
            </label>
            <label className={style.container}>Used
                <input type="radio" name="condition"/>
                <span className={style.circle}></span>
            </label>
        </div>

        <p className={style.status}>Status</p>
        <hr className={style.hr4}></hr>
        <div className={style.statusRadio}>
            <label className={style.container}>Bid Available
                <input type="radio" name="status"/>
                <span className={style.circle}></span>
            </label>
            <label className={style.container}>Fixed Price
                <input type="radio" name="status"/>
                <span className={style.circle}></span>
            </label>
        </div>

        <p className={style.seller}>Seller</p>
        <hr className={style.hr5}></hr>
        <div className={style.sellerRadio}>
            <label className={style.container}>Verified
                <input type="radio" name="seller"/>
                <span className={style.circle}></span>
            </label>
            <label className={style.container}>Top Star
                <input type="radio" name="seller"/>
                <span className={style.circle}></span>
            </label>
        </div>

        <p className={style.shipping}>Shipping Method</p>
        <hr className={style.hr6}></hr>
        <div className={style.shippingRadio}>
            <label className={style.container}>Express
                <input type="radio" name="shipping"/>
                <span className={style.circle}></span>
            </label>
            <label className={style.container}>Collect
                <input type="radio" name="shipping"/>
                <span className={style.circle}></span>
            </label>
        </div>

    </div>  
    )
}
