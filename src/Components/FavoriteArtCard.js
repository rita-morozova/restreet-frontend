import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const FavoriteArtCard = ({ art, deleteFromFavorites }) => {
  return (
    <div key={art.id} className="fav-masonry-item">
      <Card>
        <Image src={art.image_url} alt="Painting" wrapped ui={false} />
        <Card.Content>
          <Card.Header style={{ float: "left" }}>{art.artist}</Card.Header>
          <Card.Meta>
            <span className="date" style={{ float: "right" }}>
              {art.year === 0 ? "Unknown Year" : art.year}
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          {deleteFromFavorites ? (
            <Icon
              name="trash alternate outline"
              size="large"
              style={{ float: "right" }}
              onClick={() => deleteFromFavorites(art)}
            />
          ) : null}
        </Card.Content>
      </Card>
    </div>
  );
};

export default FavoriteArtCard;
