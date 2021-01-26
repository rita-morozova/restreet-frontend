import React, { useState } from "react";
import { Grid, Button, Form, Segment } from "semantic-ui-react";

const PostWall = ({ position, user, handlePostWall }) => {
  const [address, setAddress] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [user_id, setUser_id] = useState(user.id);
  const [adopted, setAdopted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    handlePostWall({
      lat: position.lat,
      lng: position.lng,
      address,
      zipcode,
      description,
      photo,
      user_id: user.id,
      adopted: false,
    });
  };
  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ minWidth: 300, maxWidth: 450 }}>
        <h3 style={{ color: "#44484b" }}>Add New Location</h3>
        <Form size="large" noValidate>
          <Segment stacked>
            <Form.Input
              fluid
              name="address"
              placeholder="Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            <Form.Input
              fluid
              name="zipcode"
              placeholder="Zipcode"
              value={zipcode}
              onChange={(event) => setZipCode(event.target.value)}
            />
            <Form.Input
              fluid
              name="description"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <Form.Input
              fluid
              name="photo"
              placeholder="Photo URL"
              value={photo}
              onChange={(event) => setPhoto(event.target.value)}
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              fluid
              size="large"
              style={{ backgroundColor: "#FA396F", color: "white" }}
            >
              Create New Wall
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default PostWall;
