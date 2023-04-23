const inquirer = require("inquirer");
const { writeFile } = require("fs/promises")
const {createdSvgDocument} = require("./document");
const { join } = require('path');

//-------------------------------------------------- The functions ------------------------------------------------
//This function checks if the entered text has at least one character and maximum 3 characters or not
function validateText(input) {
    if (input.length === 0) {
        console.log(" (At least one character should be entered!)");
        return false;
    }
    else if (input.length > 3) {
        console.log(" (The text should be up to 3 characters!)");
        return false;
    }
    return true;
}

//This function checks if the entered color is valid or not
function validateColor(input) {
    if(input.trim() === ""){
        console.log(" (A color should be entered!)");
        return false;
    }
    const Color = require('color');
    try {
        /* The module of color is installed. Here, I try to make an object of color with user input if the user input is not valid,
        it gives an error and goes to catch, the I add a # to the begining of the word because it might be a hexadecimal number that user
        has forgotten to start it with #, and if it wasn't neither hexadecimal code ao color keyword, it returns error*/
        const color = Color(input);
    } catch (error) {
        try {
            input = `#${input}`;
            const color = Color(input);
        }
        catch (error) {
            console.log(" (The entered color is not valid!)")
            return false;
        }
    }
    return true;
}

//--------------------------------------------- Tthe question list ----------------------------------------------------
const questions = [
    {
        type: 'input',
        message: 'Enter the desired logo text (up to 3 characters): ',
        name: 'text',
        validate: validateText

    },
    {
        type: 'input',
        message: 'Enter a color for your text (It can be a color keyword or a hexadecimal number): ',
        name: 'textColor',
        validate: validateColor
    },
    {
        type: 'list',
        message: 'Choose a shape from the list: ',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        message: 'Enter a color for your shape (It can be a color keyword or a hexadecimal number): ',
        name: 'shapeColor',
        validate: validateColor
    }
]
//------------------------------------------------- Class of LogoGenerator -------------------------------------------------------
class LogoGenerator {
    run() {
        return inquirer
            .prompt(questions)
            .then((answers) => {
                let createdDoc = createdSvgDocument(answers);
                return writeFile(join(__dirname, '..', 'output', 'logo.svg'), createdDoc);
            })
            .then(() => {
                console.log("Logo.svg is generated!");
            })
            .catch((error) => {
                console.log(error);
                console.log("Sorry! Something went wrong!")
            })
    }
}

module.exports = LogoGenerator;