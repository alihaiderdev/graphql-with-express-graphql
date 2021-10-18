// const graphql = require('graphql');
// const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;
// OR
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');

const codeImproveUserType = new GraphQLObjectType({
  name: 'codeImprove', // write name whatever you want but easy to understand and making some sense
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
const usersListUserType = new GraphQLObjectType({
  name: 'userList', // write name whatever you want but easy to understand and making some sense
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'rootQuery', // write name whatever you want but easy to understand and making some sense
  fields: {
    codeImprove: {
      type: new GraphQLList(codeImproveUserType),
      resolve(parent, args) {
        let data = [
          { id: 1, name: 'ali', email: 'ali@gmail.com', phone: 12345678910 },
          { id: 2, name: 'haider', email: 'haider@gmail.com', phone: 12345678910 },
        ];
        return data;
      },
    },
    usersList: {
      type: new GraphQLList(usersListUserType),
      resolve(parent, args) {
        let data = [
          { id: 1, name: 'mustafa', gender: 'male', email: 'mustafa@gmail.com' },
          { id: 2, name: 'usman', gender: 'male', email: 'usman@gmail.com' },
          { id: 3, name: 'arfeen', gender: 'male', email: 'arfeen@gmail.com' },
          { id: 4, name: 'arsalan', gender: 'male', email: 'arsalan@gmail.com' },
          { id: 5, name: 'zohaib', gender: 'male', email: 'zohaib@gmail.com' },
          { id: 6, name: 'talha', gender: 'male', email: 'talha@gmail.com' },
          { id: 7, name: 'saad', gender: 'male', email: 'saad@gmail.com' },
          { id: 8, name: 'abid', gender: 'male', email: 'abid@gmail.com' },
          { id: 9, name: 'faizan', gender: 'male', email: 'faizan@gmail.com' },
          { id: 10, name: 'hassan', gender: 'male', email: 'hassan@gmail.com' },
          { id: 11, name: 'shayan', gender: 'male', email: 'shayan@gmail.com' },
          { id: 12, name: 'saud', gender: 'male', email: 'saud@gmail.com' },
          { id: 13, name: 'hamza', gender: 'male', email: 'hamza@gmail.com' },
          { id: 14, name: 'jahanzaib', gender: 'male', email: 'jahanzaib@gmail.com' },
          { id: 15, name: 'uzair', gender: 'male', email: 'uzair@gmail.com' },
          { id: 16, name: 'shahroz', gender: 'male', email: 'shahroz@gmail.com' },
          { id: 17, name: 'rehman', gender: 'male', email: 'rehman@gmail.com' },
          { id: 18, name: 'ali', gender: 'male', email: 'ali@gmail.com' },
          { id: 19, name: 'haider', gender: 'male', email: 'haider@gmail.com' },
          { id: 20, name: 'rehban', gender: 'male', email: 'rehban@gmail.com' },
          { id: 21, name: 'mujtaba', gender: 'male', email: 'mujtaba@gmail.com' },
          { id: 22, name: 'talal', gender: 'male', email: 'talal@gmail.com' },
          { id: 23, name: 'haris', gender: 'male', email: 'haris@gmail.com' },
          { id: 24, name: 'waseem', gender: 'male', email: 'waseem@gmail.com' },
          { id: 25, name: 'mehdi', gender: 'male', email: 'mehdi@gmail.com' },
          { id: 26, name: 'mazhar', gender: 'male', email: 'mazhar@gmail.com' },
          { id: 27, name: 'azhar', gender: 'male', email: 'azhar@gmail.com' },
          { id: 28, name: 'akber', gender: 'male', email: 'akber@gmail.com' },
          { id: 29, name: 'kulsoom', gender: 'female', email: 'kulsoom@gmail.com' },
          { id: 30, name: 'ayesha', gender: 'female', email: 'ayesha@gmail.com' },
          { id: 31, name: 'areeba', gender: 'female', email: 'areeba@gmail.com' },
          { id: 32, name: 'jawaria', gender: 'female', email: 'jawaria@gmail.com' },
          { id: 33, name: 'afsheen', gender: 'female', email: 'afsheen@gmail.com' },
          { id: 34, name: 'salma', gender: 'female', email: 'salma@gmail.com' },
          { id: 35, name: 'iram', gender: 'female', email: 'iram@gmail.com' },
          { id: 36, name: 'anam', gender: 'female', email: 'anam@gmail.com' },
          { id: 37, name: 'hina', gender: 'female', email: 'hina@gmail.com' },
          { id: 38, name: 'saba', gender: 'female', email: 'saba@gmail.com' },
          { id: 39, name: 'sana', gender: 'female', email: 'sana@gmail.com' },
          { id: 40, name: 'saima', gender: 'female', email: 'saima@gmail.com' },
          { id: 41, name: 'shazia', gender: 'female', email: 'shazia@gmail.com' },
          { id: 42, name: 'shamim', gender: 'female', email: 'shamim@gmail.com' },
          { id: 43, name: 'laraib', gender: 'female', email: 'laraib@gmail.com' },
          { id: 44, name: 'naba', gender: 'female', email: 'naba@gmail.com' },
          { id: 45, name: 'urooj', gender: 'female', email: 'urooj@gmail.com' },
          { id: 46, name: 'maida', gender: 'female', email: 'maida@gmail.com' },
          { id: 47, name: 'sanobar', gender: 'female', email: 'sanobar@gmail.com' },
          { id: 48, name: 'nimra', gender: 'female', email: 'nimra@gmail.com' },
          { id: 49, name: 'hira', gender: 'female', email: 'hira@gmail.com' },
          { id: 50, name: 'maryum', gender: 'female', email: 'maryum@gmail.com' },
          { id: 51, name: 'saman', gender: 'female', email: 'saman@gmail.com' },
          { id: 52, name: 'jiya', gender: 'female', email: 'jiya@gmail.com' },
          { id: 53, name: 'palwasha', gender: 'female', email: 'palwasha@gmail.com' },
          { id: 54, name: 'farzah', gender: 'female', email: 'farzah@gmail.com' },
          { id: 55, name: 'irha', gender: 'female', email: 'irha@gmail.com' },
          { id: 56, name: 'zara', gender: 'female', email: 'zara@gmail.com' },
          { id: 57, name: 'nida', gender: 'female', email: 'nida@gmail.com' },
          { id: 58, name: 'rimsha', gender: 'female', email: 'rimsha@gmail.com' },
          { id: 59, name: 'afshan', gender: 'female', email: 'afshan@gmail.com' },
          { id: 60, name: 'iqra', gender: 'female', email: 'iqra@gmail.com' },
          { id: 61, name: 'kiran', gender: 'female', email: 'kiran@gmail.com' },
          { id: 62, name: 'romana', gender: 'female', email: 'romana@gmail.com' },
          { id: 63, name: 'rizwana', gender: 'female', email: 'rizwana@gmail.com' },
          { id: 64, name: 'shabana', gender: 'female', email: 'shabana@gmail.com' },
          { id: 65, name: 'farzana', gender: 'female', email: 'farzana@gmail.com' },
          { id: 66, name: 'samreen', gender: 'female', email: 'samreen@gmail.com' },
          { id: 67, name: 'horab', gender: 'female', email: 'horab@gmail.com' },
          { id: 68, name: 'jhon', gender: 'other', email: 'jhon@gmail.com' },
          { id: 69, name: 'jack', gender: 'other', email: 'jack@gmail.com' },
          { id: 70, name: 'karan', gender: 'other', email: 'karan@gmail.com' },
        ];
        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
