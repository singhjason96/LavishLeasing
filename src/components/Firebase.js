import app, { firestore } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyAUeCHvpTXEJmpiB981Q7UktU16l7RFPQ8",
    authDomain: "lavishleasing-28357.firebaseapp.com",
    databaseURL: "https://lavishleasing-28357.firebaseio.com",
    projectId: "lavishleasing-28357",
    storageBucket: "lavishleasing-28357.appspot.com",
    messagingSenderId: "1033247252974",
    appId: "1:1033247252974:web:5d186121152d636f9c6eff",
    measurementId: "G-YTFM3LD8SF"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
      this.auth = app.auth();
      this.db = app.firestore();
      this.database = app.database;
      // const { user, setUser } = useContext(UserContext);
    }
  }

  export default new Firebase();