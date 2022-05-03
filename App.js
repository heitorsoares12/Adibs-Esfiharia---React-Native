import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack"
import { Ionicons } from '@expo/vector-icons';
import Login from './src/components/login/login'
import Menu from './src/components/MenuTabs/menu';


const Header =({name, openDrawer})=> (
  <View style={styles.header}>
    <TouchableOpacity onPress={()=>openDrawer()}>
      <Ionicons name="ios-menu" size={32} color={'white'} />
    </TouchableOpacity>
    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>{name}</Text>
    <Text style={{width:50}}></Text>
  </View>
)
const Home = ({navigation}) => (
  <View style={styles.container}>
    <Header name="Home" openDrawer={navigation.openDrawer}/>
    <Image source ={require("./assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
    <Text style={{padding:20}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dictum sapien, nec viverra orci. Morbi sed maximus purus. Phasellus quis justo mi. Nunc ut tellus lectus. 
    </Text>
    <Text style={{padding:20}}>
    In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
    </Text>

  </View>
)

const Dados = ({navigation}) => (
  <View style={styles.container}>
    <Header name="Dados" openDrawer={navigation.openDrawer}/>
    <Image source ={require("./assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
    <Text style={{padding:20}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dictum sapien, nec viverra orci. Morbi sed maximus purus. Phasellus quis justo mi. Nunc ut tellus lectus. 
    </Text>
    <Text style={{padding:20}}>
    In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
    </Text>
  </View>
)

const Endereços = ({navigation}) => (
  <View style={styles.container}>
    <Header name="Endereços" openDrawer={navigation.openDrawer}/>
    <Image source ={require("./assets/banner.png")} style={{width:"80%", height:"30%"}} resizeMode="contain"/>
    <Text style={{padding:20}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dictum sapien, nec viverra orci. Morbi sed maximus purus. Phasellus quis justo mi. Nunc ut tellus lectus. 
    </Text>
    <Text style={{padding:20}}>
    In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
    </Text>
  </View>
)

const LoginA = ({navigation}) => {
  const[user, setUser] = useState(null);

  if (!user) {
    return <Login changeStatus={(user) => setUser(user)}/>
      
  }

  return <Menu/>
}

function Item({ item, navigate }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.name)}>
      <Ionicons name={item.icon} size={32} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

class Sidebar extends React.Component {
  state = {
      routes:[
          {
              name:"Home",
              icon:"ios-home"
          },
          {
              name:"Dados",
              icon:"ios-person-circle-outline"
          },
          {
            name:"Endereços",
            icon:"ios-location-outline"
          },
          {
            name: 'Login',
            icon: 'log-in'
          }
      ]
  }


  render(){
      return (
            <View style={styles.container}>
              <View style={styles.menu}>
              <View style={styles.profileBack}>
                <Image source={require("./assets/adibprofile.png")} style={styles.profileImg}/>
                <Text style={{fontWeight:"bold", color: 'white', fontSize:16,marginTop:10}}>Adibs Esfihas</Text>
                <Text style={{color:"gray",marginBottom:10}}>contato@adibs.com.br</Text>
                <View style={styles.sidebarDivider}></View>
              </View>
              
              <FlatList
                  style={{width:"100%",marginLeft:30}}
                  data={this.state.routes}
                  renderItem={({ item }) => <Item  item={item} navigate={this.props.navigation.navigate}/>}
                  keyExtractor={item => item.name}
              />
              </View>
          </View>
      )
  }
}

const Drawer = createDrawerNavigator(
  {
    Home:{ screen: Home},
    Dados:{ screen: Dados},
    Endereços:{ screen: Endereços},
    Login: { screen: LoginA}

  },
  {
    initialRouteName: "Login",
    unmountInactiveRoutes: true,
    headerMode: "none",
    contentComponent: props => <Sidebar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer : {screen: Drawer},
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
    unmountInactiveRoutes: true
  }
)

const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {
  render(){

    return (
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    );
  }

}

const styles = StyleSheet.create({  
  container: {
    backgroundColor: '#2C3333',
    alignItems:"center",
    flex:1,

  },
  listItem:{
      height:60,
      alignItems:"center",
      flexDirection:"row",
  },
  title:{
      fontSize:18,
      marginLeft:20
  },
  header:{
    width:"100%",
    height:60,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20,
    backgroundColor: '#FFD32D',
  },
  profileImg:{
    width:80,
    height:80,
    borderRadius:40,
    marginTop:20
  },
  sidebarDivider:{
    height:1,
    width:"100%",
    backgroundColor:"lightgray",
    marginVertical:10
  },
  profileBack:{
    backgroundColor: '#2C3333',
    alignItems:"center",
    width: '100%',
    padding: 20,
    marginBottom: 20
  },
  menu:{
    backgroundColor: '#FFD32D',
    width: '100%',
    height: '100%'
  }
});
