import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "rc-slider";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", snakVissible: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, snakVissible: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackBar() {
    this.setState({ snakVissible: false });
  }
  render() {
    const { level, changeLevel, showingAllColors, classes } = this.props;
    const { format } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/"> Color Picker </Link>
        </div>
        {showingAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.container}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex"> HEX - #ffffff </MenuItem>
            <MenuItem value="rgb"> RGB - rgb(255, 255, 255) </MenuItem>
            <MenuItem value="rgba"> RGBA - rgba(255, 255, 255, 1.0) </MenuItem>
          </Select>
        </div>
        {/* Color-select Snackbar starts here */}
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.snakVissible}
          autoHideDuration={2500}
          message={
            <span id="message-id">
              Format changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describdedby": "message-id"
          }}
          onClose={this.closeSnackBar}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
