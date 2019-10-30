import firebase from "firebase/app";
import "firebase/storage";

//Initialize firebase
var config = {
   apiKey: "AIzaSyDpWmQnFGz5YNqBSDwyRuybnY-C08bWnx0",
   authDomain: "rating-22898.firebaseapp.com",
   databaseURL: "https://rating-22898.firebaseio.com",
   projectId: "rating-22898",
   storageBucket: "rating-22898.appspot.com",
   messagingSenderId: "51502987748"
 };
 
 if(!firebase.apps.length){
   firebase.initializeApp(config);
 }
 const storage = firebase.storage();

 export {
   storage, firebase as default
 }
