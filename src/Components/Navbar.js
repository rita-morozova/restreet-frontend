import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon, Grid, Menu, Dropdown } from "semantic-ui-react";
import "../App.css";

const link = {
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "#44484b",
  fontSize: "12pt",
};

class Navbar extends React.Component {
  state = {
    dropdownMenuStyle: {
      display: "none",
    },
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }
    this.setState(newState);
  };

  render() {
    return (
      <div className="nav-bar-main">
        <Grid padded className="mobile tablet computer">
          <Menu
            borderless
            fluid
            stackable
            size="large"
            style={{ backgroundColor: "#fac339" }}
          >
            <Link to="/">
              <Menu.Item header style={{ color: "#44484b" }}>
                RE-STREET
                <Icon name="heart" color="red" size="small" />
              </Menu.Item>
            </Link>
            {this.props.user && this.props.user.id > 0 ? (
              <>
                <NavLink
                  to="/find-a-wall"
                  exact
                  style={link}
                  activeStyle={{ background: "#f1f3f3" }}
                >
                  Find a Wall
                </NavLink>
                <NavLink
                  to="/get-inspired"
                  exact
                  style={link}
                  activeStyle={{ background: "#f1f3f3" }}
                >
                  Get Inspired
                </NavLink>
                <NavLink
                  to="/learn"
                  exact
                  style={link}
                  activeStyle={{ background: "#f1f3f3" }}
                >
                  {" "}
                  Learn
                </NavLink>
                <NavLink
                  to="/share"
                  exact
                  style={link}
                  activeStyle={{ background: "#f1f3f3" }}
                >
                  {" "}
                  Share{" "}
                </NavLink>
                <Menu.Menu position="right">
                  <Dropdown
                    item
                    text={this.props.user.username}
                    style={{ color: "#44484b" }}
                  >
                    <Dropdown.Menu style={{ backgroundColor: "#fac339" }}>
                      <Link to="/my-inspiration">
                        <Dropdown.Item style={{ color: "#44484b" }}>
                          Favorite Art
                        </Dropdown.Item>
                      </Link>
                      <Link to="/my-library">
                        <Dropdown.Item style={{ color: "#44484b" }}>
                          Library
                        </Dropdown.Item>
                      </Link>
                      <Link to="/my-listings">
                        <Dropdown.Item style={{ color: "#44484b" }}>
                          Listings
                        </Dropdown.Item>
                      </Link>
                      <Link to="/profile">
                        <Dropdown.Item style={{ color: "#44484b" }}>
                          Profile
                        </Dropdown.Item>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                  <NavLink
                    to="/logout"
                    exact
                    style={link}
                    activeStyle={{ background: "#f1f3f3" }}
                  >
                    {" "}
                    Logout{" "}
                  </NavLink>
                </Menu.Menu>
              </>
            ) : (
              <>
                <Menu.Menu position="right">
                  <NavLink
                    to="/login"
                    exact
                    style={link}
                    activeStyle={{ background: "#f1f3f3" }}
                  >
                    {" "}
                    Login{" "}
                  </NavLink>
                  <NavLink
                    to="/signup"
                    exact
                    style={link}
                    activeStyle={{ background: "#f1f3f3" }}
                  >
                    Signup
                  </NavLink>
                </Menu.Menu>
              </>
            )}
          </Menu>
        </Grid>
      </div>
    );
  }
}

export default Navbar;
