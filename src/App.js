import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ConnectionForm from "./components/Connection/Connection";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header></Header>

      {/* Main content */}
      <ConnectionForm></ConnectionForm>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
