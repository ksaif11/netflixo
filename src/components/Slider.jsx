import React from 'react'
import CardSlider from './CardSlider';



export default function Slider({movies}) {

    const getMoviesFromRange=(from,to)=>{
        return movies.slice(from,to);
    };

  return (
    <div>
      <CardSlider title="Tranding now" data={getMoviesFromRange(0,10)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(10,20)} />
      <CardSlider title="Blockbuster" data={getMoviesFromRange(20,30)} />
      <CardSlider title="Popular on Netflix" data={getMoviesFromRange(30,40)} />
      <CardSlider title="Action Movies" data={getMoviesFromRange(40,50)} />
      <CardSlider title="Epic Stories" data={getMoviesFromRange(50,60)} />
    </div>
  )
}
