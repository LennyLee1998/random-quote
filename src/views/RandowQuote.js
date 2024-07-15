import React from 'react'
import Tweets from '../components/svgs/Tweets'

const RandowQuote = ({quote, onQuoteClick}) => {
  function handleXClick() {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("我 是 一 个 天才")}-${quote?.author?.split(",")[0]}`)
  }
  return (
    <div className='t w-1/2 h-56 bg-lime-800 rounded p-10 pt-10  text-center'>
      <div className='h-4/5'>
        <h2 className='h-2/3 px-8 font-bold leading-loose mb-5'>{quote?.text}</h2>
        <span className=''>{(quote?.author?.split(",")[0] !== "type.fit") ? quote?.author?.split(",")[0] : "Lenny Lee"}</span>
      </div>
      <div className='w-full h-0.5 bg-slate-200 mt-4'/>
      <div className='mt-1 flex items-center justify-center'>
        <div className='flex-1'><button className=' rounded px-3 py-1 bg-zinc-800 mt-2 hover:bg-slate-800' onClick={() => onQuoteClick() }>Switching</button></div>
        <div  className='pt-2 cursor-pointer' onClick={handleXClick}><Tweets/></div>
      </div>
    </div>
  )
}

export default RandowQuote