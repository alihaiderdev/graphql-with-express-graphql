const { GraphQLList } = require('graphql');
const { codeImproveType } = require('../typeDefs/codeImproveType');

module.exports.codeImprove = {
  type: new GraphQLList(codeImproveType),
  resolve(parent, args) {
    let data = [
      { id: 1, name: 'ali', email: 'ali@gmail.com', phone: 12345678910 },
      { id: 2, name: 'haider', email: 'haider@gmail.com', phone: 12345678910 },
    ];
    return data;
  },
};
