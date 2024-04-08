let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

const calcDays = document.getElementById("calcDays")
const calcMonths = document.getElementById("calcMonths")
const calcYears = document.getElementById("calcYears")

const date = new Date()
const newDate = date + ""

let currentDay = ""
let currentMonth = ""
let currentYear = ""

currentMonth = newDate.slice(4, 7);
currentDay = newDate.slice(8, 10)
currentYear = newDate.slice(11, 15)

for (let i = 0; i < months.length; i++) {
    if (currentMonth == months[i]) {
        if (i <= 9) {
            currentMonth = "0" + (i + 1);
        }
        else {
            currentMonth = i + 1;
        }
    }
}

let tempDay = "";
let tempMonth = "";
let tempYear = "";
const leapYear = 2024;

function getValue() {
    if (day.value != "" && month.value != "" && year.value != "") {
        leapYearFinder()
        let remainingMonths = currentMonth - 2
        if (day.value > currentDay && month.value > currentMonth) {
            tempDay = parseInt(currentDay) + monthDays[remainingMonths] - day.value
            tempMonth = remainingMonths + 1 + 12 - month.value
            tempYear = currentYear - 1 - year.value
        }
        else if (day.value <= currentDay && month.value <= currentMonth) {
            tempDay = currentDay - day.value
            tempMonth = currentMonth - month.value
            tempYear = currentYear - year.value
        }
        else if (day.value > currentDay && month.value < currentMonth) {
            tempDay = parseInt(currentDay) + monthDays[remainingMonths] - day.value
            tempMonth = remainingMonths + 1 - month.value
            tempYear = currentYear - year.value
        }
        else if (day.value < currentDay && month.value > currentMonth) {
            tempDay = currentDay - day.value
            tempMonth = remainingMonths + 2 + 12 - month.value
            tempYear = currentYear - 1 - year.value
        }

        dateFormat()
        calcYears.innerText = tempYear
        calcMonths.innerText = tempMonth
        calcDays.innerText = tempDay
    }
    else {
        day.value = ""
        month.value = ""
        year.value = ""
    }
}

function dateFormat() {
    if (tempMonth <= 9) {
        tempMonth = "0" + tempMonth;
    }
    if (tempDay <= 9) {
        tempDay = "0" + tempDay
    }
    if (tempYear <= 9) {
        tempYear = "0" + tempYear
    }
}

function leapYearFinder() {
    if(year.value % 4 == 0) {
        monthDays[1] = 29
    }
    else if (year.value % 4 > 0){
        monthDays[1] = 28
    }
}