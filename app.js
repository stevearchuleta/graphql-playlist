const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

//===============
// MIDDLEWARE: When a user goes to this endpoint (/graphql), 
// the require('express-graphql') function is called to interact with the endpoint, such that graphQL requests are handled.
// The graphqlHTTP function takes a schema (in order to work properly)
//===============
app.use('/graphql', graphqlHTTP({
    schema: schema
}));

app.listen(5000, () => {
    console.log('🌍 Now listening for requests on port 5000');
});