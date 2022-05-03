import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Produtos from '../produto/produto';

function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text></Text>
		</View>
	);
}

function SobreScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text></Text>
      </View>
    );
  }

  function ListaScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text></Text>
      </View>
    );
  }

  function ProdutoScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Produtos/>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

export default function Menu() {
	return (
    
		<Tab.Navigator
		  screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
			  let iconName;
  
			  if (route.name === 'Sobre') {
				iconName = focused
				  ? 'ios-information-circle'
				  : 'ios-information-circle-outline';
			  } else if (route.name === 'Lista') {
				iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
			  }else if(route.name === 'Home')
			  {
				  iconName = focused ? 'ios-home' : 'ios-home-outline';
			  }else if(route.name === 'Produto')
			  {
				  iconName = focused ? 'basket' : 'basket-outline';
			  }
  
			  // You can return any component that you like here!
			  return <Ionicons name={iconName} size={size} color={color} />;
			  
			},
			headerShown: false,
			tabBarActiveTintColor: "rgb(0, 150, 255)",
			tabBarInactiveTintColor: 'gray',
		  })  
		  }
		>
		  <Tab.Screen name="Home" component={HomeScreen} />
		  <Tab.Screen name="Lista" component={ListaScreen} />
		  <Tab.Screen name="Produto" component={ProdutoScreen} />
		  <Tab.Screen name="Sobre" component={SobreScreen} />
		</Tab.Navigator>
	  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});
