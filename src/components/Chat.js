import React, { useEffect, useState } from 'react'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from "../firebase"
import { useParams } from 'react-router-dom'
import firebase from "firebase"

function Chat({user}) {

    let { channelId } = useParams();
    const [ channel, setChannel ] = useState();
    const [ messages, setMessages ] = useState([])

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        if(channelId){
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo
            }
            db.collection("rooms").doc(channelId).collection('messages').add(payload);
        }
    }

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        })
    }

    useEffect(()=>{
        getChannel();
        getMessages();
    }, [channelId])

    return (
        < div id="chatBox-wrap">

            <div id="chatHeader-wrap">
                <div id="chat-channel">
                    <div id="chatChannel-Name">
                    # { channel && channel.name}
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
            {
                    messages.length > 0 &&
                    messages.map((data, index)=>(
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
                }
            </div>
            <ChatInput sendMessage={sendMessage} />
        </div>
    )
}

export default Chat

