/*---Brief notes on project status 
- At this point, my selectQuestion() function and guess() function are too long and I know there must be a more efficient way to apply the function to each card on `click`. Unfortunately, I just couldn't figure out how to do that.
- I am still trying to figure out how to let the computer know whose turn it is (instead of hard coding players' turn) so that points can be added or detracted as needed. I started creating some variables that I thought I would need, but just couldn't put the pieces together yet. 
- Currently the size of the card change, when the question text fills the block. I would like for the card to maintain its original size. I also want to figure out how to keep the user from being able to click on multiple cards at a time. 
*/

//DISABLE BUTTONS ONCE PAGE LOADS
guessButton.disabled = true;
passButton.disabled = true;

//DOM ELEMENTS
let timer = document.getElementById("fiveMinTimer"); //variable for 5 min clock ID
let timerTwo = document.getElementById("fiveSecTimer"); //variable for 3 sec clock ID
let turnDisp = document.getElementById("turn"); //variable for box that displays whose turn it is
let playerOneScoreBoard = document.getElementById("player-1"); //variable to hold player One's accumulation of points
let playerTwoScoreBoard = document.getElementById("player-2"); //variable to hold player One's accumulation of points

//SCORE VARIABLES
let playerOneScore = 0;
let playerTwoScore = 0;

// PLAYERS' TURN VARIABLES
let playerOneTurn = "Player 1, it's your turn!";
let playerTwoTurn = "Player 2, it's your turn!";

//FIVE MINUTE TIMER
let dispFiveMin = null; //clock display
let countFiveMin = 0; //number the clock is going to count down from (reassigned to specific count in each timing function)
//THREE SECOND TIMER
let dispFiveSec = null; //clock display
let countFiveSec = 0; //number the clock is going to count down from (reassigned to specific count in each timing function)

//ROUND TIMER FUNCTION
function roundTimer() {
  countFiveMin = 300;
  dispFiveMin = setInterval(tick, 1000);

  function tick() {
    let minutes = Math.floor(countFiveMin / 60);
    let seconds = countFiveMin % 60;

    if (seconds < 10) {
      timer.textContent = `${minutes} : 0${seconds}`;
    } else {
      timer.textContent = `${minutes} : ${seconds}`;
    }

    countFiveMin = countFiveMin - 1;
    if (countFiveMin <= 0) {
      timer.textContent = "Time is up!";
    }
  }
}
//CALLING THE ROUND TIMER FUNCTION
console.log(roundTimer(countFiveMin));
console.log(countFiveMin);

//DOM QUERIES - targeting by each 100-level class
let dispQuestion100 = document.getElementsByClassName("level-100");
let dispQuestion200 = document.getElementsByClassName("level-200");
let dispQuestion300 = document.getElementsByClassName("level-300");
let dispQuestion400 = document.getElementsByClassName("level-400");
let dispQuestion500 = document.getElementsByClassName("level-500");

// iterate over array-like object: dispQuestion100
for (let element of dispQuestion100) {
  //EVENT LISTENERS - targeting by class
  element.addEventListener(`click`, selectQuestion);
  console.log(element);
}

// iterate over array-like object: dispQuestion200
for (let element of dispQuestion200) {
  element.addEventListener(`click`, selectQuestion);
  console.log(element);
}

// iterate over array-like object: dispQuestion300
for (let element of dispQuestion300) {
  element.addEventListener(`click`, selectQuestion);
  console.log(element);
}

// iterate over array-like object: dispQuestion400
for (let element of dispQuestion400) {
  element.addEventListener(`click`, selectQuestion);
  console.log(element);
}

// iterate over array-like object: dispQuestion500
for (let element of dispQuestion500) {
  element.addEventListener(`click`, selectQuestion);
  console.log(element);
}

