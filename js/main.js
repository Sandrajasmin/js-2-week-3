import '../css/style.css' 

// Using import and export - se math.js for function 
import {addNumbers} from "./math.js";

const result = addNumbers(100, 100);

console.log("Result: ", result);
    //returns Result: 200

// TASK FROM DURING LECTURE
    // please create a module script file name it actions 
    // create a function which shows message to user
    // name this function showMessage this function takes a message as an argument
    // console log it to the user

import { showMessage } from './action.mjs';

showMessage("Hello i am showMessage function i am being used")
    //Returns: Hello i am showMessage function i am being used

// 2. Combining named exports/imports with default exports/imports

// change showMessage til show text. new name 
import { showmessage1 as showText, ShowAge } from "./action.mjs";

import { shootTheBall } from "./team.mjs";

//Import default
import passTheBall from "./team.mjs";

//using the function
showText("YOU!");
ShowAge(30);
passTheBall();
shootTheBall();

