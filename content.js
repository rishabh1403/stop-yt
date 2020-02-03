
const date = new Date();
if (date.getDay() === 0 || date.getDay === 6) {
  if (date.getDay() === 6 && date.getHours() >= 20) {
    console.log("allowing")
  } else {
    var msg = `
    <h1>Nope!!!</h1>
`;

    document.write(msg)
  }
} else {
  var msg = `
    <h1>Nope!!!</h1>
`;

  document.write(msg)
}
