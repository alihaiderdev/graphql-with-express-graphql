const { GraphQLList, GraphQLInt } = require('graphql');
const { usersListType, userDetailType } = require('../typeDefs/usersType');

module.exports.usersList = {
  type: new GraphQLList(usersListType),
  resolve: async (parent, args, context) => {
    const contextData = await context(); // if we call this context function in any mutation or  query then thye code written in server.js file executes
    console.log('contextData : ', contextData);
    const { dbConfig } = parent;
    let data = await dbConfig.users.findAll();
    return data;
  },
};

module.exports.userDetail = {
  type: new GraphQLList(usersListType),
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (parent, args, context) => {
    console.log('args : ', args);
    let data = await parent.dbConfig.users.findAll({ where: { id: args.id } });
    return data;
  },
};
