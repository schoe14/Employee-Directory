import React from "react";
import sortTypes from "../../utils/sortTypes";
import "./style.css";

function TableHeader(props) {
    let header = Object.keys(props.header[0]);
    console.log("combined " + props.sortMethod + props.sortCategory);

    return header.map((key, index) => {
        if (key === "id" || key === "name") {
            return (
                <th key={index} className={key}>
                    {key.toUpperCase()}
                    <span>  </span>
                    <button className={`sort-btn`} onClick={props.handleBtnClick}>
                        {/* {`fas fa-${props.sortMethod}`} */}
                        <i className={`fa fa-${sortTypes[props.sortMethod + props.sortCategory].class}`} aria-hidden="true"></i>
                        {/* {sortTypes[props.sortMethod].class} */}
                        {/* {sortTypes[props.sortMethod + props.sortCategory].class} */}
                    </button>
                </th>
            );
        } else {
            return (
                <th key={index} className={key}>{key.toUpperCase()}
                    {/* <button onClick={props.handleBtnClick}>
                    {sortTypes[props.sortMethod + props.sortCategory].class}
                    </button> */}
                </th>
            );
        }
    });

}

export default TableHeader;