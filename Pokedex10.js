
let btn = document.getElementById("add");

btn.addEventListener('click', () => {
    var table = document.getElementById("pokeTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = document.getElementById("new-pokemon").value;
    document.getElementById("new-pokemon").value = "";
});