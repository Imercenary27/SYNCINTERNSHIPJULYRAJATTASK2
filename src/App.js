import React, { useEffect, useState } from 'react';
import { firestore } from './firebase';
import "./App.css"

function Messenger({ firebase }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [username,setUsername]=useState("")

  useEffect(() => {
    const unsubscribe = firestore
      .collection('messages')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        const messagesData = snapshot.docs.map((doc) => doc.data());
        setMessages(messagesData);
        setUsername(localStorage.getItem("name"))
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSendMessage = () => {
    firestore.collection('messages').add({
      username,
      text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setText('');
  };

  return (
    <>
    <div className='wholeback'>
      <div>
        Set Username as:
        <input  type='string' placeholder='Enter Username' onChange={e => setUsername(e.target.value)}></input>
        <button onClick={localStorage.setItem("name",username)}>Enter</button>
      </div>
      <div className='mainheader'>
      <h1>Messenger App</h1>
      </div>
    <div className='textboxx'>
      
        {messages.map((message, index) => (
          <div className='textbox' >
            Sent By:
            {message.username}<br></br>
            {message.text}
            </div>
        ))}
              
              </div>
              <div className='enterbox'>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleSendMessage}>Send</button>
      </div>
    </div></>
  );
}

export default Messenger;
