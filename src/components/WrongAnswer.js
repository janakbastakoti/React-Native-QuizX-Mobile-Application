import React, {useState, useEffect}  from 'react';
import { Platform, StyleSheet, Text, View , ScrollView,TouchableOpacity} from 'react-native';



export default function WrongAnswer(props) {
	const next =() =>{
		if(props.count<10){
			props.start4()
		}else{
			props.finish1()			
		}	
	} 
	return(
		<ScrollView>
		<View style={styles.container}>
		<View style={styles.questionBox}>
			<Text style={styles.title}> WRONG ANSWER</Text>
			<Text style={styles.title}>Right ans: {props.correct_answer}</Text>
			<TouchableOpacity style={styles.btn} onPress={()=>next()}>
				<Text style={styles.btnText}>Next</Text>
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
    backgroundColor: 'red',
    margin:10

  },
  title:{
  	color:'white',
  	margin:5,
  	fontSize: 25,
  },
  btn:{
  	height: 35,
  	width: 70,
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
