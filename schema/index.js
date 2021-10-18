// const graphql = require('graphql');
// const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;
// OR
const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const { addUser, userUpdate, userDelete } = require('./mutations/userMutations');
const { codeImprove } = require('./queries/codeImproveQueries');
const { usersList, userDetail } = require('./queries/usersQueries');

const RootQuery = new GraphQLObjectType({
  name: 'rootQuery', // write name whatever you want but easy to understand and making some sense
  fields: {
    codeImprove: codeImprove,
    usersList: usersList,
    userDetail: userDetail,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'mutation', // write name whatever you want but easy to understand and making some sense
  fields: {
    createUser: addUser,
    updateUser: userUpdate,
    deleteUser: userDelete,
  },
});

// module.exports = new GraphQLSchema({ query: RootQuery });
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
