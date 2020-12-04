import React from 'react'
import Note from '../Components/Note'
import {Form, TextArea} from 'semantic-ui-react'
import '../styles/Notes.css'



class NotesContainer extends React.Component {

  state = {
    note: '',
    videoNotes: []
  }

  componentDidMount = () =>{
    this.updateNotes()
  }

  updateNotes = () => {
    fetch('http://localhost:3000/notes')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
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
    this.setState({note:''})
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
        // console.log(data)
        this.setState({videoNotes: data.user.notes.filter(n => n.video_id ===video_id)})
      })    
  }

  
  deleteNote = (note) => {
    console.log(note)
    let currentNote = this.state.videoNotes.filter(n => n.id ===note.id)[0]
    console.log(currentNote)
    fetch(`http://localhost:3000/notes/${currentNote.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      this.setState((prevState) => ({
       videoNotes: prevState.videoNotes.filter(n => n.id !== data.id)
      })
      )
      })
  }


  render(){
    // console.log(this.state.videoNotes)
    const videoComments = this.state.videoNotes.filter(note => note.user_id === this.props.user.id)
    return(
      <div> 
        <div className='textbox'>
          <Form>
            <TextArea placeholder='Add a Note Here' type='text' name='note' value={this.state.note} onChange={this.handleNewNote} style={{width: '350px'}}/>
            <br/>
            <br/>
              <button onClick={this.handleSubmitNote}>Add</button>
              </Form>
        </div>
        {!videoComments.length > 0 ? 
        <h3 className='notes-container'>Add Your First Note Here</h3>
        :
        <>
            <div className='notes-container'>
                <h2>My Notes</h2>
             {videoComments.map(note => (
               <li>
                  <Note key={note.id} note={note} user={this.props.user} deleteNote={this.deleteNote} />
               </li>
            ))}
            </div>
        </>
          }
     </div>
    )
  }
}

export default NotesContainer