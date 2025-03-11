const firstElement = document.getElementById("first");
const secondElement = document.querySelector(".custom-class");
const thirdElement = document.querySelector("p:nth-of-type(3)");

firstElement.style.color = "red";
firstElement.style.backgroundColor = "yellow";
firstElement.style.fontSize = "25px";
firstElement.style.fontWeight = "bold";

secondElement.style.color = "blue";
secondElement.style.backgroundColor = "gray";
secondElement.style.fontSize = "15px";
secondElement.style.fontStyle = "italic";

thirdElement.style.color = "green";
thirdElement.style.backgroundColor = "pink";
thirdElement.style.fontSize = "20px";
thirdElement.style.textDecoration = "underline";
