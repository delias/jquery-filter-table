document.addEventListener("DOMContentLoaded", () => {
  $.getJSON("../public/race.json", function(result) {
    showlist(result);
    document.querySelector("#btn_male").onclick = e => listMales(result);
    document.querySelector("#btn_female").onclick = e => listFemales(result);
  });
});

function listMales(result) {
  event.preventDefault();
  let males = result.filter(item => item.Sexo === "M");
  showlist(males);
}

function listFemales(result) {
  event.preventDefault();
  let females = result.filter(item => item.Sexo === "F");
  showlist(females);
}

function showlist(list) {
  let output = "";
  list.forEach(item => {
    output +=
      "<tr><td>" +
      item.Nombres +
      "</td><td>" +
      item.Apellidos +
      "</td><td>" +
      item.Sexo +
      "</td></tr>";
  });
  document.querySelector("#list").innerHTML = output;
}
