//On load we make the multiple tabs that will open and hide our other page sections
window.onload = function MakingTabs() {
  document
    .querySelector("#tabContainer")
    .addEventListener("click", handleTabClick);
  document.querySelectorAll(".tab")[0].click(); // "click" the first button

  //This next section is for all the click events
  //Still needs optimization, however I couldn't quite figure out how to listen for the click that is
  //a decendent of the grandDad id and still write a function for each individual button click
  let grandDad = document.querySelector("#grandDad");
  grandDad.addEventListener("click", (btn) => {
    if (btn.target.matches("#minMaxButton")) {
      tab1();
    } else if (btn.target.matches("#showSeparatedNumber")) {
      SeparatedNumbers();
    } else if (btn.target.matches("#keyButton")) {
      tab3();
    }
    //else if(btn.target.matches('#')){}
    else if (btn.target.matches("#starWithMaxButton")) {
      console.log("Success");
      tab5();
    }
    /*else if(btn.target.matches('#')){

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
    }*/
  });
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

function SeparatedNumbers() {
  //let showNumberResults =document.querySelector("");
  console.log("Hello There");
}

function tab1() {
  let results = document.querySelector("#resultBoxMin");
  let minValue = document.querySelector("#minValue").value;
  let maxValue = document.querySelector("#maxValue").value;
  let arrayLength = maxValue - minValue;
  let nums = [arrayLength + 1];
  let numList = "<ul>";

  //console.log(minValue);
  //console.log(maxValue);

  if (Number(minValue) >= Number(maxValue)) {
    alert("Minimum value must be greater then the maximum value.");
  } else {
    for (let i = 0; i <= arrayLength; i++) {
      nums[i] = minValue;
      minValue++;
      console.log(nums[i]);
      numList += "<li>" + nums[i] + "</li>";
    }
  }
  numList += "</ul>";
  //console.log(numList);
  results.innerHTML = numList;
}
function tab3() {
  let results = document.querySelector("#resultBoxKey");
  let numberString = document.querySelector("#numString").value;
  let key = document.querySelector("#userKey").value;
  let pieces = numberString.split(",");
  let keyCount = 0;
  console.log(key);

  for (let i = 0; i < pieces.length; i++) {
    //key = Number(key);
    let num = pieces[i];
    console.log(num);

    if (key == num) {
      keyCount = keyCount + 1;
    }
  }
  console.log(keyCount);
  results.innerHTML = "Count: " + keyCount;
}
function tab5() {
  let results = document.querySelector("#resultBoxStarMax");
  let numStars = document.querySelector("#numOfStars").value;
  let maxPerLine = document.querySelector("#maxPerLine").value;
  let starString = "";
  let outputString =""
  let rows = numStars/maxPerLine;
  let starArray = [rows];
  let remainder = numStars % maxPerLine;
  console.log(numStars);
  console.log(maxPerLine);
  rows = Math.ceil(rows);
  console.log(rows);
  console.log(remainder);
  for(let i = 0; i < maxPerLine; i++){
    starString +="*"
  }
  for(let i = 0; i <= rows-1; i++){
    starArray[i] = starString;

  }
  if(remainder != 0){
    starArray[starArray.length-1] = starArray[starArray.length-1].slice(maxPerLine-remainder);
  }

  
  for(let i = 0; i <=rows-1; i++){
    outputString += "<p>" + starArray[i] +"<p>";
  }
  console.log(starArray);

  console.log(starString);
  results.innerHTML = outputString;
}

