// mission1
/*
לכתוב פונקציה שמקבלת פרמטר userName ומחזירה string שמכיל את הפרמטר הזה: ",Hello {userName}"
לכתוב פונקציה שמקבלת פרמטר num ומחזירה string שמכיל את הפרמטר הזה: "your number is {num}."
לכתוב פונקציה שלא מקבלת פרמטרים ומחזירה string כזה: "Have a good day"
לקרוא לפונקציות לפי סדר, להדפיס את מה שחזר מהם לקונסול ככה שיתקבל המשפט הבא:
"Hello {Oliver}, your number is {5}. Have a good day"
(* מה שנמצא בסוגריים המסולסלים מציין משתנה שהערך שלו מתחלף)
*/

// solution
// const userWroteName = prompt('whats tour name');
// const userWroteNum = +prompt(`what is your favorite num?`)

// function helloUserName(userName) {
//     return `Hello ${userName}`
// }

// function getNum(num) {
//     return `your number is ${num}`
// }

// function niceFunction() {
//     return `Have a good Day`
// }

// function finalGreet() {
//     console.log('hi');
//     console.log(`${helloUserName(userWroteName)} ${getNum(userWroteNum)} ${niceFunction()}`);
// }
// finalGreet()
// mission2
/*
פונקציה ראשונה נקראת addRedColor, היא לא מקבלת פרמטרים ומחזירה string כזה: "the RED strip"
פונקציה שניה נקראת addYellowColor היא לא מקבלת פרמטרים ומחזירה string כזה: "YELLOW was added"
פונקציה שלישית נקראת addGreenColor היא לא מקבלת פרמטרים ומחזירה string כזה: "and finally GREEN"
לכתוב פונקציה שנקראת drawRainbow, היא קוראת לכל אחת משלוש הפונקציות בתורה ובסוף מדפיסה את כל המשפטים שחזרו מהפונקציות לקונסול.
לקרוא לפונקציה drawRainbow.
*/

// solution

// function addRedColor(){
//     return `the RED strip `
// }

// function addYellowColor() {
//     return`YELLOW was added `
// }

// function addGreenColor(){
//     return `and finally GREEN`
// }

// function drawRainbow(){
//     // we have 2 easy solutions
//     // 1
//     // console.log(`${addRedColor()} ${addYellowColor()}${addGreenColor()}`);

//     // 2
//     const red = addRedColor()
//     const yellow = addYellowColor()
//     const green = addGreenColor()
//     console.log(red+yellow+green);
// }
// drawRainbow()

// mission3

// לכתוב פונקציה שנקראת giveMeAGlass.הפונקציה הזו מקבלת פרמטר שנקרא typeOfGlass מסוג string ומחזירה string שמכיל את סוג הכוס שנבחר, דוגמה: "you picked a {big cup}"
// לכתוב פונקציה שנקראת addCoffee, היא מקבלת פרמטר מסוג number שנקרא numOfTeeSpoons ומחזירה string שמציין את מספר כפיות הקפה שהוספנו.דוגמה "{1} tee spoon of coffee has added"
// לכתוב פונקציה שנקראת addSugar שמקבלת פרמטר מסוג boolean שנקרא iWantSuger, ופרמטר מסוג number שנקרא numOfTeeSpoons, אם iWantSuger שווה true הפונקציה תחזיר string, דוגמה: "please add {2} tee spoon of sugar", אחרת תחזיר: "no sugar for me"
// לכתוב פונקציה שנקראת makeMeACoffee, הפונקציה הזאת קוראת לכל אחת מהפונקציות הקודמות בתורה ומאחסנת את מה שחוזר מהן בתוך array(תא ראשון במערך מכיל את הכוס, תא שני מכיל את הקפה, תא שלישי מכיל את הסוכר).
// הפונקציה מחזירה את ה - array שנוצר למי שקרא לה.
// לקרוא לפונקציה makeMeACoffee, ולהדפיס את כל ה - items של ה - array שחזר לפי סדר לקונסול.

// solution


// function giveMeAGlass(typeOfGlass) {
//     return `you picked a ${typeOfGlass}`
// }

// function addCoffee(numOfTeeSpoons) {
//     return `${numOfTeeSpoons} tee spoons of coffee has added`
// }

// function addSugar(iWantSuger, numOfTeeSpoons) {
//     if (iWantSuger) {
//         return `please add ${numOfTeeSpoons} tee spoons of sugar`
//     } else {
//         return `no sugar for me`
//     }
// }

// function makeMeACoffee() {
//     let resultArray = []
//     const usersGlass = prompt('which glass would you like?')
//     const glass = giveMeAGlass(usersGlass)
//     const usersNumofCoffeeteeSpoons = +prompt('how many teespoons of coffee would you like')
//     const coffeeTeeSpoons = addCoffee(usersNumofCoffeeteeSpoons)
//     const userWantSugar = confirm('would you like sugar with it?')
//     if (userWantSugar) {
//         const usersNumofSugarteeSpoons = +prompt('how many tee spoons of sugar would you like')
//         var usersSugarTeeSpoons = addSugar(userWantSugar, usersNumofSugarteeSpoons)
//     } else {
//         var usersSugarTeeSpoons = addSugar(userWantSugar)
//     }
//     resultArray.push(glass)
//     resultArray.push(coffeeTeeSpoons)
//     resultArray.push(usersSugarTeeSpoons)
//     return resultArray
// }

// let result = makeMeACoffee()
// console.log(result);

// mission4
// תרגיל 4) מטרה: לכתוב סדרת פונקציות שמייצרות ספר אנשי קשר עם פרטים של חברים.

// לכתוב פונקציה שנקראת getContactsData, היא לא מקבלת פרמטרים ומחזירה array of objects, כל item ב - array מכיל object עם הפרטים הבאים: שם פרטי, שם משפחה, מספר טלפון, אמייל
// לכתוב פונקציה שנקראת getContactsTemplate, היא לא מקבלת פרמטרים, היא קוראת לפונקציה getContacts, רצה בלולאה על ה - array שחזר ובעבור כל item שלו בונה html שמכיל את הפרטים של איש הקשר.
// בסוף מחזירה את כל ה - html שנבנה.
// לקרוא לפונקציה שנקראת printContacts, היא לא מקבלת פרמטרים, היא קוראת לפונקציה getContactsTemplate ומזריקה את ה - html שהוחזר מהפונקציה הזו לתוך div שנמצא בדף index.html בעזרת innerHTML

// solution

// function getContactsData() {
//     return [
//         {
//             firstName: `yuval`,
//             lastName: `Ben Haim`,
//             phoneNum: `052444`,
//             email: `jkhvljb@`,
//         },
//         {
//             firstName: `dudu`,
//             lastName: `maimon`,
//             phoneNum: `023555`,
//             email: `kjvklhb@`,
//         },
//         {
//             firstName: `daniel`,
//             lastName: `hazan`,
//             phoneNum: `054222`,
//             email: `kujhvjhvb@`,
//         },
//     ]
// }

// function getContactsTemplate() {
//     let arrayHtml = ``
//     let contactsArray = getContactsData()
//     contactsArray.forEach(contact => {
//         arrayHtml+=
//         `<tr>
//         <td>${contact.firstName}</td>
//         <td>${contact.lastName}</td>
//         <td>${contact.phoneNum}</td>
//         <td>${contact.email}</td>
//         </tr>`
//     })
//     console.log(arrayHtml);
//     return arrayHtml
// }

// function printContacts() {
//     const table = document.querySelector('table')
//     table.innerHTML += getContactsTemplate()
// }
// printContacts()