import React from 'react'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
    return (
        < div id="chatHeader-wrap">
            <div id="chat-header">
                <div id="chat-channel">
                    <div id="chatChannel-Name">
                        # Spider-Man
                   </div>
                    <div id="chatChannel-Info">
                        Company-wide announcements and work-based matters
                   </div>
                </div>
                <div id="ChannelDetails">
                    <div>
                        Details
                   </div>
                    <InfoOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat

