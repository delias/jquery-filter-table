document.addEventListener("DOMContentLoaded", () => {
  $.getJSON("../public/race.json", function(result) {
    showlist(result);

    document.querySelectorAll(".gender-filter").forEach(button => {
      button.onclick = () => {
        // event.preventDefault(e);
        showlist(result.filter(item => item.Sexo === button.dataset.gender));
        return false;
      };
    });
  });
});

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
