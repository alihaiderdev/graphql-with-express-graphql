const { GraphQLString, GraphQLInt } = require('graphql');
const db = require('../../models');
const { usersListType } = require('../typeDefs/usersType');
const { statusType } = require('../typeDefs/statusType');

module.exports.addUser = {
  type: usersListType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    status: { type: GraphQLInt },
  },
  // resolve(parent, args) {
  //   const { name, email, gender, status } = args;
  //   db.users.create({ name, email, gender, status });
  //   return args;
  // },
  resolve: async (parent, args) => {
    const { name, email, gender, status } = args;
    // const user = await db.users.findOne({ where: { email: email } });
    // console.log('user : ', email, user.dataValues);
    // if (user.dataValues) {
    //   console.log('This email id is already exist in database');
    // } else {
    //   await db.users.create({ name, email, gender, status });
    // }
    await db.users.create({ name, email, gender, status });
    return args;
  },
};

module.exports.userUpdate = {
  // type: usersListType,
  type: statusType,
  args: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    status: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
    const { name, email, gender, status } = args;
    console.log('args : ', args);
    await db.users.update({ name, email, gender, status }, { where: { id: args.id } });
    // return args;
    return { success: true, message: 'Updated Successfully', error: '' };
  },
};

module.exports.userDelete = {
  // type: usersListType,
  type: statusType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
    await db.users.destroy({ where: { id: args.id } });
    // return args;
    return { success: true, message: 'Deleted Successfully', error: '' };
  },
};
