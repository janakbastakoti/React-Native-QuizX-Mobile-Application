import React, {useState, useEffect}  from 'react';
import { Platform, StyleSheet, Text, View , ScrollView,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Finish(props) {
  const navigation = useNavigation();
	return(
		<ScrollView>
		<View style={styles.container}>
		<View style={styles.questionBox}>
			<Text style={styles.title}> FINISHED</Text>
			<Text style={styles.title}>Points :::{props.points}/10</Text>
			<TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Category')}>
				<Text style={styles.btnText}>Start Next</Text>
			</TouchableOpacity>

		</View>
		</View>
		</ScrollView>
		);

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242624',

  },
  questionBox:{
  	height:250,
  	justifyContent:  'center',
  	alignItems: 'center' , 
    backgroundColor: '#0a690a',
    margin:10

  },
  title:{
  	color:'white',
  	margin:5,
  	fontSize: 25,
  },
  btn:{
  	height: 35,
  	width: 100,
  	backgroundColor: '#242624',
  	alignItems:  'center',
  	borderRadius: 8,
   },
   btnText: {
   	color: 'white',
   	fontSize: 18,
   	margin: 5,

   }
 
 

});
