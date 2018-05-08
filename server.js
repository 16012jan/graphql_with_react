const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

app.use('/graphql', expressGraphQL({graphiql: true}));

app.listen(4000, () => {
  console.log('app is running on port 4000');
});