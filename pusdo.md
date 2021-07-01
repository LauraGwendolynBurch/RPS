//1. Player chooses ROCK, PAPER or SCISSORS button (aka "choice buttons")
// 2. On click of choice buttons, program registers/store place choice
// 3. On click of choice buttons, prgram randomly chooses ROCK, PAPER or SCISSORS option
    // a. IF player choice is === computer choice, THEN tie, no increment DISPLAY "Play Next Round" botton 
    // b. IF player choice is ROCK...
        // LOSS if computer Choice === PAPER, display LOSS MSG, ++ Computer Score, DISPLAY "PNR" botton 
        // WIN if Computer Choice === SCISSORS, display WIN MSG, ++ Player Score, DISPLAY "PNR" button
    // c. IF player choice is PAPER...
        // LOSS if computer Choice === SCISSORS, display LOSS MSG, ++ Computer Score, DISPLAY "PNR" botton 
        // WIN if Computer Choice === ROCK, display WIN MSG, ++ Player Score, DISPLAY "PNR" button
    // d. IF player choice is SCISSORS...
        // LOSS if computer Choice === ROCK, display LOSS MSG, ++ Computer Score, DISPLAY "PNR" botton 
        // WIN if Computer Choice === PAPER, display WIN MSG, ++ Player Score, DISPLAY "PNR" button
// 5. WHEN player score or computer score === 3...
    // a. IF player score > computer score, DISPLAY "Win MSG", DISPLAY "Reset" button
    // b. IF player score < computer score, DISPLAY "Lose MSG", DISPLAY "Reset" button
// On click of "Reset" button
    // a. Player score === 0
    // b. Computer score === 0