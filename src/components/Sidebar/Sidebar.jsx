import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <LineStyleIcon className="sidebarIcon"/>
                        <Link to="/">Home</Link> 
                    </li>
                    <li className="sidebarListItem">
                        <AccountBalanceWalletIcon className="sidebarIcon"/>
                        <Link to="/wallet">Wallet</Link> 
                    </li>
                    <li className="sidebarListItem">
                        <StorefrontIcon className="sidebarIcon"/>
                        <Link to="/purchase">Make Purchase</Link> 
                    </li>
                </ul>

                <h3 className='sidebarTitle'>Notifications</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <MailOutlineIcon className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <ForumIcon className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>

                <h3 className='sidebarTitle'>Marketplace</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <AutoGraphIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <AssessmentIcon className="sidebarIcon"/>
                        Reports
                    </li>
                    <li className="sidebarListItem">
                        <FolderOpenIcon className="sidebarIcon"/>
                        Manage
                    </li>
                </ul>
            </div>  
        </div>

    </div>

  )
}
 