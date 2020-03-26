import React from "react";
import sortTypes from "../../utils/sortTypes";
import "./style.css";

function TableData(props) {
    console.log("combined " + props.sortMethod + props.sortCategory);
    let combined = props.sortMethod + props.sortCategory;
    return props.employees.sort(sortTypes[combined].fn).map(employee => {
        const { id, name, email, position } = employee //destructuring
        return (
            <tr key={id}>
                <td key={id}>{id}</td>
                <td key={name}>{name}</td>
                <td key={email}>{email}</td>
                <td key={position}>{position}</td>
            </tr>
        );
    });
}

export default TableData;