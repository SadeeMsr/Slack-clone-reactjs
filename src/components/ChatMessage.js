import React from 'react'

function ChatMessage({text, name, image,timestamp}) {
    return (
        <div id="chatMessage-wrap">
             <div id="user-Avatar">
                    <img src={image} alt="user" />
            </div>
            <div id="messageContent">
                <div id="user-Name">
                    {name}
                    <span>
                        {new Date(timestamp.toDate()).toUTCString()}
                    </span>
                </div>
                <div id="user-Text">
                    {text}
                </div>
            </div>
            
        </div>
    )
}

export default ChatMessage
