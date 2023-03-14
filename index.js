let tabs = document.getElementsByClassName("tabButtons");
let selectList = document.getElementsByClassName("selectList");

tabs[0].addEventListener("click", function () {
  selectList[0].style.display = "block";
  tabs[0].classList.add("active");
  tabs[2].classList.remove("active");
  tabs[1].classList.remove("active");
  selectList[1].style.display = "none";
  selectList[2].style.display = "none";
});

tabs[1].addEventListener("click", function () {
  selectList[1].style.display = "block";
  tabs[1].classList.add("active");
  tabs[0].classList.remove("active");
  tabs[2].classList.remove("active");
  selectList[0].style.display = "none";
  selectList[2].style.display = "none";
});

tabs[2].addEventListener("click", function () {
  selectList[2].style.display = "block";
  tabs[2].classList.add("active");
  tabs[0].classList.remove("active");
  tabs[1].classList.remove("active");
  selectList[0].style.display = "none";
  selectList[1].style.display = "none";
});

//  Lenght script code here-----------------

let input = document.getElementById("input");
let result = document.getElementById("result");
let lenghtInput = document.getElementById("lenghtInput");
let lenghtResult = document.getElementById("lenghtResult");
let inputTypeValue, resultTypeValue;
let b = document.getElementById("b");

lenghtInput.addEventListener("change", myResult);
lenghtResult.addEventListener("change", myResult);

inputTypeValue = lenghtInput.value;
resultTypeValue = lenghtResult.value;

function myResult() {
  inputTypeValue = lenghtInput.value;
  resultTypeValue = lenghtResult.value;

  //   meter to kilometer------------->
  if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
    result.value = Number(input.value) * 0.01;
    b.innerHTML = result.value;

    // meter to meter------------
  } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
    result.value = input.value;
    b.innerHTML = input.value;
  } else if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
    // kilometer to meter------------
    result.value = Number(input.value) * 1000;
    b.innerHTML = result.value;
  } else if (
    inputTypeValue === "kilometer" &&
    resultTypeValue === "centimeter"
  ) {
    // kilometer to centimeter------------
    result.value = Number(input.value) * 100000;
    b.innerHTML = result.value;
  } else if (
    inputTypeValue === "kilometer" &&
    resultTypeValue === "kilometer"
  ) {
    // kilometer to kilometer------------
    result.value = input.value;
    b.innerHTML = input.value;
  } else if (
    inputTypeValue === "centimeter" &&
    resultTypeValue === "kilometer"
  ) {
    // centimeter to  kilometer-----------
    result.value = Number(input.value) * 0.00001;
    b.innerHTML = result.value;
  } else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
    // centimeter to  meter-----------
    result.value = Number(input.value) * 0.01;
    b.innerHTML = result.value;
  } else if (
    inputTypeValue === "centimeter" &&
    resultTypeValue === "centimeter"
  ) {
    // centimeter to  meter-----------
    result.value = input.value;
    b.innerHTML = input.value;
  } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
    // centimeter to  meter-----------
    result.value = Number(input.value) * 100;
    b.innerHTML = result.value;
  }
}

//  Temperature script code here-----------------

let tempInput = document.getElementById("tempInput");
let tempResult = document.getElementById("tempResult");
tempInput.addEventListener("change", tempFun);
tempResult.addEventListener("change", tempFun);
let tempInputTypeValue, tempResultTypeValue;

function tempFun() {
  // result.value = input.value;
  tempInputTypeValue = tempInput.value;
  tempResultTypeValue = tempResult.value;

  if (tempInputTypeValue === "celsius" && tempResultTypeValue === "celsius") {
    result.value = input.value;
    b.innerHTML = input.value;
  } else if (
    tempInputTypeValue === "celsius" &&
    tempResultTypeValue === "kelvin"
  ) {
    result.value = Number(input.value) + 273.15;
    b.innerHTML = result.value;
  } else if (
    tempInputTypeValue === "celsius" &&
    tempResultTypeValue === "fahrenheit"
  ) {
    result.value = Number(input.value * 9) / 5 + 32;
    b.innerHTML = result.value;
  } else if (
    tempInputTypeValue === "kelvin" &&
    tempResultTypeValue === "celsius"
  ) {
    result.value = Number(input.value) - 273.15;
    b.innerHTML = result.value;
  } else if (
    tempInputTypeValue === "kelvin" &&
    tempResultTypeValue === "fahrenheit"
  ) {
    result.value = Number(input.value * 1.8) - 459.67;
    b.innerHTML = result.value;
  } else if (
    tempInputTypeValue === "kelvin" &&
    tempResultTypeValue === "kelvin"
  ) {
    result.value = input.value;
    b.innerHTML = result.value;
  } else if (
    tempInputTypeValue === "fahrenheit" &&
    tempResultTypeValue === "fahrenheit"
  ) {
    result.value = input.value;
    b.innerHTML = result.value;
  } else if (
    tempInputTypeValue === "fahrenheit" &&
    tempResultTypeValue === "celsius"
  ) {
    result.value = (Number(input.value - 32) * 5) / 9;
    b.innerHTML = result.value;
  } else if (
    tempInputTypeValue === "fahrenheit" &&
    tempResultTypeValue === "kelvin"
  ) {
    result.value = (Number(input.value - 32) * 5) / 9 + 273.15;
    b.innerHTML = result.value;
  }
}

// Time Script code her .............

let timeInput = document.getElementById("timeInput");
let timeResult = document.getElementById("timeResult");
timeInput.addEventListener("change", timeFun);
timeResult.addEventListener("change", timeFun);

function timeFun() {
  inputTypeValue = timeInput.value;
  resultTypeValue = timeResult.value;

  //   result.value = input.value;

  if (inputTypeValue === "hour" && resultTypeValue === "hour") {
    result.value = input.value;
    b.innerHTML = result.value;
  } else if (inputTypeValue === "hour" && resultTypeValue === "minute") {
    result.value = Number(input.value) * 60;
    b.innerHTML = result.value;
  } else if (inputTypeValue === "hour" && resultTypeValue === "second") {
    result.value = Number(input.value) * 3600;
    b.innerHTML = result.value;
  } else if (inputTypeValue === "minute" && resultTypeValue === "minute") {
    result.value = input.value;
    b.innerHTML = result.value;
  } else if (inputTypeValue === "minute" && resultTypeValue === "second") {
    result.value = Number(input.value) * 60;
    b.innerHTML = result.value;
  } else if (inputTypeValue === "minute" && resultTypeValue === "hour") {
    result.value = Number(input.value) * 0.0166667;
    b.innerHTML = result.value;
  } else if (inputTypeValue === "second" && resultTypeValue === "second") {
    result.value = input.value;
    b.innerHTML = result.value;
  } else if (inputTypeValue === "second" && resultTypeValue === "minute") {
    result.value = Number(input.value) * 0.0166667;
    b.innerHTML = result.value;
  } else if (inputTypeValue === "second" && resultTypeValue === "hour") {
    result.value = Number(input.value) * 0.000277778;
    b.innerHTML = result.value;
  }
}
