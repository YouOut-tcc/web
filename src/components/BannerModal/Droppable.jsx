import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export default function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'delete',
  });
  const style = {
    color: isOver ? 'green' : undefined,
    background: isOver ? 'green' : undefined,
    height: "100px",
    width: "100px",
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>

    </div>
  );
}