// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function displays an answer based on the guess
 */
function displayAnswer () {
  
  	// initialize variables
	let answer = ""
	
	// get user input
	let temperature = parseInt(document.getElementById('temperature').value)


  	// if guess is random number, display "Correct"
	if (temperature<15) {
		answer = "It's cold outside."
	} 
  else {
    answer = "It's hot outside."

    }  

  // display the results
  document.getElementById('answer').innerHTML = answer
}
