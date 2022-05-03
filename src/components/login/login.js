import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView , 
    TextInput, Image, TouchableOpacity, View } from 'react-native';
import firebase from '../../services/connectionFirebase';

export default function Login({changeStatus}) {
  const [type, setType] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(){
   
    if(type === 'login'){
      // Aqui fazemos o login
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        changeStatus(user.user.uid)
      })
      .catch((err)=>{
        console.log(err);
        alert('Email ou Senha incorretos ou não informados');
        return;
      })

    }else{
     // Aqui cadastramos o usuario 
     const user = firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((user)=>{
        changeStatus(user.user.uid)
       alert('Cadastrado com sucesso');
     })
     .catch((err)=>{
      alert('Erro ao cadastrar, tente novamente!');
      return;
     })
   }
  }
 return (
   <SafeAreaView style={styles.container}>
        <Image source ={require("../../../assets/esfiha.png")} style={{flex: 0.7, width: '35%', resizeMode: 'center'}}/>
        <TextInput
        placeholder="Seu email"
        style={styles.input}
        value={email}
        onChangeText={ (text) => setEmail(text) }
        />

        <TextInput
        placeholder="Sua senha"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={ (text) => setPassword(text) }
        />

        <TouchableOpacity
        style={[styles.handleLogin, 
            { backgroundColor: type === 'login' ? '#FFD32D' : '#da1a29' } ]}
        onPress={handleLogin}
        >
        <Text style={styles.loginText, { color: type === 'login' ? 'black' : '#fff' } }>
            { type === 'login' ? 'Acessar' : 'Cadastrar' }
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')} >
        <Text style={{ textAlign: 'center' }}>
            {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta' }
        </Text>
        </TouchableOpacity>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F2f6fc',
    width: '100%',
    alignItems: 'center'
  },
  input:{
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
    width: '35%',
    borderRadius: 8,
  },
  handleLogin:{
    alignItems: 'center',
    justifyContent:'center',
    height: 45,
    marginBottom: 10,
    width: '35%',
    borderRadius: 8,
  },
  loginText:{
    color: '#FFF',
    fontWeight: '900',
    fontSize: 17,
  }
})
