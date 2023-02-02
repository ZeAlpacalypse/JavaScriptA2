//On load we make the multiple tabs that will open and hide our other page sections
window.onload = function MakingTabs() {
  document
    .querySelector("#tabContainer")
    .addEventListener("click", handleTabClick);
  document.querySelectorAll(".tab")[0].click(); // "click" the first button
  //This next section is for all the click events
  //Still needs optimization, however I couldn't quite figure out how to listen for the click that is 
  //a decendent of the grandDad id and still write a function for each individual button click
  let grandDad = document.querySelector('#grandDad')
  grandDad.addEventListener('click',btn =>{
    if(btn.target.matches('#showSeparatedNumber')){
      console.log("Hello There");
    }else if(btn.target.matches('#minMax')){
      console.log("Why");
    }
    else if(btn.target.matches('#')){
      console.log("");
    }
    else if(btn.target.matches('#')){
      console.log("");
    }
    else if(btn.target.matches('#')){
      console.log("");
    }
    else if(btn.target.matches('#')){
      console.log("");
    }
    else if(btn.target.matches('#')){
      console.log("");
    }
    else if(btn.target.matches('#')){
      console.log("");
    }
  })
}
  

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
function SeparatedNumbers()
{
  //let showNumberResults =document.querySelector("");
  console.log("Hello There");

};
