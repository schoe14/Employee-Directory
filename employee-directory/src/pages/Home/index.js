import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import Table from "../../components/Table"
import TableData from "../../components/TableData";
import TableHeader from "../../components/TableHeader";
import SearchForm from "../../components/SearchForm";
import "./style.css";

function Home() {
  const [employeesData, setEmployeesData] = useState([{}]);
  const [employees, setEmployees] = useState([{}]);
  const [columns, setColumns] = useState([]);
  const [sortMethod, setSortMethod] = useState("default");
  const [sortCategory, setSortCategory] = useState("id");

  useEffect(() => {
    API.getEmployeeList.then((res) => {
      // console.log(res);
      setEmployeesData(res);
      setEmployees(res);
      setColumns(Object.keys(res[0]));
    });
  }, []);

  const onSortChange = (event) => {
    const currentSort = sortMethod;
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "down";
    else if (currentSort === "default") nextSort = "down";

    setSortMethod(nextSort);
    setSortCategory(event.target.closest("th").classList.value);
    // console.log(event.target.closest("th").classList.value);
  }

  const filterTable = (searchKey, searchBy) => {
    if (searchKey.length < 1) {
      setEmployees(employeesData);
      return;
    }
    let employeesArray = [];
    employeesData.map(employee => {
      let info = employee[searchBy].toLowerCase();
      if (info.includes(searchKey.toLowerCase())) {
        employeesArray.push(employee);
      }
      setEmployees(employeesArray);
      return employeesArray;
    });
  }

  const handleInputChange = event => {
    // console.log("event.target.value: " + event.target.value.toUpperCase())
    // console.log("event.target.id: " + event.target.id)
    filterTable(event.target.value, event.target.id);
  };

  return (
    <div>
      <Container style={{ marginTop: 30, minHeight: "100vh" }}>
        <SearchForm
          handleInputChange={handleInputChange}
          columns={columns}
        />
        <Table>
          <tr><TableHeader columns={columns} handleBtnClick={onSortChange} sortMethod={sortMethod} sortCategory={sortCategory} /></tr>
          <TableData employees={employees} sortMethod={sortMethod} sortCategory={sortCategory} />
        </Table>
      </Container>
    </div>
  );
}

export default Home;
