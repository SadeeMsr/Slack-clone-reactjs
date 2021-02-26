import './App.css';
import {useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'

function App() {
  
  const [rooms,setRooms] = useState([]);

  const getChannels = ()=>{
    db.collection('rooms').onSnapshot((snapshot)=>{
      setRooms(snapshot.docs.map(doc => {
        return {id: doc.id , name: doc.data().name};
      }))
    })
  };

  useEffect(()=>{
    getChannels();
  },[]);

  console.log(rooms);
  
  return (
    <div className="App">
      <Router>
        <div className="wrap">
          <Header />
          <main>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;


