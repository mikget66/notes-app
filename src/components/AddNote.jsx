import React from 'react'

const AddNote = ({handleAddNote}) => {
  const[noteText, setNoteText] = React.useState('')

  const handleChange =(event)=>{
    setNoteText(event.target.value)
  }

  const handleClick = () =>{
    if(noteText.trim().length > 0){
      handleAddNote(noteText)
      setNoteText('')
    }
  }

  return (
    <div className='note new'>
      <textarea 
        onChange={handleChange} 
        cols="10" 
        rows="8" 
        placeholder='Type to add note...'
        value={noteText}
      >

      </textarea>
      <div className="note-footer">
        <small>200 remain</small>
        <button onClick={handleClick} className='save'>save</button>
      </div>
    </div>
  )
}

export default AddNote