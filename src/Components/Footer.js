import React from "react";
import "../App.css";
import { Segment, Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    // <Segment vertical style={{ backgroundColor: "#fac339" }}>
    //   <Grid container textAlign="center">
    //     <Grid.Column>© 2020 RE-STREET</Grid.Column>
    //   </Grid>
    // </Segment>
    <footer>
      <p>© 2020 RE-STREET <a href="https://github.com/rita-morozova/restreet-frontend"> by Margarita Morozova</a></p>
    </footer>
  );
};

export default Footer;
