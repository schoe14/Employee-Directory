import React from "react";

// The Math function component accepts a props argument
function Math(props) {

  // Assign value based on the operator
  switch (props.sortCategory) {
    // up: {
    //     class: 'sort-up',
    //     fn: (a, b) => a.id - b.id
    // },
    // down: {
    //     class: 'sort-down',
    //     fn: (a, b) => b.id - a.id
    // },
    // default: {
    //     class: 'sort',
    //     fn: (a, b) => a
    // }
  case "id":
    if(props.sortMethod === "up") {
        return function(a,b) {
            a.id - b.id;
        }
    }
    if(props.sortMethod === "down") {
        return function(a,b) {
            b.id - a.id;
        }
    }
    else {
        return function(a,b) {
           a;
        } 
    }
  case "name":
    if(props.sortMethod === "up") {
        return function(a,b) {
            a.name - b.name;
        }
    }
    if(props.sortMethod === "down") {
        return function(a,b) {
            b.name - a.name;
        }
    }
    else {
        return function(a,b) {
           a;
        } 
    }
  case "email":
    if(props.sortMethod === "up") {
        return function(a,b) {
            a.id - b.id;
        }
    }
    if(props.sortMethod === "down") {
        return function(a,b) {
            b.id - a.id;
        }
    }
    else {
        return function(a,b) {
           a;
        } 
    }
  case "positon":
    if(props.sortMethod === "up") {
        return function(a,b) {
            a.id - b.id;
        }
    }
    if(props.sortMethod === "down") {
        return function(a,b) {
            b.id - a.id;
        }
    }
    else {
        return function(a,b) {
           a;
        } 
    }
  default:
      break;
  }

}

export default Math;
