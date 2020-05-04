import React, {useState, useEffect}  from 'react';
import { Platform, StyleSheet, Text, View , ScrollView, FlatList, Button,TouchableOpacity} from 'react-native';

import {  Card } from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

export default function Question(props) {

  const clickAnswer = (answer) =>{
      console.log(answer)
      if(answer==props.correct_answer){
        props.function() 
        props.point()
        props.start1()

      }else{
        props.function()
        props.start3()
      }
       

  }

  return (
  	
     <ScrollView>
      <View style={styles.main}>
       	<Card style={styles.questionBox}>
	       <Text style={styles.text}>{props.question}</Text>
	      </Card>

	      <Card style={styles.optionBox}>
  	    	
          <TouchableOpacity style={styles.option} onPress={()=>clickAnswer(props.correct_answer)}>
  	    		<Text style={styles.text}>{props.correct_answer}</Text>
          </TouchableOpacity>
  	    

  	    	<TouchableOpacity style={styles.option} onPress={()=>clickAnswer(props.incorrect_answers[0])}>
  	    		<Text style={styles.text} name="text">{props.incorrect_answers[0]}</Text>
  	    	</TouchableOpacity>

  	    	<TouchableOpacity style={styles.option} onPress={()=>clickAnswer(props.incorrect_answers[1])}>
  	    		<Text style={styles.text}>{props.incorrect_answers[1]}</Text>
  	    	</TouchableOpacity>

  	    	<TouchableOpacity style={styles.option} onPress={()=>clickAnswer(props.incorrect_answers[2])}>
  	    		<Text style={styles.text}>{props.incorrect_answers[2]}</Text>
  	    	</TouchableOpacity>
	    	
	    </Card> 

	    </View>         
      </ScrollView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    flex: 1,
    backgroundColor: '#242624',
  },
  main: {
    flex: 1,
    backgroundColor: '#242624',
    margin:5,
    height: 500
  },
  questionBox:{
  	height:135,
  	justifyContent:  'center',
  	alignItems: 'center' , 
    backgroundColor: '#242624',

  },
  text: {
    color: "#F5FCFF",
    fontSize: 18,
    margin:6,
    paddingLeft: 15,
  },
  optionBox:{
    alignItems:'center',
    marginTop:5,
    marginBottom:15,
    backgroundColor: '#242624',
  },
  option:{
    zIndex: 1,
  	height:50,
  	backgroundColor: '#8f8b8b',
  	borderRadius: 5,
  	width:300,
  	margin:6
  }
});


// <TouchableOpacity style={styles.option} onPress={()=>clickAnswer(props.correct_answer)}>