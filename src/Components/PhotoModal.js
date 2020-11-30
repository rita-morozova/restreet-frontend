import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import NewPhoto from './NewPhoto'

const PhotoModal =({photos, user, handleUploadPhoto}) => {

  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button photos={photos} user={user} handleUploadPhoto={handleUploadPhoto} >Upload Photo</Button>}
    >
      <Modal.Header>Upload Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
           <NewPhoto photos={photos} user={user} handleUploadPhoto={handleUploadPhoto} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
         Let's see my art!
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default PhotoModal
