import React from 'react'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        < div id="chatBox-wrap">

            <div id="chatHeader-wrap">
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

            <div id="message-container">
                <ChatMessage />
            </div>
            <ChatInput />
        </div>
    )
}

export default Chat

