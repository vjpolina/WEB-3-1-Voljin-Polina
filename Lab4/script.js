let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];

console.log("Lista:", fructe);
console.log("Primul element:", fructe[0]);
console.log("Ultimul element:", fructe[fructe.length - 1]);
console.log("Număr de elemente:", fructe.length);

let orase = ["Chișinău", "Bălți", "Cahul"];

orase.push("Orhei");
orase.unshift("Soroca");
orase.pop();
orase.shift();

console.log("Lista finală de orașe:", orase);

let produse = ["Pâine", "Lapte", "Ouă"];

function afiseazaProduse() {
  let zona = document.getElementById("listaProduse");

  if (produse.length === 0) {
    zona.innerHTML = "Lista este goală!";
  } else {
    zona.innerHTML = produse.join(", ");
  }
}

function adaugaLaSfarsit() {
  let produs = document.getElementById("produs").value;
  if (produs !== "") {
    produse.push(produs);
    document.getElementById("produs").value = "";
    afiseazaProduse();
  }
}

function adaugaLaInceput() {
  let produs = document.getElementById("produs").value;
  if (produs !== "") {
    produse.unshift(produs);
    document.getElementById("produs").value = "";
    afiseazaProduse();
  }
}

function stergePrimul() {
  produse.shift();
  afiseazaProduse();
}

function stergeUltimul() {
  produse.pop();
  afiseazaProduse();
}

let elevi = [
  { nume: "Popescu Ana", varsta: 17, nota: 9 },
  { nume: "Rusu Mihai", varsta: 18, nota: 8 },
  { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

function afiseazaElevi() {
  let catalog = document.getElementById("catalog");
  catalog.innerHTML = "";

  elevi.forEach(function (elev, index) {
    catalog.innerHTML +=
      "<p>" + (index + 1) + ". " + elev.nume + "<br>" + "Vârsta: " + elev.varsta + "<br>" +
      "Nota: " + elev.nota + "</p>";
  });

  document.getElementById("numarElevi").innerHTML =
    "Număr de elevi: " + elevi.length;
}

function adaugaElev() {
  let nume = document.getElementById("nume").value;
  let varstaValoare = document.getElementById("varsta").value;
  let notaValoare = document.getElementById("nota").value;

  if (nume.trim() === "" || varstaValoare.trim() === "" || notaValoare.trim() === "") {
    alert("Nu ați introdus toate datele, elevul nu poate fi adăugat.");
    return;
  }

  let varsta = Number(varstaValoare);
  let nota = Number(notaValoare);

  let elevNou = {
    nume: nume,
    varsta: varsta,
    nota: nota,
  };

  elevi.push(elevNou);

  document.getElementById("nume").value = "";
  document.getElementById("varsta").value = "";
  document.getElementById("nota").value = "";

  afiseazaElevi();
}

function stergeElev() {
  let numeCautat = document.getElementById("numeSterge").value;

  let elev = elevi.find(function (e) {
    return e.nume === numeCautat;
  });

  if (elev !== undefined) {
    let index = elevi.indexOf(elev);
    elevi.splice(index, 1);
  }

  document.getElementById("numeSterge").value = "";
  afiseazaElevi();
}

function cautaElev() {
  let numeCautat = document.getElementById("numeCauta").value;
  let rezultat = document.getElementById("rezultatCautare");

  let elev = elevi.find(function (e) {
    return e.nume === numeCautat;
  });

  if (elev !== undefined) {
    rezultat.innerHTML =
      "Elev găsit!<br>" +
      "Nume: " + elev.nume + "<br>" +
      "Vârsta: " + elev.varsta + "<br>" +
      "Nota: " + elev.nota;
  } else {
    rezultat.innerHTML = "Elevul nu a fost găsit!";
  }
}

afiseazaProduse();
afiseazaElevi();