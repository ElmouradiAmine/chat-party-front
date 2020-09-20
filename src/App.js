import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ConnectionForm from "./components/Connection/Connection";
import Chat from "./components/Chat/Chat";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header></Header>

      {/* Main content */}
      {/* Connection Form */}
      {/* <ConnectionForm></ConnectionForm> */}
      {/* Chat */}
      <Chat></Chat>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
