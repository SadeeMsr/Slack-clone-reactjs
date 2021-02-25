import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { sidebarItemsData } from '../data/SidebarData'
import { sidebarChannelListsData } from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add'

function Sidebar() {
    return (
        <div id="wrap-sidebar">
            <div id="wrap-workSpace">

                <div id="sidebar-name">
                    Programming-Hero
                </div>
                <div id="sidebar-NewMassage">
                    <AddCircleOutlineIcon />
                </div>

            </div>
            <div id="Main-Channels">
                {
                    sidebarItemsData.map(item => {
                        return (
                            <div id="MainChannels-Item">
                                {item.icon}
                                {item.text}
                            </div>
                        )
                    })
                }
            </div>
            <div id="channels-wrap">
                <div id="newChannels-wrap">
                    <div>
                        Channels
                    </div>
                        <AddIcon />
                </div>
                <div id="channelLists">
                {
                    sidebarChannelListsData.map(channels => {
                        return (
                            <div id="Channels-Item">
                                {channels}
                            </div>
                        )
                    })
                }
                </div>
 
            </div>

        </div>
    )
}

export default Sidebar
