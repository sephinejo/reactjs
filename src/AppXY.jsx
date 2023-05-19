import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className='container' onPointerMove={mouseMoveHandler}>
      <div
        className='pointer'
        style={{
          transform: `translate(${coordinates.x}px, ${coordinates.y}px)`,
        }}
      ></div>
    </div>
  );
}
