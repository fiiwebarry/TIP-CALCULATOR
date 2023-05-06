// prompt user to select bill payment

let myBill;
let tipAmount;
let numberOfPersons;
let total;
let custom;

const getTipAmount = (bill, persons, percent) => {
  tipAmount = (bill * percent) / persons;
  tipAmount = Number(tipAmount.toFixed(2));
  document.getElementById("amount").innerHTML = `$${tipAmount}`;
};

const getTotal = (bill, persons, percent) => {
  total = (bill * percent) / persons;
  total = Number(total.toFixed(2));
  document.getElementById("amount2").innerHTML = `$${total}`;
};
const removeColor = () => {
  let btns = document.querySelectorAll(".btnCalc");
  for (i = 0; i < btns.length; i++) {
    btns[i].classList.remove("root");
  }
};
document.getElementById("calcOne").onclick = function () {
  removeColor();
  document.querySelector("#calcOne").classList.add("root");
  myBill = document.getElementById("Bill").value;
  numberOfPersons = document.getElementById("people").value;
  getTipAmount(myBill, numberOfPersons, 0.05);
  getTotal(myBill, numberOfPersons, 1.05);
};

document.getElementById("calcTwo").onclick = function () {
  removeColor();
  document.querySelector("#calcTwo").classList.add("root");

  myBill = document.getElementById("Bill").value;
  numberOfPersons = document.getElementById("people").value;
  getTipAmount(myBill, numberOfPersons, 0.1);
  getTotal(myBill, numberOfPersons, 1.1);
};

document.getElementById("calcThree").onclick = function () {
  removeColor();
  document.querySelector("#calcThree").classList.add("root");

  myBill = document.getElementById("Bill").value;
  numberOfPersons = document.getElementById("people").value;
  getTipAmount(myBill, numberOfPersons, 0.15);
  getTotal(myBill, numberOfPersons, 1.15);
};

document.getElementById("calcFour").onclick = function () {
  removeColor();
  document.querySelector("#calcFour").classList.add("root");
  myBill = document.getElementById("Bill").value;
  numberOfPersons = document.getElementById("people").value;
  getTipAmount(myBill, numberOfPersons, 0.25);
  getTotal(myBill, numberOfPersons, 1.25);
};

document.getElementById("calcFive").onclick = function () {
  removeColor();
  document.querySelector("#calcFive").classList.add("root");
  myBill = document.getElementById("Bill").value;
  numberOfPersons = document.getElementById("people").value;
  getTipAmount(myBill, numberOfPersons, 0.5);
  getTotal(myBill, numberOfPersons, 1.5);
};
document.getElementById("calcSix").onchange = function () {
  myBill = document.getElementById("Bill").value;
  removeColor();
  numberOfPersons = document.getElementById("people").value;
  custom = document.getElementById("calcSix").value;
  custom = Number(custom / 100);
  tipAmount = (myBill * custom) / numberOfPersons;
  total = myBill * custom + myBill / numberOfPersons;
  tipAmount = Number(tipAmount.toFixed(2));
  total = Number(total.toFixed(2));
  document.getElementById("amount").innerHTML = `$${tipAmount}<br>`;
  document.getElementById("amount2").innerHTML = `$${total}`;
};

document.getElementById("reset").onclick = function () {
  document.getElementById("Bill").value = null;
  document.getElementById("people").value = null;
  document.getElementById("calcSix").value = null;

  document.getElementById("amount").innerHTML = `$0.00<br>`;
  document.getElementById("amount2").innerHTML = `$0.00`;

  let rest = document.querySelectorAll(".btnCalc");

  for (i = 0; i < rest.length; i++) {
    rest[i].classList.remove("root");
  }
};

document.getElementById("people").oninput = function (event) {
  let newCust = event.target.value;
  if (newCust == "0") {
    document.getElementById("int2").className = "visible";
    document.getElementById("people").classList.add("border-danger");
  } else {
    document.getElementById("int2").className = "hidden";
    document.getElementById("people").classList.remove("border-danger");
  }
};
