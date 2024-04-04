import Bid from './Bidding.module.css';
import Image from '../../public/2x Adairs Bedside Lamps.png';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import axios from "axios"



function Bidding() {

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

    /*SHIPPING BTNS*/
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    /*Payment BTNS*/
    const [isPressed, setIsPressed] = useState(false);

    const EmailClick = () => {
        setIsPressed(!isPressed);
    };

    /*Payment BTNS*/
    const [isPressedd, setIsPressedd] = useState(false);

    const PaymentClick = () => {
        setIsPressedd(!isPressedd);
    };

    /* INPUT - USER_BID  */
    const [USER_BID, setUSER_BID] = useState('');

    const handleBidChange = (event) => {
    const inputValue = event.target.value;
    // Check if the input value is a valid number AND less than a billion
    if (!isNaN(inputValue) && inputValue < 1000000000) {
        setUSER_BID(inputValue);
    }
    }; 

    /*DELAYED TIME - 3 MINS*/
    const [initialTime] = useState(() => {
        const currentTime = new Date();
        currentTime.setMinutes(currentTime.getMinutes() - 3); // Subtract 3 minutes
        return currentTime;
    });

    // Format initial time to display in "hh:mm am/pm" format
    const formattedTime = initialTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    const navigate = useNavigate();


    /*-----------------------------------CODE START-------------------------------------------------- */


    return (
    <>
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
    <Row className="justify-content-center">
    <Col xs={12} md={8} lg={6}>

    <div className={`${Bid['main']} ${Bid['custom-font']}`}>

        {/*----------SECTION1--------------*/}

        <div className={Bid['SECTION1']}>

            <div className={Bid['S1-left']}>
                <h2 className={Bid['left-info']}>Current Bid</h2>
                <p className={Bid['left-info']}>Reserve met</p>
            </div>

            <div className={Bid['S1-middle']}>
            {bids.map((bids, index) => (
                <h2 className={Bid['CurrentBid-info']}>${bids.buyValue}</h2>
            ))}
            </div>

            <div className={Bid['S1-right']}>

                {/* BACKEND INTEGRATION */}

                {bids.map((bids, index) => (
                <p className={Bid['CurrentBid-info']}>{bids.user}</p>
                ))}


                <p>{formattedTime}</p> {/* Display current time */}
            </div>

        </div>

        {/*----------SECTION2--------------*/}

        <div className={Bid['SECTION2']}>
            <div className={Bid['S2-left']}>
                <h3>Place a bid</h3>
            </div>

            <div className={Bid['S2-right']}>
                <input className={Bid['BidBox']} 
                    value={USER_BID} onChange={handleBidChange} placeholder="Place Bid" />
            </div>
        </div>

        {/*----------SECTION3--------------*/}

        <div className={Bid['section3']}>
            <div>
                <h3>Shipping</h3>
            </div>

            {/*ONLY ALLOWS TO CHECK ONE SHIPPING OPTION*/}

            <div>
                <div className={Bid['options']} onClick={() => handleButtonClick('button1')}>
                    <input className={`${Bid['btn']} ${selectedButton === 'button1' ? Bid['selected'] : ''}`} type="button" />
                    <p className={Bid['fees']}>Nationwide, economy <strong>$10.00</strong></p>
                </div>
            </div>

            <div>
                <div className={Bid['options']} onClick={() => handleButtonClick('button2')}>
                    <input className={`${Bid['btn']} ${selectedButton === 'button2' ? Bid['selected'] : ''}`} type="button" />
                    <p className={Bid['fees']}>Nationwide, rural, economy <strong>$10.00</strong></p>
                </div>
            </div>

            <div>
                <div className={Bid['options']} onClick={() => handleButtonClick('button3')}>
                    <input className={`${Bid['btn']} ${selectedButton === 'button3' ? Bid['selected'] : ''}`} type="button" />
                    <p className={Bid['fees']}>Pickup <strong>Free</strong></p>
                </div>
            </div>

            <div>
                <h3>Reminders</h3>
                <div className={Bid['options']}>
                    <input className={isPressed ? `${Bid['btn-square']} ${Bid['selected']}` : Bid            ['btn-square']} 
                        type="button"
                    onClick={EmailClick} />

                    <p className={Bid['fees']}>Email me if I'm outbid</p>
                </div>
            </div>

            <div>
                <h3>Payment</h3>
                <div className={Bid['options']}>
                <input className={isPressedd ? `${Bid['btn-square']} ${Bid['selected']}` : Bid            ['btn-square']} 
                        type="button"
                    onClick={PaymentClick} />                
                    <p>I accept the terms of this bid and will complete this purchase if I win</p>
                </div>
                <p>Seller accepts payment by Ping, NZ Bank Deposit</p>
            </div>
            
        </div>

        {/*----------SECTION4--------------*/}

        <div className={Bid['SECTION4']}>
            <div>
                <h3>Your Current Bid Is: ${USER_BID}</h3>

                {/* CHANGE TO NEW WINDOW SAYING UR BID HAS BEEN PLACED */}


                <div onClick={() => navigate('/BidPlaced')}>
                    <button className={Bid['bid-btn']}>Place Bid</button>
                </div>


                {/*----------NEED TO SOLVE REDIRECTING--------------*/}
                
            </div>
        </div>
    </div>

    {/*----------SECTION5--------------*/}

    
    <div className={`${Bid['SECTION5']} ${Bid['custom-font']}`}>
        {bids.map((bids, index) => (
            
            <div key={index} className={Bid['Prod']}>
        
                <img className={Bid['Adairs']} src={`/${bids.name}.png`} alt={bids.name}/>

                <div className={Bid['ProdInfo']}>
                    <h1>{bids.name}</h1>
                    <h3>Current Bid: ${bids.buyValue}</h3>
                    <p >
                        {bids.location}, 
                        Closes {bids.closeDate}
                    </p>  
                </div>          
            </div> 
        ))}

    </div>


    </Col>
    </Row>
    </Container>

    </>

    ); 
}

export default Bidding;

export { Bidding };



