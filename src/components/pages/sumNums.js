import React from "react";
import { Component } from "react";


export default function SumNums() {
    let intOne = prompt("Enter your first number");
    let intTwo = prompt("Enter your second number");
    

    var num1 = parseInt(intOne);
    var num2 = parseInt(intTwo);

    let intTotal = num1 + num2;

    alert("The total is: " + intTotal);
}

