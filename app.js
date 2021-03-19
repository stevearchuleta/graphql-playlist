const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

//===============
// MIDDLEWARE: When a user goes to this endpoint (/graphql), 
// the require('express-graphql') function is called to interact with the endpoint, such that gaphQL requests are handled.
// The graphqlHTTP function takes a schema (in order to work properly)
//===============
app.use('/graphql', graphqlHTTP({

}));

app.listen(5000, () => {
    console.log('🌍 Now listening for requests on port 5000');
});