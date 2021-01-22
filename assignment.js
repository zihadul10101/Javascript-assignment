

function kilometerToMeter(kiloMeter) {    // Call function     
    if (kiloMeter>0) {
        var meter = kiloMeter * 1000;        /*1 kilometer =1000 meter, to convert meter*/
    return meter;
    } else {
        return false;
    }
}
// var result = kilometerToMeter(-1);
// console.log(result);


function budgetCalculator(watch, mobile, laptop) {        // Call function
    if (watch,mobile,laptop >0) {
        var totalBudget = 0;       // Declare totalBudget, give it the value of 0
    var watchPrize = 50;       // Declare watchPrize, give it the value of 50
    var totalWatchPrize = watch * 50; // Declare totalWatchPrize, give it the value of watch(parameter) multipiy by watchPrize

    var mobilePrize = 100;   // Declare mobilePrize, give it the value of 100

    var totalMobilePrize = mobile * 100; // Declare totalMobilePrize, give it the value of mobile(parameter) multipiy by mobilePrize
    var laptopPrize = 500;// Declare laptopPrize, give it the value of 500

    var totalLaptopPrize = laptop * 500; // Declare totalLaptopPrize, give it the value of laptop(parameter) multipiy by laptopPrize
    var totalBudget = totalWatchPrize + totalMobilePrize + totalLaptopPrize;     /*total budgetCalculator ,   Print result  */
    return totalBudget;
    } else {
        return false;
    }
}
// var result=budgetCalculator(1,5,-1);
// console.log(result);


function hotelCost(stayHotal) {        // Call function
    var totalCost = 0;           // Declare totalCost, give it the value of 0
    if (stayHotal <= 10) {          /*first 10 day stay in hotal.Day(1-10); */
        totalCost = stayHotal * 100;
    }
    else if (stayHotal <= 20) {        /*second 10 day stay in hotal.Day(11-20); */
        var firstSection = 10 * 100;
        var remaining = stayHotal - 10;
        var secondSection = remaining * 80;
        var totalCost = firstSection + secondSection;

    }
    else {
        var firstSection = 10 * 100;
        var secondSection = 10 * 80;
        var remaining = stayHotal - 20;
        var thirdSection = remaining * 50;       /*stay hotal  Day(20-.....); */
        totalCost = firstSection + secondSection + thirdSection;     // Print result 
    }
    return totalCost;                              /*total hotel cost*/
}
// // var result = hotelCost(20);
// // console.log(result);


function megaFriend(arry) {          // Call function
if (arry>[]) {
    var largestName = "";       // Declare largestName, give it the value of empty string

    for (var i = 0; i < arry.length; i++) {
        if (largestName.length < arry[i].length) {       // Using .length
            largestName = arry[i];
        }
    }
    return largestName;
} else {
    return false;
}
}
// console.log(megaFriend([]));