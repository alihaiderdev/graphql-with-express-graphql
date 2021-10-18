// // const graphql = require('graphql');
// // const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;
// // OR
// const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
// var db = require('./models');

// const codeImproveUserType = new GraphQLObjectType({
//   name: 'codeImprove', // write name whatever you want but easy to understand and making some sense
//   fields: () => ({
//     id: { type: GraphQLInt },
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//     phone: { type: GraphQLString },
//   }),
// });
// const usersListUserType = new GraphQLObjectType({
//   name: 'userList', // write name whatever you want but easy to understand and making some sense
//   fields: () => ({
//     id: { type: GraphQLInt },
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//     gender: { type: GraphQLString },
//     status: { type: GraphQLString },
//     // createdAt: { type: GraphQLString },
//     // updatedAt: { type: GraphQLString },
//   }),
// });

// const RootQuery = new GraphQLObjectType({
//   name: 'rootQuery', // write name whatever you want but easy to understand and making some sense
//   fields: {
//     codeImprove: {
//       type: new GraphQLList(codeImproveUserType),
//       resolve(parent, args) {
//         let data = [
//           { id: 1, name: 'ali', email: 'ali@gmail.com', phone: 12345678910 },
//           { id: 2, name: 'haider', email: 'haider@gmail.com', phone: 12345678910 },
//         ];
//         return data;
//       },
//     },
//     usersList: {
//       type: new GraphQLList(usersListUserType),
//       async resolve(parent, args) {
//         let data = await db.users.findAll({});
//         return data;
//       },
//     },
//   },
// });

// module.exports = new GraphQLSchema({ query: RootQuery });
