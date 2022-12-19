"use strict";
const displayContent = document.querySelectorAll(".number");
const formDiv = document.querySelector(".form-div");
const selectDiv = document.querySelector(".select-div");
const addOns = document.querySelector(".add-ons-div");
const summary = document.querySelector(".summary");
const contentList = document.querySelectorAll(".contentt");
const nextStep = document.querySelector(".next-step");
const profileInputs = document.querySelectorAll(".profile");
const goBack = document.querySelector(".go-back");
const cards = document.querySelectorAll(".card");
const toggleOff = document.querySelector(".fa-toggle-off");
const toggleOn = document.querySelector(".fa-toggle-on");
const holder2 = document.querySelector(".holder2");
const holder1 = document.querySelector(".holder1");
const selectBtn = document.querySelector(".step-2-btn");
const checkBoxes = document.querySelectorAll(".check");
const checkBoxDivs = document.querySelectorAll(".checkbox-div");
const addOnsBtn = document.querySelector(".add-ons-btn");
const addOnGoBack = document.querySelector(".add-ons-go-back");
const selectedPlan = document.querySelector(".selected-plan");
const yearAddOns = document.querySelector(".check-box-2");
const monthAddOns = document.querySelector(".check-box-1");

displayContent.forEach(function (element) {
  element.addEventListener("click", function (e) {
    contentList.forEach((el) => {
      el.classList.remove("active");
    });
    contentList.forEach((el, index) => {
      if (e.target.textContent === `${index + 1}`) {
        el.classList.toggle("active");
      }
    });
  });
});

nextStep.addEventListener("click", function (e) {
  e.preventDefault();
  profileInputs.forEach((el) => {
    if (el) {
      formDiv.classList.remove("active");
      selectDiv.classList.add("active");
    }
  });
});

goBack.addEventListener("click", function () {
  formDiv.classList.add("active");
  selectDiv.classList.remove("active");
});

cards.forEach((el) => {
  el.addEventListener("click", function () {
    el.style.border = ".5px solid hsl(243, 100%, 62%)";
    el.style.boxShadow = ".2px .2px hsl(243, 100%, 62%) ";
  });
});

toggleOff.addEventListener("click", function () {
  toggleOff.style.display = "none";
  toggleOn.classList.add("active");
  holder1.style.display = "none";
  holder2.style.display = "flex";
  yearAddOns.classList.add("active");
  monthAddOns.style.display = "none";
});

toggleOn.addEventListener("click", function () {
  toggleOn.style.display = "none";
  toggleOn.classList.remove("active");
  toggleOff.style.display = "block";
  holder1.style.display = "flex";
  holder2.style.display = "none";
  yearAddOns.classList.remove("active");
  monthAddOns.style.display = "block";
});

selectBtn.addEventListener("click", function () {
  selectDiv.classList.remove("active");
  addOns.classList.add("active");
  // selectedPlan.textContent = "";
});

checkBoxes.forEach((element) => {
  element.addEventListener("click", function (e) {
    console.log(element);
    checkBoxDivs.forEach((el, index) => {
      if (e.target.classList.contains(`check-${index + 1}`)) {
        el.classList.toggle("check-border");
      }
    });
  });
});

addOnsBtn.addEventListener("click", function () {
  addOns.classList.remove("active");
  summary.classList.add("active");
});

addOnGoBack.addEventListener("click", function () {
  addOns.classList.remove("active");
  selectDiv.classList.add("active");
});


// summary
selectedPlan.textContent =``










// displayContent.forEach((element)=>{
// element.addEventListener('click',function(){
//     console.log('di')
// })
// })

//  console.log('displayContent.textContent')
