import React from 'react'
import   './Input.css'


const input=(props)=>{
 
    return(
        <div className='groupInputComponent'>
        <label className='textLabelComponent'>{props.textLabel} *</label>
    <input type={props.type} className='inputComponent'
        onChange={e => props.onChange(props.id, e.target.value)}
        onBlur={props.onBlur} 
        id={props.id} value={props.value} />
      </div>
    )
}

export default input