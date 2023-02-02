//On load we make the multiple tabs that will open and hide our other page sections
window.onload = function MakingTabs() {
  document
    .querySelector("#tabContainer")
    .addEventListener("click", handleTabClick);
  document.querySelectorAll(".tab")[0].click(); // "click" the first button
  document.querySelector("#minMaxButton").addEventListener("click", tab1);
};
// (Must declare parameter because we need the mouse click event.)
function handleTabClick(evt) {
  // format the selected tab
  let tab = evt.target;
  deselectAllTabs();

  tab.classList.add("active");

  // reveal the content section with an ID that corresponds to the active tab.
  let id = tab.innerHTML; // eg, Part B
  id = id.replace(" ", "_"); // Part_B
  hideAllSections();
  document.querySelector("#" + id).classList.remove("hidden"); // show #Part_B
}

function deselectAllTabs() {
  let tabs = document.querySelectorAll(".tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

function hideAllSections() {
  let sections = document.querySelectorAll(".tabContent");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.add("hidden");
  }
}
function tab1() {
  let results = document.querySelector("#resultBox");
  let minValue = document.querySelector("#minValue").value;
  let maxValue = document.querySelector("#maxValue").value;
  let arrayLength = maxValue - minValue;
  let nums = [arrayLength + 1];
  let numList = "<ul>"

  //console.log(minValue);
  //console.log(maxValue);

  if (Number(minValue) >= Number(maxValue)) {
    alert("Minimum value must be greater then the maximum value.");
  }
  else {
    for (let i = 0; i <= arrayLength; i++) {
      nums[i] = minValue;
      minValue++;
      console.log(nums[i])
      numList += "<li>"+nums[i]+"</li>"
    }
  }
  numList += "</ul>"
  //console.log(numList);
  results.innerHTML = numList;
}