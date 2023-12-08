import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import { RiDeleteBin2Fill } from "react-icons/ri";


export default function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'delete',
  });
  const style = {
    color: isOver ? 'white' : 'black',
    background: isOver ? 'red' : 'white',
    height: '100px',
    width: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    boxShadow: isOver ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
<RiDeleteBin2Fill  size={50}/>

    </div>
  );
}