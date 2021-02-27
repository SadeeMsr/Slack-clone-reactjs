import './App.css';
import {useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import { auth, provider } from "./firebase";

function App() {
  
  const [rooms,setRooms] = useState([])
  const [user,setUser]   = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = ()=>{
    db.collection('rooms').onSnapshot((snapshot)=>{
      setRooms(snapshot.docs.map(doc => {
        return {id: doc.id , name: doc.data().name};
      }))
    })
  };

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(()=>{
    getChannels();
  },[]);

  console.log("user in app state",user);
  
  return (
    <div className="App">
      <Router>
        {
          !user ? <Login setUser={setUser} />:
        
        <div className="wrap">
          <Header signOut={signOut} user={user} />
          <main>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/room/:channelId">
                <Chat user={user} />
              </Route>
                  <Route path="/">
                      Select or Create Channel
                  </Route>
            </Switch>
          </main>
        </div>
        }
      </Router>
    </div>
  );
}

export default App;


