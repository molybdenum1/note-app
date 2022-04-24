import React from 'react';
import './Achieved.css';

export default function AchievedList(props) {
  //console.log(props)
  let filtered =  props.notes.filter(note => note.achieved)
  let i = 0;
  
  filtered.push(i)
  console.log(filtered);
  return (
    <div className="arch-list">
     <div className="arch-head">
       <div className="arch-div">Name</div>
       <div className="arch-div">Created</div>
       <div className="arch-div">Category</div>
     </div>
     <div>
       {
         
    
       }
     </div>
    </div>
  )
}
