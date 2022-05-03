import firebase from 'firebase/compat/app'; //firebase
import 'firebase/compat/auth'; //autenticação de login e senha
import 'firebase/compat/database'; //banco de dados

let firebaseConfig = {
    apiKey: "AIzaSyAi93LAp7miP5HupdHXjA0g4iVWpTclU64",
    authDomain: "bdadibs.firebaseapp.com",
    projectId: "bdadibs",
    storageBucket: "bdadibs.appspot.com",
    messagingSenderId: "628471858384",
    appId: "1:628471858384:web:da8ec6c4ffcd01c2420ad5"
  };

  //abrindo a instancia do banco que só pode estar aberta uma vez
  if(!firebase.apps.length){
      //Inicialise o Firebase
      firebase.initializeApp(firebaseConfig);
  };

  export default firebase;