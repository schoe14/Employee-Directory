import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import Table from "../../components/Table"
import TableData from "../../components/TableData";
import TableHeader from "../../components/TableHeader";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import "./style.css";
// import useFilter from "../../utils/FilterHook";

// import Hero from "../components/Hero";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Home() {
  const [employeesData, setEmployeesData] = useState([{}]);
  const [employees, setEmployees] = useState([{}]);
  const [columns, setColumns] = useState([]);
  const [sortMethod, setSortMethod] = useState("default");
  const [sortCategory, setSortCategory] = useState("id");
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.getEmployeeList.then((res) => {
      console.log(res);
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

    // if (currentSort === "down") nextSort = "up";
    // else if (currentSort === "up") nextSort = "default";
    // else if (currentSort === "default") nextSort = "down";

    setSortMethod(nextSort);
    setSortCategory(event.target.closest("th").classList.value);
    console.log(event.target.closest("th").classList.value);
  }

  const filterTable = () => {
    console.log("search: " + search);
    if (search.length <= 1) {
      setEmployees(employeesData);
      return;
    }
    let employeesArray = [];
    employees.map(employee => {
      // let info = Object.values(employee);
      let info = employee.name.toLowerCase();
      // console.log(employee);
      // console.log(info.toString().toLowerCase());
      // console.log(search.toLowerCase());
      // console.log(info.toString().toLowerCase().split(","));

      if (info.includes(search.toLowerCase())) {
        console.log(info.toString().toLowerCase() + " and " + search.toLowerCase());
        employeesArray.push(employee);
        console.log(employeesArray);
      }
      setEmployees(employeesArray);
      return employeesArray;
    });
  }

  const handleInputChange = event => {
    setSearch(event.target.value);
    filterTable();
  };

  return (
    <div>
      <Container style={{ marginTop: 30, minHeight: "100vh" }}>
        {/* <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12"> */}
        <SearchForm
          handleInputChange={handleInputChange}
          search={search}
          columns={columns}
        />
        <SearchResults search={search} />

        <Table>
          <tr><TableHeader columns={columns} handleBtnClick={onSortChange} sortMethod={sortMethod} sortCategory={sortCategory} /></tr>
          <TableData employees={employees} sortMethod={sortMethod} sortCategory={sortCategory} />
        </Table>

        {/* </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Home;
