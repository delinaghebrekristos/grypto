import React, { Component } from "react";
import Topbar from "./components/Topbar";
//import './Wallet.css';
import history from "./history";

export default class Wallet{ 
render(){
return(
   <body>
   <div>
      <Topbar></Topbar>
      <h2>Wallet</h2>
      <section>
      <table name="walletTable">
      <tr>
    <th>Purchase</th>
    <th>CryptoType</th>
    <th>Total (USD)</th>   
  </tr>
  <tr>
    <td>Green NFT</td>
    <td>Chia</td>
    <td>$100.00</td>
  </tr>
  <tr>
    <td>Microsoft Office</td>
    <td>SolarCoin</td>
    <td>$107.00</td>
  </tr>
      </table>
      </section>
   </div> 
   </body>
)

}


}