import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./FeaturedInfo.css";
import treeNFT from "../../images/nft_tree.png";
import tree1 from "../../images/tree_1.png";
import tree2 from "../../images/tree_2.png";
export default function FeaturedInfo() {
  return (
    <div className="featured">
        
        <div className='featuredBalance'>
            <div className='mainItem'>
                <span className="featuredAssetBal">Assets Balance</span>
                <div className="featuredCryptoContainer">
                    <span className="featuredBalMoney">$1,500 </span>
                    <span className="featuredMoneyRate">
                        -11.4%<ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Within the last hour</span>
            </div>

            <div className='featuredItem'>
                <span className="featuredTitle">1. Cardano </span>
                <div className="featuredCryptoContainer">
                    <span className="featuredMoney">$0.95 </span>
                    <span className="featuredMoneyRate">
                        -22%<ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Within the last hour</span>
            </div>

            <div className='featuredItem'>
                <span className="featuredTitle">2. IOTA </span>
                <div className="featuredCryptoContainer">
                    <span className="featuredMoney">$0.0795 </span>
                    <span className="featuredMoneyRate">
                        -11.4<ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Within the last hour</span>
            </div>

        </div>
        <div className="featuredTrees">
        <span className="featuredForestTitle">My Forest</span>

            <div className='featuredItem'>
                <div className='featuredForest'>
                    <img src={tree1} alt="tree1" className='featuredTree'/>
                    <img src={tree2} alt="tree2" className='featuredTree'/>
                </div>
                

            </div>
        </div>
        <div className="featuredAssets">
            <span className="featuredAssetTitle">Assets in Wallet</span>

            <div className='featuredItem'>
                <span className="featuredTitle"> 1. TreSNFT </span>
                <div className="featuredCryptoContainer">
                    <span className="featuredMoney">$200.95 </span>
                    <span className="featuredMoneyRate">
                        +2.4%
                    </span>
                </div>
                <span className="featuredSub">Within the last hour</span>
            </div>
            
            <div className='featuredItem'>
                <span className="featuredTitle"> 2. SoiltSNFT </span>
                <div className="featuredCryptoContainer">
                    <span className="featuredMoney">$100.03 </span>
                    <span className="featuredMoneyRate">
                        -1.4%
                    </span>
                </div>
                <span className="featuredSub">Within the last hour</span>
            </div>

        </div>
    </div>
  )
}
