//To run other js file code in current js file, use require
let {helpFn} = require("./Help");
let {viewBirthdayListFn} = require("./viewBirthdayList");
let {wishAllFn} = require("./WishAllFriends");
 

// Take the command as input from the user which he/she wants to execute
let command_input = process.argv.slice(2);

//Identifying the command which user wants to execute
let command = command_input[0];



switch (command) {
  //If command is Help, it will lists all available commands which the user can execute as per his/her requirements.
  case "Help":
    console.log("\nHelp Command Is Executed !");
    helpFn();
    break;

    /*If command is Wish_All,it will send a happy birthday message to all the friends of the user and will generate an excel sheet 
      of user's friend who have birthday either today or in the recent past.*/
  case "Wish_All":
    console.log("\nWish All Command Is Executed !");
    wishAllFn();
    break;

    /*If command is View_Birthday_List, it will print the name as well as date of birth of all the friends of users who have
    birthday either today or int the recent past*/
  case "View_Birthday_List":
    console.log("\nView Birthday List Command Is Executed !");
    viewBirthdayListFn();
    break;

    /*If command is invalid i.e. other than above mentioned commands, then it will tell the user that the command that 
    you have enetered is not available. You can take a look in the help section to view available commands*/
  default:
    console.log("\nWRONG COMMAND !!! Enter 'Help' to see the list of all commands");
}