import React from 'react'

export default function Note(props) {
    
    return (
        
        <div className="note-main">
            <div className="main-div">
                <span>IC </span>
                <span> {props.note.name}</span>
            </div>
            <div className="main-div">{props.note.createdDate}</div>
            <div className="main-div">{props.note.type}</div>
            <div className="main-div">
                {props.note.content.length > 20 ? 
                    props.note.content.slice(0,20)+'...' :
                    props.note.content}
            </div>
            {props.note.tillDate?<div className="main-div">{props.note.tillDate}</div>:<div></div>}
            <div className="main-div">KNOPOCHKI</div>        
        </div>
  )
}
