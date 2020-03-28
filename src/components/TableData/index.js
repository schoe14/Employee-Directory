import React from "react";
import SortTypes from "../../utils/SortTypes";
import "./style.css";

function TableData(props) {
    // console.log("combined " + props.sortMethod + props.sortCategory);
    let combined = props.sortMethod + props.sortCategory;
    return props.employees.sort(SortTypes[combined].fn).map(employee => {
        const { id, name, email, position, team } = employee
        return (
            <tr key={id}>
                <td key={id}>{id}</td>
                <td key={name}>{name}</td>
                <td id="email" key={email}>{email}</td>
                <td key={position}>{position}</td>
                <td key={team}>{team}</td>
            </tr>
        );
    });
}

export default TableData;