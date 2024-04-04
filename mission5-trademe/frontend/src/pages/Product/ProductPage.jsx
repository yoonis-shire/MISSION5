import style from "./ProductPage.module.css";
import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom'

function ProductPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.productPage}>
          <Header/>
          <div className={style.bidBtn} onClick={() => navigate('/bidding')}>
            <button>Place Bid</button>
          </div>
          <Footer/>
      </div>
    </>
  );
}

export default ProductPage;