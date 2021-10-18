const { GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLString } = require('graphql');

module.exports.statusType = new GraphQLObjectType({
  name: 'status', // write name whatever you want but easy to understand and making some sense
  fields: () => ({
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    error: { type: GraphQLString },
  }),
});
