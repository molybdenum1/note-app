import React, { useState } from 'react'

export default function Form(props) {
    let date = new Date();
    let nameIn = React.createRef()
    let dateIn = React.createRef()
    let selIn = React.createRef()
    let contIn = React.createRef()

    // const [note, setNote] = useState({
    //     id: '10',
    //     achieved: false,
    //     name: '',
    //     createdDate: '',
    //     type: '',
    //     content: '',
    //     tillDate: null
    // })
    
    function addNote(){
       return {
            id: '10',
            achieved: false,
            name: nameIn.current.value,
            createdDate: dateIn.current.value,
            type: selIn.current.value,
            content: contIn.current.value,
            tillDate: null
           }

}

    return (
    <div>
 
          <input 
            type="text" 
            placeholder="name"/>
          <input 
            type="text"
            readOnly 
            placeholder={date.getMonth() +' '+ date.getDate() + ' '+ date.getFullYear()}            />
          <select name="category" id="cat">
              {props.type.type.map(el => <option value={el}>{el}</option>)}
          </select>
          <input 
            type="text" 
            placeholder="enter your text"/>
          <input 
            type="submit" 
            onClick={addNote} 
            value="Create Note"/>

    </div>
  )
}
