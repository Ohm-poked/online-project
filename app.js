// A "2D Array" - A list that holds separate row lists inside it
let theaterSeats = [
    ["Alex", "Ben", "Chloe"],  // Row 0
    ["Dan", "Emma", "Fred"],   // Row 1
    ["Gabe", "Hope", "Ian"]    // Row 2
];

// Outer Loop: Steps through each row index (0, 1, 2)
for (let row = 0; row < theaterSeats.length; row++) {
    let lineResult = "Row " + row + ": ";

    // Inner Loop: Steps through each seat column index inside that row
    for (let col = 0; col < theaterSeats[row].length; col++) {
        // Fetch the exact name sitting at this row and column coordinate
        let personName = theaterSeats[row][col];
        
        lineResult += personName + "\t";
    }

    // Print the completed row list of names
    console.log(lineResult);
}
