// alert("JS Connected")

// IDs Section
let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

let workPrevious = document.getElementById("workPrevious");
let playPrevious = document.getElementById("playPrevious");
let studyPrevious = document.getElementById("studyPrevious");
let exercisePrevious = document.getElementById("exercisePrevious");
let socialPrevious = document.getElementById("socialPrevious");
let selfCarePrevious = document.getElementById("selfCarePrevious");

let workDisplay = document.getElementById("workDisplay");
let playDisplay = document.getElementById("playDisplay");
let studyDisplay = document.getElementById("studyDisplay");
let exerciseDisplay = document.getElementById("exerciseDisplay");
let socialDisplay = document.getElementById("socialDisplay");
let selfCareDisplay = document.getElementById("selfCareDisplay");

// Variables
let apiData = [];

async function getJsonData() {
    const response = await fetch("../data.json");
    const data = await response.json();
    apiData = data;
    console.log(apiData);
    defaultDisplay();
}
getJsonData();


function defaultDisplay() {
    // getJsonData().then()
    workDisplay.innerText = `${apiData[0].timeframes.weekly.current}hrs`;
    workPrevious.innerText = `Last Week - ${apiData[0].timeframes.weekly.previous}hrs`;
    
    playDisplay.innerText = `${apiData[1].timeframes.weekly.current}hrs`;
    playPrevious.innerText = `Last Week - ${apiData[1].timeframes.weekly.previous}hrs`;
    
    studyDisplay.innerText = `${apiData[2].timeframes.weekly.current}hrs`;
    studyPrevious.innerText = `Last Week - ${apiData[2].timeframes.weekly.previous}hrs`;
    
    exerciseDisplay.innerText = `${apiData[3].timeframes.weekly.current}hrs`;
    exercisePrevious.innerText = `Last Week - ${apiData[3].timeframes.weekly.previous}hrs`;
    
    socialDisplay.innerText = `${apiData[4].timeframes.weekly.current}hrs`;
    socialPrevious.innerText = `Last Week - ${apiData[4].timeframes.weekly.previous}hrs`;
    
    selfCareDisplay.innerText = `${apiData[5].timeframes.weekly.current}hrs`;
    selfCarePrevious.innerText = `Last Week - ${apiData[5].timeframes.weekly.previous}hrs`;
}
// defaultDisplay();

// Data Call
daily.addEventListener('click', function(){
    daily.className = "time-span-text text-white";
    weekly.className = "time-span-text inactive-text-blue";
    monthly.className = "time-span-text inactive-text-blue";

    workDisplay.innerText = `${apiData[0].timeframes.daily.current}hrs`;
    workPrevious.innerText = `Yesterday - ${apiData[0].timeframes.daily.previous}hrs`;
    
    playDisplay.innerText = `${apiData[1].timeframes.daily.current}hrs`;
    playPrevious.innerText = `Yesterday - ${apiData[1].timeframes.daily.previous}hrs`;
    
    studyDisplay.innerText = `${apiData[2].timeframes.daily.current}hrs`;
    studyPrevious.innerText = `Yesterday - ${apiData[2].timeframes.daily.previous}hrs`;
    
    exerciseDisplay.innerText = `${apiData[3].timeframes.daily.current}hrs`;
    exercisePrevious.innerText = `Yesterday - ${apiData[3].timeframes.daily.previous}hrs`;
    
    socialDisplay.innerText = `${apiData[4].timeframes.daily.current}hrs`;
    socialPrevious.innerText = `Yesterday - ${apiData[4].timeframes.daily.previous}hrs`;
    
    selfCareDisplay.innerText = `${apiData[5].timeframes.daily.current}hrs`;
    selfCarePrevious.innerText = `Yesterday - ${apiData[5].timeframes.daily.previous}hrs`;
});

weekly.addEventListener('click', function(){
    daily.className = "time-span-text inactive-text-blue";
    weekly.className = "time-span-text text-white";
    monthly.className = "time-span-text inactive-text-blue";

    workDisplay.innerText = `${apiData[0].timeframes.weekly.current}hrs`;
    workPrevious.innerText = `Last Week - ${apiData[0].timeframes.weekly.previous}hrs`;
    
    playDisplay.innerText = `${apiData[1].timeframes.weekly.current}hrs`;
    playPrevious.innerText = `Last Week - ${apiData[1].timeframes.weekly.previous}hrs`;
    
    studyDisplay.innerText = `${apiData[2].timeframes.weekly.current}hrs`;
    studyPrevious.innerText = `Last Week - ${apiData[2].timeframes.weekly.previous}hrs`;
    
    exerciseDisplay.innerText = `${apiData[3].timeframes.weekly.current}hrs`;
    exercisePrevious.innerText = `Last Week - ${apiData[3].timeframes.weekly.previous}hrs`;
    
    socialDisplay.innerText = `${apiData[4].timeframes.weekly.current}hrs`;
    socialPrevious.innerText = `Last Week - ${apiData[4].timeframes.weekly.previous}hrs`;
    
    selfCareDisplay.innerText = `${apiData[5].timeframes.weekly.current}hrs`;
    selfCarePrevious.innerText = `Last Week - ${apiData[5].timeframes.weekly.previous}hrs`;
});


monthly.addEventListener('click', function(){
    daily.className = "time-span-text inactive-text-blue";
    weekly.className = "time-span-text inactive-text-blue";
    monthly.className = "time-span-text text-white";
    
    workDisplay.innerText = `${apiData[0].timeframes.monthly.current}hrs`;
    workPrevious.innerText = `Last Month - ${apiData[0].timeframes.monthly.previous}hrs`;
    
    playDisplay.innerText = `${apiData[1].timeframes.monthly.current}hrs`;
    playPrevious.innerText = `Last Month - ${apiData[1].timeframes.monthly.previous}hrs`;
    
    studyDisplay.innerText = `${apiData[2].timeframes.monthly.current}hrs`;
    studyPrevious.innerText = `Last Month - ${apiData[2].timeframes.monthly.previous}hrs`;
    
    exerciseDisplay.innerText = `${apiData[3].timeframes.monthly.current}hrs`;
    exercisePrevious.innerText = `Last Month - ${apiData[3].timeframes.monthly.previous}hrs`;
    
    socialDisplay.innerText = `${apiData[4].timeframes.monthly.current}hrs`;
    socialPrevious.innerText = `Last Month - ${apiData[4].timeframes.monthly.previous}hrs`;
    
    selfCareDisplay.innerText = `${apiData[5].timeframes.monthly.current}hrs`;
    selfCarePrevious.innerText = `Last Month - ${apiData[5].timeframes.monthly.previous}hrs`;
});