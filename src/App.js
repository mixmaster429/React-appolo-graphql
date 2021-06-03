import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './App.css';

function App() {
  const GET_DOGS = gql`
    query GetBooks {
      books {
        title
        author
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h2>React + GraphQL Test</h2>
      {data.books.map((book, index) => {
        return <p key={index}>{book.title}</p>;
      })}
    </div>
  );
}

export default App;
