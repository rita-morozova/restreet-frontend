import React from 'react'

class NotesContainer extends React.Component {

  state = {
    notes: [],
    note: '',
    newNote: false,
    video: ''
  }

  componentDidMount = () =>{
    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(data => {
      this.setState({notes: data})
    })
  }

  videoNotes = () => {
    const id = parseInt(this.props.match.params.id, 0)
    this.state.notes.filter(note => note.video_id === id)
  }

  displayNotes = () => {
    this.videoNotes().map(note =>{
      return(
        <div key={note.id}>
          <h4>{note.content}</h4>
          {note.user.id === this.props.user ? <button onClick={this.deleteNote}>X</button> : null}
        </div>
      )
    })
  }

  renderNotes = () => {
    return(
      <div>
        <h3>My Notes</h3> 
        {newNote ? this.newNote() : <button onClick={() => this.setState({newNote: true})}>Add Note</button> }
        <div>
          {this.displayNotes}
        </div>
      </div>
    )
  }

  handleNewNote = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handlePostNote = () =>{
    const userToken = localStorage.getItem('token')
    const note = this.state.note
    if(note !== ''){
      const user = this.props.user
      const video_id = this.state.video.id
      fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization' : `Bearer ${userToken}`
        },
        body: JSON.stringify({video_id, user, note})
      })
      .then(resp => resp.json())
      .then(data =>{
        this.setState({
          notes: [...this.state.notes, data],
          newNote: false,
          note:''
        })
      })
    }
  }

  handleDeleteNote = e => {
    const id = parseInt(e.target.value, 0)
    fetch(`http://localhost:3000/notes/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState((prevState) => ({
       notes: [...prevState.notes.filter(n => n.id !==id)]
      })
      )
      })
  }

  newNote = () => {
    return(
      <div>
        <h4>Write Note:</h4>
        <textarea type='text' name='note' value={this.state.note} onChange={this.handleNewNote} />
        <div>
          <button onClick={this.handlePostNote}>Add</button>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}

export default NotesContainer