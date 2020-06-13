
const main = document.querySelector('#main');

const fooDiv = document.createElement("div");
fooDiv.innerText = "Hello Valaki";

main.innerHTML = fooDiv.outerHTML;