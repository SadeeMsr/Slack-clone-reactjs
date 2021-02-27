import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { sidebarItemsData } from '../data/SidebarData'
//import { sidebarChannelListsData } from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add'
import db from '../firebase'
import { useHistory } from 'react-router-dom'

function Sidebar(props) {

    const history = useHistory();


    const goToChannel = (id) => {
        if(id){
            console.log(id);
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const promptName = prompt("add new channel name");
        if(promptName){
            db.collection('rooms').add({
                name: promptName
            })
        }

    }

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
                    <AddIcon style={{cursor:"pointer"}} onClick={addChannel} />
                </div>
                <div id="channelLists">
                    {props.rooms.map(channel => {
                        return(
                            <div onClick={()=>goToChannel(channel.id)} id="Channels-Item">
                                #{channel.name}
                            </div>
                            );
                        })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
