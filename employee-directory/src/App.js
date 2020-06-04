import React from 'react';
import './App.css';
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Table from "./components/Table";


function App() {
  return (
    <div>
        <Container>
          <Jumbotron />
          <Search />
          <Table />
        </Container>
      </div>
  );
}

export default App;
