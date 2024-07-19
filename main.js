#!/usr/bin/env node
import { differenceInSeconds } from 'date-fns';
// function for count down second
function* countdownTimer(seconds) {
    while (seconds > 0) {
        yield seconds;
        seconds--;
    }
}
// step 2 Counter initialization
let timerIterator = countdownTimer(20); // 20 seconds countdown, adjust as needed
// function to create a countdown timer
function displayCountdown() {
    let result = timerIterator.next();
    if (!result.done) {
        const now = new Date();
        const countdownTime = new Date(now.getTime() + (result.value * 1000));
        const remainingSeconds = differenceInSeconds(countdownTime, now);
        console.log(`Remaining Seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000); // 1 second is equal to 1000 ms
    }
    else {
        console.log("Countdown Complete!");
    }
}
// invoke
displayCountdown();
