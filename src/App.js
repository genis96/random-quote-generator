import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className='quote-container'>
      <div className='quote'> <h3>{quote}</h3></div>
      <div className='author'> <small>{author}</small></div>
      
      <div className='btn'>
        <div className='social-media'>
          <a className='tweet' href='#'>
            <span><img src={twitterIcon} alt="" /></span>
          </a>
          <a className='fb' href='#'>
            <span><img src={fbIcon} alt="" /></span>
          </a>
        </div>
      </div>
      
      <button className='new-quote' onClick={activateButton}>New Quote</button>
    </div>
  );
}

export default App;
