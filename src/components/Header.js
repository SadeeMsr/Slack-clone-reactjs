import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header({user,signOut}) {
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
                    {user.name}
                </div>
                <div onClick={signOut} class="user-image">
                    <img  src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} width="100%" height="100%" alt="user" />
                </div>
            </div>
        </div>
    )
}

export default Header
