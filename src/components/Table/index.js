import React from "react";
import "./style.css";

function Table(props) {
    return (
        <table id="employeesTable">
            <tbody>{props.children}</tbody>
        </table>
    );
}

export default Table;