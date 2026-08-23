// Outer Loop: Counts hours (from 1 to 3 o'clock)
for (let hour = 1; hour <= 3; hour++) {
    console.log("⏰ The hour hand clicks to: " + hour + " o'clock");

    // Inner Loop: Counts the minutes inside that hour
    // (We will just count up to 15 minutes so it doesn't flood your screen!)
    for (let minute = 0; minute <= 15; minute += 5) {
        console.log("   --> The time is " + hour + ":" + minute);
    }
}
