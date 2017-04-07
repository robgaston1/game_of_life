import React from 'react';

const Info = (props) => {
  return (
      <div>
        <h1>John Conway's Game of Life Simulator</h1>
        <div className="summary">
        <p>Simplified, the game of life depicts the genesis and death of cellular life according to basic mathematical rules.</p>
        <p>If you'd like to read up on John Conway's Game of Life, visit
          <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="blank"> this </a>Wikipedia article
          or watch Conway talk about it <a href="https://www.youtube.com/watch?v=E8kUJL04ELA" target="blank">on this Youtube video.</a>
      </p>
    </div>
      </div>
  )
}

export default Info;
