import React from 'react'
import SendIcon from '@material-ui/icons/Send';


function ChatInput() {
    return (
        <div id="chatInput-wrap" >
            <div id="messageInput-wrap">
                <form>
                    <input type="text" placeholder="message here...."/>
                    <div id="sendButton">
                        <SendIcon style={{color:"#D9D9D9"}} />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default ChatInput

