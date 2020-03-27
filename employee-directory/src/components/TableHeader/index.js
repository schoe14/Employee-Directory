import React from "react";
import SortTypes from "../../utils/SortTypes";
import "./style.css";

function TableHeader(props) {
    let header = props.columns;
    return header.map((key, index) => {
        if (key === "id" || key === "name" || key === "team") {
            return (
                <th key={index} className={key}>
                    {key.toUpperCase()}
                    <span>  </span>
                    <button className={`btn btn-light sort-btn`} type="button" onClick={props.handleBtnClick}>
                        <i className={`fa fa-${SortTypes[props.sortMethod + props.sortCategory].class}`} aria-hidden="true"></i>
                    </button>
                </th>
            );
        } else {
            return (
                <th key={index} className={key}>{key.toUpperCase()}</th>
            );
        }

    });

}

export default TableHeader;