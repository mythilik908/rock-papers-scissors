# Rock, Paper, Scissors Game
## Overview
This project is a modern web-based implementation of the classic "Rock, Paper, Scissors" game, built using React and styled with CSS. It offers a dynamic and interactive experience with animations, a responsive design, and a score-tracking system. The game is divided into two main components: the home screen and the game screen.

## Features
## Home Screen

Choice Selection: Players can select between rock, paper, or scissors by clicking on the corresponding icons. <br>
Computer Choice Generation: The computer's choice is randomly generated from the three options. <br> 
Score Display: The current score is displayed prominently, tracking the player's progress. <br>
Rules Dialog: A button that opens a modal displaying the game rules, enhancing user understanding. <br> 
Responsive Design: The layout adapts to different screen sizes for an optimal experience on both desktop and mobile devices. <br>

## Game Screen

Player and Computer Choices: Displays the player's and computer's choices with corresponding images and animations. <br>
Result Announcement: Announces the result of the game (win, lose, tie) after a brief suspense period with a loading spinner. <br>
Confetti Animation: Celebrates a win with a confetti animation, enhancing user satisfaction. <br>
Play Again Button: Allows the player to start a new round easily. <br>
Score Update: Updates and displays the player's score based on the game outcome. <br>

## Technologies Used
React: For building the user interface and managing component states. <br>
React Router: For navigation between the home and game screens. <br>
Framer Motion: For adding animations to the choice icons. <br>
React Spinners: For displaying a loading spinner while waiting for the game result. <br>
Material-UI: For the dialog component used in displaying the game rules. <br>
CSS: For styling the application and ensuring a responsive design. <br>
React Confetti: For the confetti animation on a win. <br>

## How It Works

## Home Component:

The user selects rock, paper, or scissors. <br>
The computer's choice is randomly generated. <br>
The game state (player choice, computer choice, and score) is passed to the Game component. <br>

## Game Component:

Displays the choices made by the player and the computer. <br>
After a short delay with a spinner, the computer's choice is revealed. <br>
The result is calculated and displayed (win, lose, tie). <br>
If the player wins, the score is incremented and confetti is shown. <br>
The player can click "Play Again" to start a new round, returning to the Home component with the updated score. <br>
This project provides a fun and engaging way to play Rock, Paper, Scissors online, leveraging modern web technologies to enhance the classic game experience. <br>