//SELECT A QUESTION FUNCTION - Category 1; Level 100
function selectQuestion(event) {
  guessButton.disabled = false;
  passButton.disabled = false;
  // This is currently hard coded. But need to figure alternative option that's more flexible...
  turnDisp.textContent = `player 1, it's your turn!`;
  questionTimer(countFiveSec);
  if (event.target.id === "cat-1Level100") {
    event.target.textContent = roundOneArray[0].question;
    //if click pass then call pass function
    //if click guess, then call guess function
    //if guess is correct, then points are added to player's score
    //...And it remains player One's turn
    //if guess is incorrect, then points are detracted from player's score
    //...And now it's player two's turn
  } else if (event.target.id === "cat-2Level100") {
    event.target.textContent = roundOneArray[1].question;
  } else if (event.target.id === "cat-3Level100") {
    event.target.textContent = roundOneArray[2].question;
  } else if (event.target.id === "cat-4Level100") {
    event.target.textContent = roundOneArray[3].question;
  } else if (event.target.id === "cat-5Level100") {
    event.target.textContent = roundOneArray[4].question;
  } else if (event.target.id === "cat-6Level100") {
    event.target.textContent = roundOneArray[5].question;
  } else if (event.target.id === "cat-1Level200") {
    event.target.textContent = roundOneArray[6].question;
  } else if (event.target.id === "cat-2Level200") {
    event.target.textContent = roundOneArray[7].question;
  } else if (event.target.id === "cat-3Level200") {
    event.target.textContent = roundOneArray[8].question;
  } else if (event.target.id === "cat-4Level200") {
    event.target.textContent = roundOneArray[9].question;
  } else if (event.target.id === "cat-5Level200") {
    event.target.textContent = roundOneArray[10].question;
  } else if (event.target.id === "cat-6Level200") {
    event.target.textContent = roundOneArray[11].question;
  } else if (event.target.id === "cat-1Level300") {
    event.target.textContent = roundOneArray[12].question;
  } else if (event.target.id === "cat-2Level300") {
    event.target.textContent = roundOneArray[13].question;
  } else if (event.target.id === "cat-3Level300") {
    event.target.textContent = roundOneArray[14].question;
  } else if (event.target.id === "cat-4Level300") {
    event.target.textContent = roundOneArray[15].question;
  } else if (event.target.id === "cat-5Level300") {
    event.target.textContent = roundOneArray[16].question;
  } else if (event.target.id === "cat-6Level300") {
    event.target.textContent = roundOneArray[17].question;
  } else if (event.target.id === "cat-1Level400") {
    event.target.textContent = roundOneArray[18].question;
  } else if (event.target.id === "cat-2Level400") {
    event.target.textContent = roundOneArray[19].question;
  } else if (event.target.id === "cat-3Level400") {
    event.target.textContent = roundOneArray[20].question;
  } else if (event.target.id === "cat-4Level400") {
    event.target.textContent = roundOneArray[21].question;
  } else if (event.target.id === "cat-5Level400") {
    event.target.textContent = roundOneArray[22].question;
  } else if (event.target.id === "cat-6Level400") {
    event.target.textContent = roundOneArray[23].question;
  } else if (event.target.id === "cat-1Level500") {
    event.target.textContent = roundOneArray[24].question;
  } else if (event.target.id === "cat-2Level500") {
    event.target.textContent = roundOneArray[25].question;
  } else if (event.target.id === "cat-3Level500") {
    event.target.textContent = roundOneArray[26].question;
  } else if (event.target.id === "cat-4Level500") {
    event.target.textContent = roundOneArray[27].question;
  } else if (event.target.id === "cat-5Level500") {
    event.target.textContent = roundOneArray[28].question;
  } else if (event.target.id === "cat-6Level500") {
    event.target.textContent = roundOneArray[29].question;
  }

  questionTimer(countFiveSec);
}

// QUESTION TIMER FUNCTION - 5 seconds
function questionTimer() {
  countFiveSec = 5;
  dispFiveSec = setInterval(tock, 1000);

  function tock() {
    let minutes = Math.floor(countFiveSec / 60);
    let seconds = countFiveSec % 60;

    if (seconds < 10) {
      timerTwo.textContent = `${minutes} : 0${seconds}`;
    } else {
      timerTwo.textContent = `${minutes} : ${seconds}`;
    }

    countFiveSec = countFiveSec - 1;
    if (countFiveSec <= 0) {
      timerTwo.textContent = "Done!";
    }
  }
}

