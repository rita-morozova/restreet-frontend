import { tile2LatLng } from 'google-map-react'
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
        this.setState((prevState) =>({
          notes: [...prevState.notes, data], note:''
        })
        )
      })
  }


  videoNotes = (video) => {
    // const id = parseInt(this.props.match.params.id, 0)
    this.state.notes.filter(note => note.video_id === video.id)
  }

  // displayNotes = () => {
  //   this.videoNotes().map(note =>{
  //     return(
  //       <div key={note.id}>
  //         <h4>{note.content}</h4>
  //         {note.user.id === this.props.user ? <button onClick={this.deleteNote}>X</button> : null}
  //       </div>
  //     )
  //   })
  // }

  // renderNotes = () => {
  //   return(
  //     <div>
  //       <h3>My Notes</h3> 
  //       {newNote ? this.newNote() : <button onClick={() => this.setState({newNote: true})}>Add Note</button> }
  //       <div>
  //         {this.displayNotes}
  //       </div>
  //     </div>
  //   )
  // }

 
  

  // handleDeleteNote = e => {
  //   const id = parseInt(e.target.value, 0)
  //   fetch(`http://localhost:3000/notes/${id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(resp => resp.json())
  //   .then(data => {
  //     this.setState((prevState) => ({
  //      notes: [...prevState.notes.filter(n => n.id !==id)]
  //     })
  //     )
  //     })
  // }


  render(){
    return(
      <div>
        <h4>Write Note:</h4>
        <textarea className="input-group input-group-sm"  type='text' name='note' value={this.state.note} onChange={this.handleNewNote} />
        <div>
          <button onClick={this.handleSubmitNote}>Add</button>
        </div>
      </div>
    )
  }
}

export default NotesContainer