import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Generate from './Generate';
import './App.css';

import fbIcon from './images/facebook.svg';
import twitterIcon from './images/twitter.svg';

function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch(
      'https://stoicquotesapi.com/v1/api/quotes/random'
    )
    .then(res => res.json()) 
    .then((quote) => {
      setQuote(quote.body);
      setAuthor(quote.author);
      console.log(quote)
    })
    
  }, []);


  let activateButton = () => {
    fetch(
      'https://stoicquotesapi.com/v1/api/quotes/random'
    )
    .then(res => res.json()) 
    .then((quote) => {
      setQuote(quote.body);
      setAuthor(quote.author);
    })
  }

  return (
    <div className='App'>
      <div className='quote'>
        <h1>{quote}</h1>
        <small> {author} </small>
      </div> <br></br>
      <button className='new-quote' onClick={activateButton}>New Quote</button>
    </div>
  );
}

export default App;
