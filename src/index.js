const {GraphQLServer} = require('graphql-yoga');

const typeDefs ='./src/schema.graphql';
const Query = require('./resolvers/query');

const resolvers = {
  Query,

};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log('Server is running on http://localhost:4000'));