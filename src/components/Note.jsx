import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
const Note = () => {
  return (
    <div className='note'>
        <span>this is the first note</span>
        <div className="note-footer">
          <small>13/04/2023</small>
          <MdDeleteForever className='delete-icon'/>
        </div>
    </div>
  )
}

export default Note