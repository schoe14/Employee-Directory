import React from "react";
import "./style.css";

function Table(props) {
    return (
        <table id="employees">
            <tbody>{props.children}</tbody>
        </table>
    );
}

export default Table;