import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import sortTypes from "../../utils/sortTypes";
import Container from "../../components/Container";
import Table from "../../components/Table"
import TableData from "../../components/TableData";
import TableHeader from "../../components/TableHeader";
import "./style.css";

// import Hero from "../components/Hero";
// import Row from "../components/Row";
// import Col from "../components/Col";

function Home() {
  const [employees, setEmployees] = useState([{
    // excitementLevel: 0,
    // lifeLongLearner: "true",
    // mood: "",
    // name: ""
  }]);
  const [sortMethod, setSortMethod] = useState("default");
  const [sortCategory, setSortCategory] = useState("id");

  useEffect(() => {
    API.getEmployeeList.then((res) => {
      console.log(res);
      setEmployees(res);
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

  // const handleInputChange = event => {
  //   setSearch(event.target.value);
  // };
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


        {/* <table id="employees">
        <tbody> */}

        <Table>
          <tr><TableHeader header={employees} handleBtnClick={onSortChange} sortMethod={sortMethod} sortCategory={sortCategory} /></tr>
          <TableData employees={employees} sortMethod={sortMethod} sortCategory={sortCategory} />
        </Table>
        {/* </tbody>
      </table> */}


        {/* </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Home;
