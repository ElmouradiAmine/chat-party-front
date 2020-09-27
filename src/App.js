import React, { useState ,useEffect} from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Connection from "./components/Connection/Connection";
import Chat from "./components/Chat/Chat";

import "./App.css";
// const ENDPOINT = "https://chat-app-backend-2020.herokuapp.com/";
const ENDPOINT = "127.0.0.1:8080";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [userData, setUserData] = useState({});
  const [count, setCount] = useState(0);


  const fetchCount = async () => {
    const response = await fetch(
      ENDPOINT + "count"
    );
    const count = await response.json();
      setCount(count);
  };




  let main;

  if (!isConnected) {
    main = (
      <Connection
        onSubmit={(data) => {
          setUserData(data);
          setIsConnected(true);
        }}
      />
    );
  } else {
    main = <Chat user={userData} fetchCount={fetchCount} />;
  }


  useEffect(() => {
    fetchCount();
  }, )
  return (
    <div className="App">
      <Header count={count} />

      {main}

      <Footer />
    </div>
  );
}

export default App;
