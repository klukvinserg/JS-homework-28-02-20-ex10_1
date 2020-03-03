let date;
let yearString;
let year;
let dayString;
let day;
let monthString;
let month;
let b;


massege();

function massege() {
   date =  prompt('Enter date: DD.MM.YYYY');
   yearString = date.charAt(6)+date.charAt(7)+date.charAt(8)+date.charAt(9);
   year = parseInt(yearString);
   dayString = date.charAt(0)+date.charAt(1);
   day = parseInt(dayString);
   monthString = date.charAt(3)+date.charAt(4);
   month = parseInt(monthString);
}

while ( date.length !== 10 || date.charAt(2) !== '.' || date.charAt(5) !== '.' ) {
    alert('Date is not correct');
    massege();
}

while (year < 1000 || isNaN(year)) {
    alert('Year is not correct');
    massege();
 }

while (month < 1 || month > 12 || isNaN(month)) {
    alert('Month is not correct');
    massege();
 }

if ((year % 4 === 0 && year % 100 != 0) || year % 400 ===0) {
   b = "leap"
} else {
   b = "normal"
}

while (day < 1 || day > 31 || isNaN(day)) {
    alert('Day is not correct');
    massege();
 }

 if (month === 2 &&  b === "normal" && day > 28 ) {
    alert('Day is not correct - max 28');
    massege();
}

if (month === 2 &&  b === "leap" && day > 29 ) {
    alert('Day is not correct - year is leap. max 29');
    massege();
}



let nextDate = new Date(year, month-1, day);
nextDate.setDate(nextDate.getDate() + 1);

day = (nextDate.getDate()).toString();
month = (nextDate.getMonth()+1).toString();
year = nextDate.getFullYear();

if ( day < 10) {
    day = '0' + day;
}

if ( month < 10) {
    month = '0' + month;
}


alert('Next date: '+day+'.'+month+'.'+year);

