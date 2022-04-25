import React from 'react';
import { useState } from 'react';

export default function NoteBTN({open,children}) {
  const [isOpen, setOpen] = useState(open);

  return (
    <div className="note-btn">
        {isOpen && children}
        <button onClick={e=> setOpen(!isOpen)}>Add a Note</button>
    </div>
  )
}
