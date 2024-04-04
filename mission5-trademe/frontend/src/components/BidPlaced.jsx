import Placed from './BidPlaced.module.css';
import Image from '../../public/GreenTick.png';
//import Lamp from '../../public/2x Adairs Bedside Lamps.png';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

import axios from "axios"



function BidPlaced() {

    const [bids, setBids] = useState([]);

    useEffect(() => {
      axios
        .get('http://localhost:5000/api/bid')
        .then(res => {
          console.log(res?.data);
          setBids(res?.data?.data);
        });
    }, []); 
  
    console.log(bids);


    return(
    <>

    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
    <Row className="justify-content-center">
    <Col xs={12} md={8} lg={6}>

    <div className={Placed['page']}>
    <div className={Placed['main']}>
    
    {/*----------SECTION1--------------*/}

    <div className={Placed['SECTION1']}>

        <div className={Placed['Success']}>
            <img src={Image} />
            <h2 className={Placed['PlaceBid']}>Successfully Placed Bid</h2>
        </div>

    </div>

    {/*----------SECTION2--------------*/}

    {/* <div className={Placed['SECTION2']}>

        <div className={Placed['S2-left']}>
            <h2 className={Placed["S2-left-info"]}>Current Bid</h2>
            <p className={Placed["S2-left-info"]}>Reserve met</p>
        </div>

        <div className={Placed['S2-right']}>
            <h2 className={`${Placed['CurrentBid-info']} ${Placed['Bid-Price']}`}>NUMBER REMOVE</h2>
            <p className={Placed['CurrentBid-info']}>FrootLoop (5)</p>
            <p>07:43pm</p>
        </div>

    </div> */}

    </div>
    
    {/*----------SECTION3--------------*/}

    <div className={Placed['SECTION3']}>
        <div className={Placed['S3-bid']}>

        {bids.map((bids, index) => (
            <h1 className={`${Placed['bid-bottom']} ${Placed['S3-autoBid-info']}`}>Bidding Closes {bids.closeDate}</h1>
        ))}
        
        </div>

    </div>

    {/*----------SECTION4--------------*/}

    <div className={Placed['SECTION4']}>

        {bids.map((bids, index) => (
            <div key={index} className={Placed['Prod']}>
        
                <img className={Placed['Adairs']} src={`/${bids.name}.png`} alt={bids.name}/>

                <div className={Placed['ProdInfo']}>
                    <h1>{bids.name}</h1>

                    <p >
                        {bids.location}, 
                        Closes {bids.closeDate}
                    </p>  
                </div>          
            </div> 
        ))}
    </div>

    </div>

    </Col>
    </Row>
    </Container>


    </>
    )
}

export default BidPlaced;