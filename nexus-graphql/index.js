const { GraphQLServer } = require('graphql-yoga');
const schema = require('./schema');

const server = new GraphQLServer({
  schema,
});

server.start(() => 'Server is running on http://localhost:4000');
