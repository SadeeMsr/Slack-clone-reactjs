import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div id="wrap-header">

            <div id="first-part">
                <AccessTimeIcon />
                <div id="search-container">
                    <div id="search">
                        <input id="search-input" type="text" placeholder="Search..."></input>
                    </div>
                </div>
                <HelpOutlineIcon />
            </div>


            <div id="second-part">
                <div id="name">
                    Sadee
                </div>
                <div id="user-image">
                    <img src="https://img.pngio.com/man-face-logo-men-face-logo-design-png-image-transparent-png-men-logo-png-820_600.png" width="100%" height="100%"></img>
                </div>
            </div>
        </div>
    )
}

export default Header
