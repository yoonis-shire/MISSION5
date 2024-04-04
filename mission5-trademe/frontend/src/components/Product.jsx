import { useState, useEffect } from 'react'
import React from 'react'
import style from './Product.module.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/products')
      .then(res => {
        console.log(res?.data);
        setProducts(res?.data?.data);
      });
  }, []); 

  console.log(products);

  return (
    <>
      <div className={style.productContainer}>
        {products.map((product, index) => (
          <div key={index} className={style.productBox} onClick={() => navigate('/product')}>
            <img className={style.compare} src="/CompareIcon.png" alt="Compare"></img>
            <img className={style.watchLater} src="/WatchLaterIcon.png" alt="Watch Later"></img>
            <img className={style.productImage} src={`/${product.name}.png`} alt={product.name}></img>
            <h3>{product.name}</h3>
            <p className={style.locationAndTime}>{product.location}, Closes {product.closeDate}</p>
            
            {product.bids !== 0 && (
              <div>
                <p className={style.bids}>{product.bids} Bids</p>
                <p className={style.bidsValue}>${product.bidsValue}</p>
              </div>
            )}


            
            {product.buyValue !== 0 && (
              <div>
                <p className={style.buy}>Buy</p>
                <p className={style.buyValue}>${product.buyValue}</p>
              </div>
            )}
          </div>
      ))}
      </div>
    </>
  )
}
