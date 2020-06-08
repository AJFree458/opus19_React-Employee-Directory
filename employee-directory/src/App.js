import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Table from "./components/Table"
import TableData from "./components/TableData";
import employee from "./employee.json";


class App extends Component {

  state = {
    employee,
    searchTerm: "",
  };
  
  
    // Sort columns
  clickSorter = (category) => {
    const employee = this.state.employee.sort(function (a, b) {
      var textA = a[category];
      var textB = b[category];
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  
    this.setState({ employee });
  };

  render() {
    return (
      <div className={"container"}>
        <Jumbotron />
        <Search />
          <Table>
            <thead className="thead-dark">
              <th>ID</th>
              <th  onClick={() => this.clickSorter("firstName")}>
                    <button className="tableButton">First Name</button></th>
              <th onClick={() => this.clickSorter("lastName")}>
                    <button className="tableButton">Last Name</button></th>
              <th>Role</th>
              <th>Department</th>
              <th>Office</th>
              <th>Telephone</th>
            </thead>
            <tbody>
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
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
