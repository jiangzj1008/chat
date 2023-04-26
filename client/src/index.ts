// import { io } from "socket.io-client";

var socket = io();

var button = document.querySelector("button");
var input = document.getElementById("input") as HTMLInputElement;

button.addEventListener("click", function (e) {
  console.log("submit");
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

console.log(123);
