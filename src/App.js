import logo from './logo.svg';
import './App.css';
import {set, ref, onValue} from "firebase/database";
import { database } from './fireb';

function App() {
  function writeUserData(userId, name, email, imageUrl) {
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

  function writeChatData(chatId, senderId, messege, receiverId) {
    set(ref(database, 'chat/' + chatId), {
       sender: senderId,
      messege: messege,
      receiver: receiverId,
    });
  }

  const userRef = ref(database,);
onValue(userRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

  writeUserData(
    "4",
    "arijit",
    "mitraarijit30@gmail.com",
    "https://facebook.com"
  );
  
  writeChatData(
    "3",
    "3",
    "Get Started",
    "1"
  );
  writeChatData(
    "2",
    "2",
    "Hello World",
    "3"
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
