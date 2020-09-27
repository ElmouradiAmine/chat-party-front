import React, { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Connection from "./components/Connection/Connection";
import Chat from "./components/Chat/Chat";

import "./App.css";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [userData, setUserData] = useState({});

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
    main = <Chat user={userData} />;
  }

  return (
    <div className="App">
      <Header />

      {main}

      <Footer />
    </div>
  );
}

export default App;
