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

const Gallery = () => {
  var [data, setData] = useState([]);
  const classes = useStyles();
  var [image, setImage] = useState([]);

  var listImages = [];

  var storage = firebase.storage();

  var storageRef = firebase.storage().ref();
  var imagesRef = storageRef.child("images");

  var links = [];

  useEffect(() => {
    const getPics = async () => {
      await imagesRef
        .listAll()
        .then(function (res) {
          res.prefixes.forEach(function (folderRef) {});
          res.items.forEach(function (itemRef) {
            storage
              .ref("images")
              .child(itemRef.name)
              .getDownloadURL()
              .then((url) => {
                links.push(url);
              }, 5000);
          });
        })
        .catch(function (error) {
          console.log(error);
        });

        console.log(links)
        console.log(links.length)
        console.log(links)
        console.log(links.length)
    };

    getPics()
  });

  return (
    <GradientBackground>
      <Typography>Hi</Typography>
    </GradientBackground>
  );
};

export default Gallery;
