import React, {useState, useEffect}  from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, 
	ActivityIndicator,Button,StatusBar,ScrollView, Dimensions } from 'react-native';
import  AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo from 'react-native-vector-icons/Entypo';

import { useNavigation, useRoute } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import Question from '../components/Question';
import CorrectAnswer from '../components/CorrectAnswer';
import WrongAnswer from '../components/WrongAnswer';
import Finish from '../components/Finish';



export default function QuestionScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { category, label } = route.params;
  const [ansIndicatorT,setAnsIndicatorT] = useState(false)
  const [ansIndicatorF,setAnsIndicatorF] = useState(false)
  const [finish,setFinish]= useState(false)
  const [points,setPoints] = useState(0)
  const [question,setQuestion] = useState(0)
  const [loading,setLoading]= useState(false)
  const [start,setStart]= useState(false)
  const [skip,setSkip]= useState('Start')
  const [count, setCount]   = useState(0)
  const dispatch = useDispatch()

  const  quizData = useSelector(state=>{
    return state
  })

  const fetchData = () =>{
    setLoading(true)
    fetch('https://opentdb.com/api.php?amount=11&category='+category+'&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then((data)=> {
      dispatch({type:"add",payload:data}) 
      console.log('response :',data.results[0])
      console.log('response :',data.results[0].incorrect_answers)
      setLoading(false)
      }).catch(err=>{
        console.log('error occured '+ err)
      })
  }

  const clickAnswer = () =>{
      console.log('quidata :',quizData.results[0].question)
      console.log('quidata :',quizData.results[count].correct_answer)
  }

  useEffect(() => {
    fetchData()

  }, [])

  const next =() =>{
    setSkip('Next')
    setStart(true)
    console.log(count)
    if(count<=9){
      questionNO()
      setCount(prevCount => prevCount + 1);
    }else{
      setStart(false)
    }
  }

  const questionNO = () =>{
    setQuestion(prevCount => prevCount + 1)
  }

  const point = () =>{
    setPoints(prevCount => prevCount + 1)
  }

  // correct ans
  const start1 = () =>{
    setStart(false)
    setAnsIndicatorT(true)
  }
  const start2 = () =>{
    setStart(true)
    setAnsIndicatorT(false)
  }
  // correct ans

  const finish1 = () =>{
    setAnsIndicatorT(false)
    setAnsIndicatorF(false)
    setStart(false)
    setFinish(true)
    setCount(0)
  }

  // false ans
    const start3 = () =>{
    setStart(false)
    setAnsIndicatorF(true)
  }
  const start4 = () =>{
    setStart(true)
    setAnsIndicatorF(false)
  }
  // false ans

  return (
  	<ScrollView>
    <View style={styles.container}>
    <StatusBar backgroundColor="#414145"  />
     <View >
        <View style={styles.headerView}>
          <View>
            <AntDesign style={styles.headerIcon} name="arrowleft" size={35} color="white" onPress={()=>navigation.navigate('Category')}/>
          </View>
          <View>
          <Text style={styles.headerText}> {label} </Text>
          </View>
          <View style={{paddingLeft:22}}>
            <TouchableOpacity onPress={()=>next()}>
              <Text style={styles.text1}>{skip}</Text>
            </TouchableOpacity>   
          </View>
        </View> 
        <View style={styles.secView}>
        <View style={styles.sec1View}>
          <Text style={styles.text}>{question}/10</Text>
          <Text style={styles.text}>Question</Text>
        </View>

        <View style={styles.sec2View}></View>
        
        <View style={styles.sec3View}>
          <Text style={styles.text}>{points}</Text>
          <Text style={styles.text}>Points</Text>
        </View>
       </View>
     </View>

    
     <View>
      {loading? <ActivityIndicator style={{margin:5}}  size="large" color="red"  />:null}

      {start? <Question question={quizData.results[count].question} 
        correct_answer={quizData.results[count].correct_answer} 
        incorrect_answers={quizData.results[count].incorrect_answers} 
        function={next} questionNo={questionNO} point={point} count={count}
        start1={start1}  start3={start3} />:null }


      {ansIndicatorT? <CorrectAnswer setAnsIndicatorT={setAnsIndicatorT} count={count} 
        correct_answer={quizData.results[count-1].correct_answer} start2={start2} 
        finish1={finish1}  point={point} />:null}

      {ansIndicatorF? <WrongAnswer  setAnsIndicatorF={setAnsIndicatorF} finish1={finish1} count={count}
        correct_answer={quizData.results[count-1].correct_answer} start4={start4} />:null}

      {finish? <Finish points={points} />:null}

     </View>
     
     
       
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242624',
    height: Dimensions.get("screen").height
  },
  headerView:{
    flexDirection: 'row' ,
    backgroundColor: '#0a690a',
    height: 60,
    justifyContent:'space-between' 
  },
  headerIcon: {
    margin: 9,
    paddingLeft: 5,

  },
  headerText: {
    color: '#F5FCFF',
    fontSize: 23,
    margin:5,
    paddingTop: 5,
  },
  text1: {
    color:'#F5FCFF',
    fontSize: 23,
    margin: 5,
    marginRight: 5,
    paddingTop: 5,
  },




  secView:{
    backgroundColor: '#0a690a',
    flexDirection: 'row' ,
    justifyContent:'space-between' ,
    height:100,

  },
  sec1View:{
    margin:6,
    alignItems:  'center' , 

  },
  sec2View:{
    margin:6,
    

  },
  sec3View:{
    margin:6,
    alignItems:  'center' , 
    

  },
  text: {
    color:'#F5FCFF',
    fontSize: 23,
  }
});
// <Question question={question} correct_answer={correct_answer} incorrect_answers={incorrect_answers} /> 
// <Button title="click me" onPress={()=>clickAnswer()} />
