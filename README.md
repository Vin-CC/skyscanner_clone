# skyscanner_clone

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Nodejs](https://nodejs.org)
* [Redis](https://redis.io/ )

### Installing

Clone the repo from Github

then in your favorite console: 'npm install'

And you're done!

## Run the application

Launch a Redis server with the default parameters

Then in your console: 'npm start'

You will have the message: 'Listening on 3000'


before accessing the fly data, you need to get a token: **[localhost:3000/auth](localhost:3000/auth)**

then: **[localhost:3000/api/flights](localhost:3000/api/flights)**

you have to add your token in the header: **authorization: "token"**


## Running the tests

In your console: npm test test/"test file"

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [npm](https://www.npmjs.com/) - Dependency Management

## Authors

* **Vincent CANCE**
