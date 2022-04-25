import React from 'react';
import './Achieved.css';
import ArchEl from './ArchEl/ArchEl';

export default function AchievedList(props) {
  let filtered =  props.state.notes.filter(note => note.achieved);  
  let arch = [
    filtered.filter(note => note.type === 'Task'),
    filtered.filter(note => note.type === 'Quote'),
    filtered.filter(note => note.type === 'Idea'),
    filtered.filter(note => note.type === 'Random Thought')
  ];

  return (
    <div className="arch-list">
     <div className="arch-head">
       <div className="arch-head-div">Name</div>
       <div className="arch-head-div">Archieved</div>
     </div>
     <div>
       {
         arch.filter(el=>el.length>0).map(el => <ArchEl el={el}/>)
       }
     </div>
    </div>
  )
}
