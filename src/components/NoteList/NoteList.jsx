import React from 'react';
import Note from './Note/Note';
import './NoteList.css';

export default function NoteList(props) {
  
  return (
    <div className="note-list">
     <div className="note-head">
       <div className="head-div">Name</div>
       <div className="head-div">Created</div>
       <div className="head-div">Category</div>
       <div className="head-div">Content</div>
       <div className="head-div">Dates</div>
       <div className="head-div">CRUD</div>
     </div>
     {
       props.notes.filter(note => !note.achieved)
                  .map(note => <Note key={note.id} note={note}/>)
     }
    </div>
  )
}
