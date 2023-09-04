import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';




// The branch field of a book indicates which library has it in stock
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    branch: 'riverside',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    branch: 'downtown',
  },
];
const libraries = [
  {
    branch: 'downtown',
    books
  },
  {
    branch: 'riverside',
    books
  },
];
const resolvers = {
  Query: {
    libraries: () => libraries,
  },

  Library:{
    books: (parent:any)=>{
     return books.filter(book=> book.branch === parent.branch)
    }
  }
};

const typeDefs = `#graphql
  type Query {
    libraries: [Library]
  }
  type Library{
    branch: String
    books:[Book]
  }
  type Book{
    title: String
    author: String
    branch: String
    }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(request:any) {
  return handler(request);
}

export async function POST(request:any) {
  return handler(request);
}