import React from 'react'
import"./Topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Topbar() {
  return (
    <div className= "topbar">
        <div className="topbarWrapper">
            <div className='topLeft'>
                <span className='logo'>Grypto</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon/>
                    <span className="topIconBadge">20</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon/>
                   
                </div>
                <img src="https://www.laughingplace.com/w/wp-content/uploads/2017/05/unnamed-6-696x462.jpg" alt="" className="topAvatar"/>
            </div>
        </div>
    </div>
  )
}
