import React, { Component } from 'react';
import './App.css';
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Table from "./components/Table";
import employee from "./employee.json";


class App extends Component {

  state = {
    search: "",
    employee,
    order: "asc"
  };

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  sortName = event => {
    let currentEmployees = this.state.employee
    .sort(function(a, b) {
      if(a.name.value < b.name.value) return -1;
      if(a.name.value > b.name.value) return 1;
      return 0;
    })
    this.setState({ employee: currentEmployees });
  }

  render() {
    const filteredEmployees = this.state.employee.filter((employee) => { 
      return employee.name.indexOf(this.state.search) !== -1;
    })

    return (
      <div>
        <Container>
          <Jumbotron />
          <Search 
            handleInputChange={this.handleInputChange}
            sortName={this.sortName}
            sortRole={this.sortRole}
            search={this.state.search} />
          {filteredEmployees.map(employee => (
            <Table
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              role={employee.role}
              contact={employee.contact}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
