import React from "react";
import "./Wallet.css";
import "./Topbar.jsx";
import "./Links.css";
import { Link } from "react-router-dom";


const Wallet = () => {
return (
	<body>
   <div>
   <Link to="/">Dashboard</Link>
   <Link to="/purchase">Make Purchase</Link>
       <h2>Wallet</h2>
      <section>
      <table name="walletTable" class="styled-table">
      <thead>
      <tr>
          
    <th>CryptoCurrency</th>
    <th>Units</th>
    <th>Total (USD)</th>  
    <th>% Change (Daily)</th>    
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Chia</td>
    <td>10<button class="form-btn-small semibold">Edit</button></td>
    <td>$100.00</td>
    <td>+2%</td>
  </tr>
  <tr>
    <td>SolarCoin</td>
    <td>10<button class="form-btn-small semibold">Edit</button></td>
    <td>$107.00</td>
    <td>-0.5%</td>
  </tr>
  <tr>
    <td>BitGreen</td>
    <td>10<button class="form-btn-small semibold">Edit</button></td>
    <td>$720.00</td>
    <td>+4%</td>
  </tr>
  </tbody>
      </table>
<div class="relative fullwidth col-xs-12">  
      <button type="submit" id="submit" name="submit" class="form-btn semibold">Add New CrytoCurrency</button>
      </div> 
      </section>
   </div> 
   </body>
);
};

export default Wallet;