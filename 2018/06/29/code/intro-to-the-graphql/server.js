const { gql, ApolloServer } = require('apollo-server');

const personType = gql`
  type Person{
    name: String!
    age: Int!
  }

  type Query{
    getPerson: Person!
  }
`;

const resolvers = {
  Query: {
    getPerson(){
      return {
        name: 'James',
        age: 12
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs: personType,
  resolvers
});

server
  .listen({ port: 5000 })
  .then( ({url}) => { console.log(`Server is up at: ${url}`)});