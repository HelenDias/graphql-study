const { makeSchema } = require('nexus');
const { User, Mutation, Query } = require('./user');

const schema = makeSchema({
  types: [User, Query, Mutation],
  outputs: {
    schema: `${__dirname}/generated/schema.graphql`,
    typegen: `${__dirname}/generated/typings.ts`,
  },
});

module.exports = schema;
