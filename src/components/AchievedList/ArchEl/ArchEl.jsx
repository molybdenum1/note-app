import React from 'react'

export default function ArchEl(props) {

  
  return (
    <div className="arch-main">
      <div className="arch-div">{props.el.length ? props.el[0].name : 0}</div>
        {/* <div className="arch-div">12323</div> */}
        <div className="arch-div">{props.el.length}</div>
    </div>
  )
}
