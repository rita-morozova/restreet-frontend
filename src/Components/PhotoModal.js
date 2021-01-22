import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import NewPhoto from "./NewPhoto";

const PhotoModal = ({ photos, user, handleUploadPhoto }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Icon
          name="photo"
          color="purple"
          size="huge"
          photos={photos}
          user={user}
        />
      }
    >
      <Modal.Header>Upload Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <NewPhoto
            photos={photos}
            user={user}
            handleUploadPhoto={handleUploadPhoto}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={() => setOpen(false)}
          style={{ backgroundColor: " #46D8D2", color: "white" }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => setOpen(false)}
          style={{ backgroundColor: " #FA396F", color: "white" }}
        >
          Let's see my art!
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PhotoModal;
