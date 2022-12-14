# Note Taker

## Licensing:
[![license](https://img.shields.io/badge/license-MIT-blue)](https://shields.io)

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description:
This is a note taker app created in the UW Coding Bootcamp that can be used to write, save, and delete notes. This application uses an express.js backend to save and retrieve note data from a JSON file.

## Installation:
Use a web browser to access the website: https://calm-escarpment-81657.herokuapp.com/

If you want to use the backend of the application you will need Insomnia

## Usage:
Use a web browser to access the website: https://calm-escarpment-81657.herokuapp.com/

Screenshots of website:

Upon visiting the website you will be taken to a landing page where you can press the Get Started button to go to the note taker.

![Screenshot](public/assets/img/screenshot1.png)

If there are no saved notes you'll see that displayed on the left-hand side

![Screenshot](public/assets/img/screenshot6.png)

If there are saved notes you'll see that displayed on the left-hand side and you are able to use the trash can to delete those

![Screenshot](public/assets/img/screenshot2.png)

In the right-hand side section you can click on Note Title and Note Text then to save press the save button in the upper right-hand side of the page

![Screenshot](public/assets/img/screenshot3.png)

You note will then be saved to the left-hand side of the page

![Screenshot](public/assets/img/screenshot4.png)



On the backend of the app, using Insomnia, the following routes have been created:

GET /notes returns the notes.html file.

GET * returns the index.html file.

GET /api/notes reads the db.json file and returns all saved notes as JSON.

POST /api/notes receives a new note to save on the request body in the db.json file, and return the new note to the client.  You will want to make sure to click on the body tab then select JSON.  After you've selected JSON, you can then put in a note like this:

![Screenshot](public/assets/img/screenshot7.png)

After you POST that you will see the results with a unique id on the right-hand side of Insomnia.


## License:
MIT

## Contributing:
There was already a starter code provided for this project here: https://github.com/coding-boot-camp/miniature-eureka (which is why your see contributors listed in the repo).

Contributions are welcome through forking my repository.

## Tests:
No tests need.

## Questions:
- Github: [andreahergert](https://github.com/andreahergert)
- Email: ahergert24@hotmail.com 