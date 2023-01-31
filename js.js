window.addEventListener("load", sidenVises);

let drik;

const knap1 = document.querySelector("#knap1");
const knap2 = document.querySelector("#knap2");
const knap3 = document.querySelector("#knap3");
const knap4 = document.querySelector("#knap4");

function sidenVises() {
  console.log("sidenVises");
  knap1.addEventListener("click", kaldKlik);
  knap2.addEventListener("click", kaldKlik);
  knap3.addEventListener("click", kaldKlik);
  knap4.addEventListener("click", kaldKlik);
}

function kaldKlik() {
  if (drik == "snaps") {
    console.log("indeholder alkohol");
  }
  if (drik == "beer") {
    console.log("indeholder alkohol");
  }
  if (drik == "cola") {
    console.log("alkoholfri");
  }
  if (drik == "fanta") {
    console.log("alkoholfri");
  }
}
