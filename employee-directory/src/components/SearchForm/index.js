import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function SearchForm(props) {
  let header = props.columns.filter((ele) => ele === "position" || ele === "name" || ele === "team");
  return (
    <Row>
      {header.map((key, index) => {
        return <Col size="md-4">
          <form className="search">
            <div className="form-group">
              <label htmlFor="language">Search by {key}</label>
              <input
                value={props.search}
                onChange={props.handleInputChange}
                name={key}
                list={`${key}List`}
                type="text"
                className="form-control"
                placeholder={key}
                id={key}
              />
            </div>
          </form>
        </Col>
      })}
    </Row>
  )
}

export default SearchForm;
