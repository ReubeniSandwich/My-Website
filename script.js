var moonPercentageGlobalVariable;

function load_moon_phases(obj,callback){
    var gets=[]
    for (var i in obj){
        gets.push(i + "=" +encodeURIComponent(obj[i]))
    }
    gets.push("LDZ=" + new Date(obj.year,obj.month-1,1) / 1000)
    var xmlhttp = new XMLHttpRequest()
    var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(JSON.parse(xmlhttp.responseText))
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function main_moon(moon){    

    const day = new Date().getDate();
    const dayWeek=moon.phase[day].dayWeek;
    const moonPercentage = Math.round(moon.phase[day].lighting);
    moonPercentageGlobalVariable = moonPercentage;
    const html = 
       `<div> <b> ${moon.nameDay[dayWeek]} </b> 
        <div> ${day} <b> ${moon.monthName} </b> ${moon.year} </div> 
        <div shadow>  ${moon.phase[day].svg} </div>
        <div>  ${moon.phase[day].phaseName}  </div> </div>`

        document.getElementsByClassName("moon-object")[0].innerHTML = html;

    //this shows the percentage of the moon illuminiation
    // ${Math.round(moon.phase[day].lighting)}%
}       

function moonQuiz () {
    event.preventDefault();
    const response = document.getElementsByClassName("moon-number-input")[0].value;

    if (response == moonPercentageGlobalVariable) {
        document.getElementsByClassName("moon-quiz-result")[0].innerHTML = "You Guessed Correctly!"
    } else { 
        document.getElementsByClassName("moon-quiz-result")[0].innerHTML = `You Guessed Incorrectly! The correct answer is ${moonPercentageGlobalVariable}%. You Were Off By ${Math.abs(response - moonPercentageGlobalVariable)} Point(s).`
       }
}


const configMoon = {
    lang  		:'en', 
    month 		:new Date().getMonth() + 1,
    year  		:new Date().getFullYear(),
    size		:150, 
    lightColor	:"rgb(255,255,210)", 
    shadeColor	:"black", 
    texturize	:true, 
}

load_moon_phases(configMoon, main_moon)


