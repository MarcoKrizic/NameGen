/*
* This is a JS component that handles the "content" div of the HTML page.
* This div is responsible for the new name generation of the users based on their inputted entries.
*/

var React = require('react');
var ReactDOM = require('react-dom');

//All of the name data is imported from this json file (present in "data" folder)
var nameData = require('../../data/names.json');

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {frstname: "", lstname: ""};
        this.handleChangeOne = this.handleChangeOne.bind(this);
        this.handleChangeTwo = this.handleChangeTwo.bind(this);
        this.renderName = this.renderName.bind(this);
    }

    handleChangeOne(event) {
        this.setState({frstname: event.target.value});
    }

    handleChangeTwo(event) {
        this.setState({lstname: event.target.value});
    }
    

    renderName(event) {

        var finalFirstName = "";
        var finalLastNameOne = "";
        var finalLastNameTwo = "";

        event.preventDefault();

        const inputFirstName = this.state.frstname;
        const inputLastName = this.state.lstname;
        
        const firstNamePointer = inputFirstName.charAt(0);
        const lastNamePointerOne = inputLastName.charAt(0);
        const lastNamePointerTwo = inputLastName.charAt(inputLastName.length - 1);


        findNameByChar(nameData, firstNamePointer, lastNamePointerOne, lastNamePointerTwo, 
                       finalFirstName, finalLastNameOne, finalLastNameTwo);
        


        //in-built function to search through JSON file
        function findNameByChar(nameData, firstNamePointer, lastNamePointerOne, lastNamePointerTwo, 
                                finalFirstName, finalLastNameOne, finalLastNameTwo) {
            
                                    
            for (var i = 0; i < nameData.firstName.length; i++) {
                if (nameData.firstName[i].firstLetter == firstNamePointer) {
                    finalFirstName = nameData.firstName[i].altFirstName;
                    //console.log(finalFirstName);
                    
                }    
            }

            for (var j = 0; j < nameData.lastName.length; j++) {
                if (nameData.lastName[j].firstLetter == lastNamePointerOne) {
                    finalLastNameOne = nameData.lastName[j].altLastNamePrefix;
                    
                }    
            }

            for (var k = 0; k < nameData.lastName.length; k++) {
                if (nameData.lastName[k].lastLetter == lastNamePointerTwo) {
                    finalLastNameTwo = nameData.lastName[k].altLastNameSuffix;
                    
                }    
            }

            document.getElementById("newName").innerHTML = 
            (`Your new name: `+finalFirstName+` `+finalLastNameOne+finalLastNameTwo);
            
        }    

    }
    
    render() {

        return [<p>Enter your name in the text box below.
                   You will be given a generated name based on Professor Poopypants' ingenious name changing chart. 
                   We will not be revealing the name changing combinations here -- it's supposed to be a surprise!
                   </p>,

                <form id="nameForm">
                <input type="text" id="frstName" name="frstname" placeholder="First Name" value={this.state.frstname} onChange={this.handleChangeOne}></input>
                <input type="text" id="lstName" name="lstname" placeholder="Last Name" value={this.state.lstname} onChange={this.handleChangeTwo}></input>
                <input type="button" id="nameConfirm" value="Submit" onClick={this.renderName}></input>
                </form>,

                <p>&nbsp;</p>,

                <div id="newName">

                </div>,

                <div id="newGuide">
                    <p>&nbsp;</p>
                    <p>To enter a new name, simply refresh the page and type a new name into the input fields.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
                
        ];
    }

    

}

module.exports = Content;