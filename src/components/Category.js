import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity , Image } from 'react-native';
// import {  Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Category(props) {	
  const navigation = useNavigation();
  return (
    
  	<TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Question',{category:props.category,label:props.label})}>		    
  		<View style={[styles.fistView, { backgroundColor: props.color }]}>	
		  	<View>
		  		<Image style={styles.logo} source={require('../img/logo4.png')}/>
		  	</View>
		  	<View >	
		  		<Text style={styles.text1}>{props.label}</Text>
		  		<Text style={styles.text2}>Tap to start</Text>
		  	</View>
		  	<View style={{ justifyContent: 'center',alignItems:'center'}}>
		  		<Text style={styles.text}>High score</Text>
		  		<Text style={styles.text}>0</Text>
		  		<Text style={styles.text}>100%</Text>
		  	</View>
		  </View>
		</TouchableOpacity>
    
  	);
 }



const backgroundColor =() =>{

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4f4d',

  },
  fistView:{
  	flexDirection: 'row',
  	height:90,
  	margin:3,
  	justifyContent: 'space-between', 

  },
  logo:{
    width:80,
    height: 80,
    margin:5

  },
  text1: {
    fontSize: 25,
    color: '#F5FCFF',
    margin: 6,
    marginBottom: 0,
    
  },
  text2: {
    fontSize: 18,
    color: '#F5FCFF',
    paddingLeft: 7
    
  },
  text:{
  	color: '#F5FCFF',
  	fontSize: 18,
  }
});