//const date = new Date();

//console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

//console.log(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

const date1 = new Date();
console.log(date1.getTime()); // 1624021654154

const teamMeetingDate = new Date("March 16, 2030");
console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"


const date = new Date();
console.log("Date: ", date);

// Повертає день місяця від 1 до 31
console.log("getDate(): ", date.getDate());

// Повертає день тижня від 0 до 6
console.log("getDay(): ", date.getDay());

// Повертає місяць від 0 до 11
console.log("getMonth(): ", date.getMonth());

// Повертає рік з 4 цифр
console.log("getFullYear(): ", date.getFullYear());

// Повертає години
console.log("getHours(): ", date.getHours());

// Повертає хвилини
console.log("getMinutes(): ", date.getMinutes());

// Повертає секунди
console.log("getSeconds(): ", date.getSeconds());

// Повертає мілісекунди
console.log("getMilliseconds(): ", date.getMilliseconds());


// const dates = new Date();
// console.log("Date: ", date);

// Повертає день місяця від 1 до 31
console.log("getUTCDate(): ", date.getUTCDate());

// Повертає день тижня від 0 до 6
console.log("getUTCDay(): ", date.getUTCDay());

// Повертає місяць від 0 до 11
console.log("getUTCMonth(): ", date.getUTCMonth());

// Повертає рік з 4 цифр
console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Повертає години
console.log("getUTCHours(): ", date.getUTCHours());

// Повертає хвилини
console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Повертає секунди
console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Повертає мілісекунди
console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());


const date3 = new Date("March 16, 2030 14:25:00");

date3.setMinutes(50);
// "Sat Mar 16 2030 14:50:00 GMT+0200"

date3.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"