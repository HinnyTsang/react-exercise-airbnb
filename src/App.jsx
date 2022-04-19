import React from 'react'
import { Navbar, Hero, Card } from './components'
import './app.css'
import Data from './components/card/data'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
const App = () => {
  const cardFilled = Data.map(item => <Card
    {...item}
  />
  );
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <section className='card--container'>
        {cardFilled}
      </section>
    </div>
  )
}

export default App







