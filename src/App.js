import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainTiles from "./MainTiles";
import "./App.css";

const test = {
  margin: "0 10%",
};

function App() {
  return (
    <div className="app">
      <Container disableGutters="true">
        <Header />
        <MainTiles />
      </Container>
    </div>
  );
}

export default App;
