
import React from 'react'

const Note = ({note, deleteNote}) => {

 
    return(
      <div>
          <h4>{note.content}</h4>
          <button onClick={deleteNote}>X</button>
        {/* {note.user_id === this.props.user.id ? <button onClick={props.deleteNote}>X</button> : null} */}
      </div>
    )
}

export default Note