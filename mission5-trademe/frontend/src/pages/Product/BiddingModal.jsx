import React from 'react';
import style from "./BiddingPage.module.css";
import Bidding from "../../components/Bidding";
import Header from "../../components/Header";
import Footer from '../../components/Footer';

function BiddingModal() {
  return (
    <>
    <div className={style.BiddingPage}>
      <Header />
      <Bidding/>
      <Footer />
    </div>
    </>
  );
}

export default BiddingModal;