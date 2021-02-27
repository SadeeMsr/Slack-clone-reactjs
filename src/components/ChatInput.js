import React, { useState } from 'react'
import SendIcon from '@material-ui/icons/Send';


function ChatInput({sendMessage}) {

    const [input, setInput] = useState("");


    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input)
        setInput("")
    }

    return (
        <div id="chatInput-wrap" >
            <div id="messageInput-wrap">
                <form>
                    <input type="submit" onChange={(e)=>setInput(e.target.value)} type="text"  value={input} placeholder="message here...."/>
                    <div  onClick={send} id="sendButton">
                        <SendIcon style={{color:"#D9D9D9"}} />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default ChatInput

