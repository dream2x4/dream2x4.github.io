let countDownDate = new Date ("2023-05-12"); /* counting down to this date 12-05-2023 (DK date )*/
let t = setInterval(timer,1000); /* this shows that the computer counts in millisecods. 1000 millisecods = 1 secods 
                                    and updates countdowb*/

function timer (){
    /* function that displays time that is left */
    var now = new Date().getTime(); 
    var timeleft = countDownDate - now; /* this makes the computer know from the day you turn it on how many time are left */
        
    // Calculating the days, hours, minutes left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        
    // Result is output to the specific element
    document.getElementById("countdown").innerHTML = days + " : " + hours.toString().padStart(2,"0") + " : " + minutes.toString().padStart(2,"0");
  
        

    // https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript?fbclid=IwAR2BytGZVSm8SeJv-TVXdMAaHrz6VZ0Rc2n2XN88iM8LvN5VVwW3rH5IFCw
    /* web page on how to do a countdown */

    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart?fbclid=IwAR2br85py68q7n5QHLizcOQH7SCKeKHJi4aRLrpwSKEAzUm_HZW0FLsHeNs */
    /* String.prototype.padStart() */


    /* https://www.w3schools.com/jsref/jsref_tostring_number.asp?fbclid=IwAR03Qjb6iqC_HyU3r28OBY5FjiAl2YI_nDch1UsfFcMYAAE39fxYjJFB-sc */
    /* JavaScript Number toString() */
}