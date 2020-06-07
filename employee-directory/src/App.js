import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Table from "./components/Table";
import TableData from "./components/TableData";
import employee from "./employee.json";


class App extends Component {

  // state = {
  //   search: "",
  //   employee,
  //   order: "asc"
  // };

  // handleInputChange = event => {
  //   console.log(event.target.value);
  //   this.setState({ search: event.target.value });
  // };

  // sortName = event => {
  //   let currentEmployees = this.state.employee
  //   .sort(function(a, b) {
  //     if(a.name.value < b.name.value) return -1;
  //     if(a.name.value > b.name.value) return 1;
  //     return 0;
  //   })
  //   this.setState({ employee: currentEmployees });
  // }

  state = {
    employee
};

sortFunction = () => {
  const employee = this.state.employee.sort((a, b) => (a.name > b.name) ? 1 : -1);
  this.setState({ employee });
}

  render() {
    return (
      <div className={"container"}>
        <Jumbotron />
        <Search 
          handleInputChange={this.handleInputChange}
          sortName={this.sortName}
          sortRole={this.sortRole}
          search={this.state.search} />
          <Table>
            {this.state.employee.map(employee => (
              <TableData
                id={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                role={employee.role}
                department={employee.department}
                office={employee.office}
                telephone={employee.telephone}
                />
            ))}
          </Table>
      </div>
    );
  }
}

export default App;
