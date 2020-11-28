import React from 'react'
import Note from '../Components/Note'


class NotesContainer extends React.Component {

  state = {
    notes: [],
    note: '',
  }

  componentDidMount = () =>{
    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(data => {
      this.setState({notes: data})
    })
  }

  handleNewNote = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmitNote = e =>{
    e.preventDefault()
    this.postNote()
  }

  postNote = () =>{
    const userToken = localStorage.getItem('token')
    const video_id= this.props.video.id
    const user_id =this.props.user.id
      fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization' : `Bearer ${userToken}`
        },
        body: JSON.stringify(({user_id: user_id, video_id: video_id, content: this.state.note}))
      })
      .then(resp => resp.json())
      .then(data =>{
        console.log(this.state.note)
        console.log(data)
        this.setState((prevState) => ({
          notes: [...prevState.notes, data.notes]
        }) )
      })
  }

  
  deleteNote = (note) => {
    let currentNote = this.state.notes.filter(n => n.id ===note.id)
    fetch(`http://localhost:3000/notes/${currentNote.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState((prevState) => ({
       notes: [...prevState.notes.filter(n => n.id !== data.id)]
      })
      )
      })
  }


  render(){
    const videoNotes = this.props.video.notes.filter(note => note.user_id === this.props.user.id)
    return(
      <div>
        <h4>Write Note:</h4>
        <textarea className="input-group input-group-sm"  type='text' name='note' value={this.state.note} onChange={this.handleNewNote} />
        <div>
          <button onClick={this.handleSubmitNote}>Add</button>
        </div>
        {videoNotes.map(note => <Note key={note.id} note={note} user={this.props.user} deleteNote={this.deleteNote} />)}
      </div>
    )
  }
}

export default NotesContainer