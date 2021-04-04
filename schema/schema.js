const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = graphql;

// dummy data
var cities = [
    {   
        cityName: 'Funchal', 
        population: 111892,
        parishes: [
            {freguesia_01: 'Imaculado Coração de Maria', attraction_01:''},
            {fregusia_02: 'Monte', attraction_01:''},
            {fregusia_03: 'Santa Luzia', attraction_01:''},
            {fregusia_04: 'Santa Maria Maior', attraction_01:''},
            {fregusia_05: 'Santo António', attraction_01:''},
            {fregusia_06: 'São Gonçalo', attraction_01:''},
            {fregusia_07: 'São Martinho', attraction_01:''},
            {fregusia_08: 'São Pedro', attraction_01:''},
            {fregusia_09: 'São Roque', attraction_01:''},
            {fregusia_10: 'Sé', attraction_01:''}
        ],
        geography: "",
        history: ""
    },
    {
        cityName: 'Santa Cruz',
        population: 43005,
        parishes: [
            {fregusia_01: 'Camacha', attraction_01:''},
            {fregusia_02: 'Caniço', attraction_01:''},
            {fregusia_03: 'Gaula', attraction_01:''},
            {fregusia_03: 'Santa Cruz', attraction_01:''},
            {fregusia_03: 'Santo António da Serra', attraction_01:''}
        ],
        geography: "",
        history: ""
    },
    {
        cityName: 'Câmara dos Lobos',
        population: 35666,
        parishes: [
            {fregusia_01: 'Câmara dos Lobos', attraction_01:''},
            {fregusia_02: 'Curral das Freiras', attraction_01:''},
            {fregusia_03: 'Estreito de Câmara dos Lobos', attraction_01:''},
            {fregusia_04: 'Jardim da Serra', attraction_01:''},
            {fregusia_05: 'Quinta Grande', attraction_01:''}
        ],
        geography: "",
        history: ""
    },
    {
        cityName: 'Machico',
        population: 21828,
        parishes: [
            {freguesia_01: 'Água de Pena', attraction_01:''},
            {fregusia_02: 'Caniçal', attraction_01:''},
            {fregusia_03: 'Machico', attraction_01:''},
            {fregusia_04: 'Porto da Cruz', attraction_01:''},
            {fregusia_05: 'Santo António de Serra', attraction_01:''}
        ],
        geography: "",
        history: ""
    },
    {
        cityName: 'Ribeira Brava',
        population: 13375,
        parishes: [
            {fregusia_01: 'Ribeira Brava', attraction_01:''},
            {fregusia_02: 'Campanário', attraction_01:''},
            {fregusia_03: 'Serra de Água', attraction_01:''},
            {fregusia_03: 'Achada de Baixo', attraction_01:''}
        ],
        geography: "",
        history: ""
    },
    {
        cityName: 'Calheta',
        population: 11521,
        parishes: [
            {freguesia_01: 'Arco da Calheta', attraction_01:''},
            {fregusia_02: 'Calheta', attraction_01:''},
            {fregusia_03: 'Estreito da Calheta', attraction_01:''},
            {fregusia_04: 'Fajã da Ovelha', attraction_01:''},
            {fregusia_05: 'Jardim do Mar', attraction_01:''},
            {fregusia_06: 'Paúl do Mar', attraction_01:''},
            {fregusia_07: 'Ponta do Pargo', attraction_01:''},
            {fregusia_08: 'Prazeres', attraction_01:''}
        ],
        geography: "",
        history: ""
    },
    {
        cityName: 'Ponta do Sol',
        population: 8862,
        parishes: [
            {fregusia_01: 'Canhas', attraction_01:''},
            {fregusia_02: 'Madalena do Mar', attraction_01:''},
            {fregusia_03: 'Ponta do Sol', attraction_01:''}
        ],
        geography: "",
        history: ""
    },
    {
        cityName: 'Santana',
        population: 7719,
        parishes: [
            {fregusia_01: 'Arco de São Jorge'},
            {fregusia_02: 'Faial'},
            {fregusia_03: 'Ilha'},
            {fregusia_03: 'Santana'},
            {fregusia_03: 'São Jorge'},
            {fregusia_03: 'São Roque do Faial'}
        ],
        geography: "",
        history: ""
    },
    {
        cityName: 'São Vicente',
        population: 5723,
        parishes: [
            {fregusia_01: 'Boaventura'},
            {fregusia_02: 'Ponta Delgada'},
            {fregusia_03: 'São Vicente'}
        ],
        geography: "",
        history: ""
    },
    {
        cityName: 'Porto Moniz',
        population: 2711,
        parishes: [
            {fregusia_01: 'Porto Moniz'},
            {fregusia_02: 'Ribeira da Janela'},
            {fregusia_03: 'Seixal'}
        ],
        geography: "",
        history: ""
    }
]


const CityType = new GraphQLObjectType({
    name: 'City',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        population: {type: GraphQLInt},
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
                // code to get data from db / other source; installed lodash node module (which is the underscore variable)
                // use lodash find method to traverse the array of cities
             return _.find(cities, { cityName: args.cityName});
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});


