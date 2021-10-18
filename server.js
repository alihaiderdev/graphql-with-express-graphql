const express = require('express');
// const expressGraphQL = require('express-graphql').graphqlHTTP;
// OR
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/index');
const userController = require('./controllers/userController');
const db = require('./models');
var cors = require('cors');

const PORT = 8000;
const app = express();

require('./models/Users');

app.use(express.json());
// app.use(cors());
// app.use(cors({ origin: '*' }));
// OR
app.use(cors({ origin: true, credentials: true }));

var rootValues = {
  ip: `202.141.253.34`,
  dbConfig: db,
};

const context = async (req, res) => {
  //   console.log('req : ', req);
  //   console.log('res : ', res);
  return { host: req.headers.host, token: 'token' };
};
app.get('/scopes', userController.scopes);
// app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true, rootValue: rootValues, context: () => context(req) }));
app.use(
  '/graphql',
  graphqlHTTP((req, res) => ({ schema: schema, graphiql: true, rootValue: rootValues, context: () => context(req, res) }))
);

app.listen(PORT, () => console.log(`Server run on http://localhost:${PORT}`));
