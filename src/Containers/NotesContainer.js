import React from 'react'
import Note from '../Components/Note'


class NotesContainer extends React.Component {

  state = {
    notes: [],
    note: '',
    videoNotes: []
    // user: {notes:[]}
  }

  componentDidMount = () =>{
    this.updateNotes()
  }

  updateNotes = () => {
    fetch('http://localhost:3000/notes')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          notes: data,
          videoNotes: data.filter(note => note.video_id === this.props.video.id)
        })
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
      .then(data => {
        console.log(data)
        // this.setState(prevState => ({
        //   videoNotes: [...prevState.videoNotes, data.user.notes.filter(n => n.video_id ===video_id)]
        // }))
        this.setState(prevState =>({
          videoNotes: [...prevState.videoNotes, data]
        }))
      })
      // .then(this.updateNotes())
      
  }

  
  deleteNote = (note) => {
    let currentNote = this.state.notes.filter(n => n.id ===note.id)[0]
    fetch(`http://localhost:3000/notes/${currentNote.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState((prevState) => ({
       videoNotes: prevState.videoNotes.filter(n => n.id !== data.id)
      })
      )
      })
  }


  render(){
    const videoComments = this.state.videoNotes.filter(note => note.user_id === this.props.user.id)
    return(
      <div>
        <h4>Write Note:</h4>
        <textarea className="input-group input-group-sm"  type='text' name='note' value={this.state.note} onChange={this.handleNewNote} />
        <div>
          <button onClick={this.handleSubmitNote}>Add</button>
        </div>
        {videoComments.map(note => <Note key={note.id} note={note} user={this.props.user} deleteNote={this.deleteNote} />)}
      </div>
    )
  }
}

export default NotesContainer