import React from 'react'
import '../styles/Notes.css'
import {Icon} from 'semantic-ui-react'

const Note = ({note, deleteNote}) => {

 
    return(
      <div className='note'>
        <Icon name='trash alternate outline' onClick={() => deleteNote(note)} style={{float: 'right'}}/>
          <p className='font'>{note.content}</p>
      </div>
    )
}

export default Note