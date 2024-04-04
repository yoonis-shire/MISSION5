import style from "./SearchPage.module.css";
import React from 'react';
import Header from "../../components/Header";
import ResultsBar from "../../components/ResultsBar";
import Product from "../../components/Product";
import FilterBar from "../../components/FilterBar";
import Footer from "../../components/Footer";

function SearchPage() {
  return (
    <>
      <div className={style.searchPage}>
          <Header/>
          <ResultsBar/>
          <FilterBar/>
          <Product/>
          <Footer/>
      </div>
    </>
  );
}

export default SearchPage;