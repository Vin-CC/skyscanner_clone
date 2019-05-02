"# skyscanner_clone" 

You have to install redis in order to make it work: https://redis.io/ 

before accessing the fly data, you need to get a token:
localhost:3000/auth

then:
localhost:3000/api/flights
you have to add your token in the header:
authorization: <token>