//DOM ELEMENTS
let passQuestion = document.getElementById("passButton"); //"Pass" button
let guessQuestion = document.getElementById("guessButton"); //"Guess" button
let typeAnswer = document.getElementById("answerField"); //Text Field for user response to question

// PASS QUESTION EVENT LISTENER
passQuestion.addEventListener(`click`, pass);

// GUESS QUESTION EVENT LISTENER
guessQuestion.addEventListener(`click`, guess);

// PASS QUESTION FUNCTION
function pass(event) {
  if (event.target === passQuestion) {
    turnDisp.textContent = "player 2, it's your turn!";
    passButton.disabled = true;
    questionTimer(countFiveSec);
  }
}

// Submit QUESTION FUNCTION

//Logic: if user submits an answer via `guess` that is ==== to the correct answer,
// then points are added to the player's score card
// and the card is removed from the board
// and player gets another turn

function guess(event) {
  //prevents default refresh
  event.preventDefault();
  // if user clicks guess button
  if (event.target === guessQuestion) {
    // create variable to hold user response in text field
    let userInput = typeAnswer.value;
    // console.log(userInput);
    //check if user input on that object matches answer property on that object
    if (userInput === roundOneArray[0].answer) {
      //Testing if works--SPECIFIC TO QUESTION 1!
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-1Level100").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[1].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-2Level100").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[2].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-3Level100").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[3].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-4Level100").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[4].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-5Level100").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[5].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-6Level100").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[6].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-1Level200").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[7].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-2Level200").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[8].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-3Level200").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[9].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-4Level200").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[10].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-5Level200").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[11].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-6Level200").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[12].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-1Level300").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[13].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-2Level300").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[14].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-3Level300").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[15].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-4Level300").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[16].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-5Level300").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[17].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-6Level300").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[18].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-1Level400").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[19].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-2Level400").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[20].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-3Level400").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[21].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-4Level400").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[22].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-5Level400").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[23].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-6Level400").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[24].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-1Level500").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[25].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-2Level500").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[26].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-3Level500").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[27].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-4Level500").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[28].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-5Level500").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
    if (userInput === roundOneArray[29].answer) {
      console.log(userInput);
      console.log("Correct Answer!");
      document.getElementById("cat-6Level500").textContent = " ";
      // clear text field after user answer is submitted
      document.getElementById("playerForm").reset();
    } else {
      console.log("incorrect answer");
    }
  }
}

// Make each player an object within an array
let playersArray = [
  { id: "player-1", points: [] },
  { id: "player-2", points: [] },
];

