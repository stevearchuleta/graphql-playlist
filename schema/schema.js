const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

 
const CityType = new GraphQLObjectType({
    name: 'City',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        population: {type: Int},
        parishes: {type: GraphQLString},
        geography: {type: GraphQLString},
        history: {type: GraphQLString}
    })
});

// how a user can jump into the graph to grab data; e.g: city
// args is a property that allows the user to pass a name of a city as part of the query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        city: {
            type: CityType,
            args: {name: {type: GraphQLString}},
            resolve(parent, args) {
                //write code to get data from db / other source
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});


