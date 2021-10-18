const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

module.exports.codeImproveType = new GraphQLObjectType({
  name: 'codeImprove', // write name whatever you want but easy to understand and making some sense
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
