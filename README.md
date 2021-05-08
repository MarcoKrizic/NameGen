Hello, to all of you reading.

My name is Marco and I am learning how to program. Right now I am learning React, but have worked 
in numerous programming languages including Java, C, C#, and SQL. My goal is to upload a bunch of small
demonstration projects while I get the hang of how uploading projects for public viewing works.

This program aims to replicate the name generator used by the main villain of the children's novel, 
Captain Underpants and the Perilous Plot of Professor Poopypants. In the book's plot, he purpose of the name generator
is that the villain takes over the community of the main characters, where he forces everyone to change their
names according to a name chart system that is customary of his homeland, known as New Swissland.

The program is a very simple web app where all the instructions are laid out for the user on screen; enter your first name
and last name in the corresponding fields to have your New Swissland name generated and displayed on screen. The name-changing
mechanic incorporates the first letter of your first name, the first letter of your last name, and the last letter of your
last name into the generation of your new name.

To run the program, launch the app as you would any local React app once this repository is obtained: use your command
terminal to navigate to the folder where the repository is downlooaded, use "npm run build" to check for any errors, and then
"npm run start" to launch the app in localhost.

Here are some important files for reference:


//-----index.html-----//

This is the main HTML page, provides the bare framework for the layout of the web app.


//-----index.js-----//

This file contains the ReactDOM instructions that load all the components into the HTML file. You can see how each 
render function corresponds to an existing "div" referenced from the HTML code.


//-----style.css-----//

This file contains the styling attributes for all files in the program -- HTML and JS files


//-----names.json-----//

This file contains all the alternate names used in the name generation process. The program is designed to reference
this file when coming up with a new name based on user input.


//-----Header.js-----//

This file contains the JS information for the header section of the web page.


//-----Footer.js-----//

This file contains the JS information for the footer section of the web page.


//-----Content.js-----//

This file contains the JS information for the content section of the web page.
This is where the input fields and confirmation button are located. It handles the name changing mechanism of the web page.


