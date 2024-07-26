# This is a README for 0x01-ES6-promise

### Learning Objectives
Promises (how, why, and what)
How to use the then, resolve, catch methods
How to use every method of the Promise object
Throw / Try
The await operator
How to use an async function

### Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

Configuration Files

Add the files below to your project directory

package.json

babel.config.js

utils.js
Use when you get to tasks requiring uploadPhoto and createUser.

.eslintrc.js

and…
Don’t forget to run $ npm install when you have the package.json

Response Data Format
uploadPhoto returns a response with the format

{
  status: 200,
  body: 'photo-profile-1',
}
createUser returns a response with the format

{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
