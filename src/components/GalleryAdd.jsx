import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import firebase from "./Firebase";
import GradientBackground from "./GradientBackground";


const useStyles = makeStyles((theme) => ({
  backgroundStyle: {
    height: "100vh",
  },
  contain: {
    margin: theme.spacing(2),
  },
  indCard: {
    height: "400px",
    textAlign: "center",
    opacity: "0.7",
  },
  titleStyle: {
    padding: "32px",
    fontFamily: "Roboto Slab, serif",
  },
  textStyle: {
    fontFamily: "Roboto Slab, serif",
  },
}));

const GalleryAdd = () => {
  var [data, setData] = useState([]);
  var [name, setName] = useState("");
  var [message, setMessage] = useState("");
  const classes = useStyles();
  const [image, setImage] = useState(null)

  const handleChange = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])

    }
  }

  var storage = firebase.storage()

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          console.log(url)
        })
      }
    )
  }

  console.log("image", image)
  

  return (
    <form>
      <input type="file" name="image"  onChange={handleChange} />
      <Button
        variant="contained"
        className={classes.buttonStyle}
        onClick={handleUpload}
      >
        Submit
      </Button>
    </form>
  );
};

export default GalleryAdd;
