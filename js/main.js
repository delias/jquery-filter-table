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
  // let output = "";
  document.querySelector("#list").innerHTML = "";

  list.forEach(item => {
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdApellido = document.createElement("td");
    const tdSexo = document.createElement("td");
    tdNombre.innerHTML = item.Nombres;
    tdApellido.innerHTML = item.Apellidos;
    tdSexo.innerHTML = item.Sexo;
    tr.append(tdNombre);
    tr.append(tdApellido);
    tr.append(tdSexo);
    document.querySelector("#list").append(tr);
  });
}