// Make jeopardy questions into objects within an array
let roundOneArray = [
  // 6 100-level questions
  {
    id: "cat-1Level100",
    question:
      "Falling off a chair at her audition helped her win the role of the klutzy princess in `The Princess Diaries`",
    answer: "Anne Hathaway",
    points: 100,
  },
  {
    id: "cat-2Level100",
    question:
      "She was 86 when the Broadway musical about her premiered in 1969",
    answer: "Coco Chanel",
    points: 100,
  },
  {
    id: "cat-3Level100",
    question:
      "The genesis of Genesis included this man singing lead; he left for the `big time` as a solo artist",
    answer: "Peter Gabriel",
    points: 100,
  },
  {
    id: "cat-4Level100",
    question: "1971: As `Popeye` Doyle",
    answer: "Gene Hackman",
    points: 100,
  },
  {
    id: "cat-5Level100",
    question:
      "We're sure this Ohioan's mother, Viola, was elated on July 20, 1969, but she kept her feet on the ground",
    answer: "Neil Armstrong",
    points: 100,
  },
  {
    id: "cat-6Level100",
    question:
      "Show that includes `Comedy Tonight`, `Company` & `Send in the Clowns`",
    answer: "Side by Side",
    points: 100,
  },

  // 6 200-level questions
  {
    id: "cat-1Level200",
    question:
      "English: a newspaper story you saved; football: blocking below the waist from behind",
    answer: "clipping",
    points: 200,
  },
  {
    id: "cat-2Level200",
    question:
      "As Chopin could tell you, it was the pen name of Amandine Aurore Lucie Dupin",
    answer: "George Sand",
    points: 200,
  },
  {
    id: "cat-3Level200",
    question:
      "This curry-flavored soup takes its name from the Tamil for `pepper water`",
    answer: "mulligatawny",
    points: 200,
  },
  {
    id: "cat-4Level200",
    question:
      "The Adriatic, Ionian & Black Seas wash the shores of this peninsula",
    answer: "the Balkan Peninsula",
    points: 200,
  },
  {
    id: "cat-5Level200",
    question:
      "Elsa Lanchester played Katie Nanna, the nanny who walks out on the Banks family at the beginning of this film",
    answer: "Mary Poppins",
    points: 200,
  },
  {
    id: "cat-6Level200",
    question: "Wachovia, in 2008",
    answer: "Fargo",
    points: 200,
  },

  // 6 300-level questions
  {
    id: "cat-1Level300",
    question: "Famed director of `Sweeney Todd` on Broadway & Haitian capital",
    answer: "Hal & Port Au Prince",
    points: 300,
  },
  {
    id: "cat-2Level300",
    question:
      "In 1996 companies that produce these consumables announced an end to their ban on TV & radio ads",
    answer: "alcohol",
    points: 300,
  },

  {
    id: "cat-3Level300",
    question:
      "In a Mother Goose nursery rhyme, these 3 words precede `the mouse ran up the clock`",
    answer: "hickory dickory dock",
    points: 300,
  },
  {
    id: "cat-4Level300",
    question:
      "Britannica says this '30s film star was famed `for his distinctive nasal voice... and his fondness for alcohol`",
    answer: "W.C. Fields",
    points: 300,
  },

  {
    id: "cat-5Level300",
    question:
      "Diva fashionista Wilhelmina Slater is the nemesis of this ABC title character",
    answer: "Ugly Betty",
    points: 300,
  },
  {
    id: "cat-6Level300",
    question: "Cavers use special dyes to track the flow of these",
    answer: "(Underground) Rivers",
    points: 300,
  },

  // 6 400-level questions
  {
    id: "cat-1Level400",
    question:
      "`Rond de jambe` means a rotary movement of this body part, on the floor or in the air",
    answer: "the leg",
    points: 400,
  },
  {
    id: "cat-2Level400",
    question:
      "The only poisonous snake in Great Britain, the common adder belongs to this snake family",
    answer: "Viper",
    points: 400,
  },
  {
    id: "cat-3Level400",
    question:
      "Poland's largest airport is located in Warsaw & named for this composer",
    answer: "Chopin",
    points: 400,
  },
  {
    id: "cat-4Level400",
    question: "`If music be the food of love, play on...`",
    answer: "Twelfth Night",
    points: 400,
  },
  {
    id: "cat-5Level400",
    question:
      "In August 1977 she opened her first cookie store in Palo Alto, California",
    answer: "Debbie Fields",
    points: 400,
  },
  {
    id: "cat-6Level400",
    question: "`The Incredible`",
    answer: "`The Hulk`",
    points: 400,
  },

  // 6 500-level questions
  {
    id: "cat-1Level500",
    question:
      "Regarding sets, `R` refers to real numbers & `Q` refers to this group of numbers that also begins with 1",
    answer: "rational numbers",
    points: 500,
  },
  {
    id: "cat-2Level500",
    question:
      "Sherman Minton was appointed to the U.S. Supreme Court in 1949 by this president",
    answer: "Truman",
    points: 500,
  },
  {
    id: "cat-3Level500",
    question:
      "He wrote, `The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep`",
    answer: "Robert Frost",
    points: 500,
  },
  {
    id: "cat-4Level500",
    question:
      "This book says, `Monday burn Millay, Wednesday Whitman, Friday Faulkner...that's our official slogan`",
    answer: "Farenheight 451",
    points: 500,
  },
  {
    id: "cat-5Level500",
    question:
      "This talk show host said, `I admire, respect & adore authors` when she was honored for her book club",
    answer: "Oprah",
    points: 500,
  },
  {
    id: "cat-6Level500",
    question:
      "Randy Traywick is the real name of this man who was a singer & a short order cook at the Nashville Palace",
    answer: "Randy Travis",
    points: 500,
  },
];
console.log(roundOneArray);
