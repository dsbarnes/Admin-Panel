# Node Admin Panel

Node Admin Panel is a small project for managing a JSON file, that is to be used
as a mock database, for a front end applications.

This one is spcifically desigend to accopany the personal_website repository
found [here](https://github.com/dsbarnes/personal_website).

## Installation

Clone this repository to your local machine.  
Navigate into the **server** directory and run `yarn install`  
Once insallted, run `node server.js`  
Ther server should now be running locally on port `4000`.

If you would like to change anything, you can run `nodemon server.js`  
Nodemon will listen for changes and restart the server each time the codebase is updated.

Navigate into the **client** directory and run `yarn install`  
Once installed run `yarn start`
The react app should now be running locally on port `3000`. 

## Usage

Once the front end is up an running, simply fill out the form and submit.  

Notes: 
1. The ID is automatically calculated and cannot be manually changed 
(bar altering the codebase)  
2. The `code` blocks that the user can add are not auto formatted (yet). One will need to manually type in `\t` to tab in lines of code.

Upon submission, navigate to the data directory, and notice a file called
`article_new.json` has been created.  
This file should be identical to the previous JSON file, except it also includes
data you just filled out on the front end, as the newest entry.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)