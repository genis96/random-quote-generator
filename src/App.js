import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Generate from './Generate';


function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios.get(
      'https://stoicquotesapi.com/v1/api/quotes/random'
    )
    .then(res => {
      setQuote(res.data);
      console.log(res.data)
    }).catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
