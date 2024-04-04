import React from 'react';
import style from "./BidPlacedModal.module.css";
import BidPlaced from "../../components/BidPlaced";
import Header from "../../components/Header";
import Footer from '../../components/Footer';

function BidPlacedModal() {
  return (
    <>
    <div className={style.BidPlacedPage}>
      <Header />
      <BidPlaced/>
      <Footer />
    </div>
    </>
  );
}

export default BidPlacedModal;