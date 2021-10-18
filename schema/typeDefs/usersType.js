const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

module.exports.usersListType = new GraphQLObjectType({
  name: 'usersList', // write name whatever you want but easy to understand and making some sense
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});
