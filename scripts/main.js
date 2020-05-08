const onKeyDown = (event) => {
  const keyCode = event.which || event.keyCode;
  const keyValue = event.key;
//   console.log(event);
  document.body.innerHTML = `
    <h1>${keyCode}</h1>
    <span>${keyValue}</span>
`
};

document.body.innerHTML= `<h1>Press any key</h1>`
document.body.addEventListener("keydown", (event) => onKeyDown(event));
