import React from "react";
import "./style.css";

function SearchForm(props) {
  // let header = props.columns;
  let header = props.columns.filter((ele) => ele === "position" || ele === "name" || ele === "team");
  return header.map((key, index) => {
    // if (key === "position" || key === "name" || key === "team") {
      return (
        <form className="search">
          <div className="form-group">
            <label htmlFor="language">Search {key}:</label>
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name={key}
              list={key}
              type="text"
              className="form-control"
              placeholder={`Search employee by ${key}`}
              id={key}
            />
          </div>
        </form>
      );
    // }
  });

  // <form className="search">
  //   <div className="form-group">
  //     <label htmlFor="language">Search:</label>
  //     <input
  //       value={props.search}
  //       onChange={props.handleInputChange}
  //       name="name"
  //       list="name"
  //       type="text"
  //       className="form-control"
  //       placeholder="Type in a search to begin"
  //       id="name"
  //     />
  //   </div>
  // </form>

}

export default SearchForm;
