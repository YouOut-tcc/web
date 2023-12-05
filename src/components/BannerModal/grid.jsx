import React from 'react';

export function Grid({children, columns}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: "2vw",
        padding: 10,
      }}
    >
      {children}
    </div>
  );
}