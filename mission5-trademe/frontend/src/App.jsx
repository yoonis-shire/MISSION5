import './App.css'
import { Routes, Route } from "react-router-dom"

// Search Pages
import SearchPage from "./pages/Search/SearchPage.jsx";

// Products Pages
import ProductPage from "./pages/Product/ProductPage.jsx";
import BiddingModal from "./pages/Product/BiddingModal.jsx";
import BidPlacedModal from "./pages/Product/BidPlacedModal.jsx";

function App() {

  return (
    <>    
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/product" element={<ProductPage />}/>
        <Route path="/bidding" element={<BiddingModal />}/>
        <Route path="/BidPlaced" element={<BidPlacedModal />}/>
      </Routes>
    </>
  )
}

export default App
