import React from "react";
import "./makePurchase.css";
import "./Topbar.jsx";
import "./Links.css";
import { Link } from "react-router-dom";


const Purchase = () => {
return (
<div>
<Link to="/">Dashboard</Link>
   <Link to="/wallet">Wallet</Link>
    <h2>Make a Purchase</h2>

<div class="inner contact">
               
                <div class="contact-form">
                 
                    <form id="contact-us" method="post" action="#">
                   
                        <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
                       
                            <input type="text" name="purchaseName" id="purchaseName" required="required" class="form" placeholder="Enter Purchase Name" />
                       
                            <select type="select" name="category" required="required" class="form">    
                                 <option value="0">Select a Purchase Category</option>                            
                                <option value="1">NFT</option>
                                <option value="2">Software</option>
                                <option value="3">Luxury Good</option>                                
                            </select>

                            <select type="select" name="crypto" required="required" class="form">       
                            <option value="0">Select the Crypto Coin</option>                         
                                <option value="1">IOTA</option>
                                <option value="2">Cardano</option>
                                <option value="3">Chia</option>
                                <option value="4">Nano</option>
                                <option value="5">SolarCoin</option>
                                <option value="6">BitGreen</option>                              
                            </select>
                            
                            <input type="float" name="amount" id="amount" required="required" class="form" placeholder="Enter total amount (USD)" />
                        </div>
                     
                        <div class="col-xs-6 wow animated slideInRight" data-wow-delay=".5s">
                            
                            <textarea name="description" id="description" class="form textarea"  placeholder="Enter description.."></textarea>
                        </div>
                  
                        <div class="relative fullwidth col-xs-12">
                        
                            <button type="submit" id="submit" name="submit" class="form-btn semibold">Validate Purchase</button> 
                         </div>
               
                        <div class="clear"></div>
                    </form>

                 
                    <div class="description-message-area">
                 
                        <div class="alert gray-bg description not-visible-message">
                            <strong>Thank You !</strong> Your new tree has been added 
                        </div>
                    </div>

                </div>
            </div>
            </div>
);
};

export default Purchase;