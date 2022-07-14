import books from './xml/books-react.xml'
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import Book from './components/Book';


var parseString = require('xml2js').parseString;


function App() {

  const [book, setBook] = useState([])

  // získání a převedení dat z XML
  useEffect(() => {
    axios.get(books, {
      "Content-Type": "application/xml; charset=utf-8"
    })
      .then((response) => {
        parseString(response.data, function (err, result) {
          setBook(result.catalog.book)
        });
        
      });
    }, [])



  return (
    <div className="App">
      <table>
        <thead>
          <tr>
          <th></th>
          <th>Author</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Price</th>
          <th>Publish date</th>
          <th>Description</th>
          <th>Unavailable</th>
          </tr>
        </thead>

        {book.map((x, key) => {
          return (
            <Book x={x} key={key} />
          )
        })}
      </table>
    </div>
  );
}

export default App;
