const getKeyName = (keyValue) => {
  switch (keyValue) {
    case " ":
      return "Space";
    default:
      return keyValue;
  }
};

const onKeyDown = (event) => {
  const keyCode = event.which || event.keyCode;
  const keyValue = event.key;

  document.body.innerHTML = `
    <h1>${keyCode}</h1>
    <kbd>${getKeyName(keyValue)}</kbd>
  `;

  console.log(event);
};

document.body.innerHTML = `
    <h1>Press any key</h1>
    <span><strong>Tips:</strong> See console log for key detail ;)</span>
`;

document.body.addEventListener("keydown", (event) => onKeyDown(event));
