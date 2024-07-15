import { useState, useEffect } from 'react';
import RandowQuote from './views/RandowQuote';

function App() {
  const  [quoteList, setQuoteList] = useState([])

  async function getQuotes() {
    const response = await fetch("https://type.fit/api/quotes")
    const quotes = await response.json();
    return quotes
  }

  useEffect(() => {
  getQuotes().then(quotes => {
    setQuoteList(quotes)
  })
  }, [])

  const [randomNum, setRandomNum] = useState(0)
  function handleQuoteClick() {
    console.log('handleQuoteClick')
    setRandomNum(Math.floor(Math.random() * quoteList.length))
    
  }

  return (
    <div className="text-white w-full h-full flex justify-center items-center bg-slate-900">
      {quoteList.length ? <RandowQuote quote={quoteList[randomNum]} onQuoteClick={handleQuoteClick} /> : <div className='w-1/2 h-56 bg-lime-800 rounded'></div>}
    </div>
  );
}

export default App;
