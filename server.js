const express = require('express');
// const expressGraphQL = require('express-graphql').graphqlHTTP;
// OR
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const PORT = 8000;
const app = express();

app.use(express.json());
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => console.log(`Server run on http://localhost:${PORT}`));
