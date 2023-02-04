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
    else if(btn.target.matches('#Part_4>button')){
      Tab4()
    }

    else if(btn.target.matches('#Part_6>button')){
      Tab6()
    }

    
    else if(btn.target.matches('#Part_8>button')){
      Tab8();
    }
    
    

    
/*
    else if(btn.target.matches('#')){

      console.log("");
    }
    else if(btn.target.matches('#')){
      console.log("");
    }*/
    else if(btn.target.matches('#shipCostButton')){
      tab7();
    }

    else if(btn.target.matches('#triangleButton')){
      tab10();
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

function SeparatedNumbers() {


  let showNumberResults = document.querySelector("#separatedNumbers").value;
  let max = 0;
  let total = 0;
  let min = 0;
  let avg = 0;
  if (showNumberResults == null) {
    alert("Input a Value");
  } else {
    let results = showNumberResults.split(",") || showNumberResults.split(", ");

    for (let i = 0; i < results.length; i++) {
      if (Validate(results[i]) == true) {
        results[i] = Number(results[i]);
      }
      //now we get the max value and min value
    }
    for (let value1 of results) {
      if (Number(value1) > max) {
        max = value1;
      }
    }



    //now for the min
    min = max;
    for (let value of results) {
      total += Number(value);
      if (Number(value) < min) {
        min = value;
      }
    }

    avg = total / results.length;

    let path = "#Part_2>div>p:";
    let child = "nth-child";
    //Now we have the p tags clear on button press
    document.querySelector(path + "first-child").innerHTML =
      "Number of Values:";
    document.querySelector(path + child + "(2)").innerHTML = "Total:";
    document.querySelector(path + child + "(3)").innerHTML = "Average:";
    document.querySelector(path + child + "(4)").innerHTML = "Smallest:";
    document.querySelector(path + "last-child").innerHTML = "Largest:";
    //now we add the values at the end
    document.querySelector(path + "first-child").innerHTML +=
      " " + results.length;
    document.querySelector(path + child + "(2)").innerHTML += " " + total;
    document.querySelector(path + child + "(3)").innerHTML += " " + avg;
    document.querySelector(path + child + "(4)").innerHTML += " " + min;
    document.querySelector(path + "last-child").innerHTML += " " + max;
  }
}
function Validate(e) {
  if (isNaN(e) == true) {
    return true;
  } else {
    return false;
  }
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
function Tab4()
{
  
  let starTotal = Number(document.querySelector('#starAmount').value);
  if(starTotal<1)
  {
    alert("Input must be at least one");
  }
  else
  {
    document.querySelector('#Part_4>div').innerHTML = '';
    for(let i=0;i<starTotal;i++)
    {
      document.querySelector('#Part_4>div').innerHTML +='*';
    }
  }
}




function Tab6() {
  let letters = document
    .querySelector("#noVowels")
    .value.toLowerCase()
    .split("");
  let vowelCount = 0;
  let word = "";
  const vowel = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };
  for (let value of letters) {
    if (
      value == vowel.a ||
      value == vowel.e ||
      value == vowel.i ||
      value == vowel.o ||
      value == vowel.u
    ) {
      vowelCount = vowelCount + 1;
      word += "*";
    } else {
      word += value;
    }
  }
  document.querySelector("#Part_6>div>p:first-child").innerHTML = "Vowels:";
  document.querySelector("#Part_6>div>p:first-child").innerHTML +=
    " " + vowelCount.toString();
  document.querySelector("#Part_6>div>p:last-child").innerHTML = word;
}
function tab10() {
  let results = document.querySelector("#resultTriangle");
  let angleOne = document.querySelector("#angleOne").value;
  let angleTwo = document.querySelector("#angleTwo").value;
  let angleThree = document.querySelector("#angleThree").value;
  let angleSum = 0;
  let traingleType = "";
  angleSum = Number(angleOne) + Number(angleTwo) + Number(angleThree);
  console.log(angleOne);
  console.log(angleTwo);
  console.log(angleThree);
  console.log(angleSum);
  if(Number(angleOne) == 0 || Number(angleTwo) == 0 ||  Number(angleThree) == 0){
    alert("All angles must be greater than 0")
  }
  else{ 
  if (angleSum > 180) {
    alert("Sum of angles can't be more than 180");
  } else if (
    Number(angleOne) == 90 ||
    Number(angleTwo) == 90 ||
    Number(angleThree) == 90
  ) {
    traingleType = "Right Angle Triangle";
  } else if (
    Number(angleOne) > 90 ||
    Number(angleTwo) > 90 ||
    Number(angleThree) > 90
  ) {
    traingleType = "Obtuse Triangle";
  } else if (
    Number(angleOne) < 90 ||
    Number(angleTwo) < 90 ||
    Number(angleThree) < 90
  ) {
    traingleType = "Acute Triangle";
  }
  console.log(traingleType);
}
results.innerHTML = traingleType;
  
}
function Tab8()
{
  const boxAmount = 24;
  const barPrice = 1.75;
  const boxPrice = 32;
  let userBox, userSingles, boxCost,singleCost,total = 0;
  let userBars = Number(document.querySelector('#chocalteBars').value);
  if (userBars<1)
  {
    alert("Need at least one bar to calculate")
  }
  else 
  {
    userBox = Math.floor(userBars /boxAmount);
    userSingles = userBars % boxAmount;
    boxCost = userBox * boxPrice;
    singleCost = userSingles * barPrice;
    total = singleCost+boxCost;
  }
  let route = '#Part_8>div>p:';
  let nth = 'nth-child';
  document.querySelector(route+'first-child').innerHTML = 'Number of Boxes';
  document.querySelector(route+nth+'(2)').innerHTML = 'Number of Singles:';
  document.querySelector(route+nth+'(3)').innerHTML = 'Cost of Boxes:';
  document.querySelector(route+nth+'(4)').innerHTML= 'Cost of Singles';
  document.querySelector(route+'last-child').innerHTML = 'Total Cost';

  //now adding the results
  document.querySelector(route+'first-child').innerHTML+= ' '+userBox;
document.querySelector(route+nth+'(2)').innerHTML += ' '+ userSingles;
document.querySelector(route+nth+'(3)').innerHTML +=' '+ boxCost;
document.querySelector(route+nth+'(4)').innerHTML +=' '+ singleCost;
 document.querySelector(route+'last-child').innerHTML +=' '+ total;
}
function tab7() {
  let results = document.querySelector("#resultShipCost");
  let numberShipped = document.querySelector("#shipAmount").value;
  let baseCost;
  let total = 0,
    taxAmount = 0;
  let outPut = "<ul><li>";
  const taxRate = 0.15,
    smallOrder = 5,
    mediumOrder = 4,
    largeOrder = 3;
  console.log(numberShipped);
  if (numberShipped < 99) {
    baseCost = numberShipped * smallOrder;
    console.log(baseCost);
    taxAmount = baseCost * taxRate;
    console.log(taxAmount);
    total = baseCost + taxAmount;
    outPut +=
      "Base Cost: " +
      baseCost +
      "</li> <li> Tax: " +
      taxAmount +
      "</li> <li> Total: " +
      total +
      "</li></ul>";
  } else if (numberShipped >= 100 && numberShipped <= 1000) {
    baseCost = numberShipped * mediumOrder;
    console.log(baseCost);
    taxAmount = baseCost * taxRate;
    console.log(taxAmount);
    total = baseCost + taxAmount;
    outPut +=
      "Base Cost: " +
      baseCost +
      "</li> <li> Tax: " +
      taxAmount +
      "</li> <li> Total: " +
      total +
      "</li></ul>";
  } else if (numberShipped > 1000) {
    baseCost = numberShipped * largeOrder;
    console.log(baseCost);
    taxAmount = baseCost * taxRate;
    console.log(taxAmount);
    total = baseCost + taxAmount;
    outPut +=
      "Base Cost: " +
      baseCost +
      "</li> <li> Tax: " +
      taxAmount +
      "</li> <li> Total: " +
      total +
      "</li></ul>";
  }
  results.innerHTML = outPut;
}


