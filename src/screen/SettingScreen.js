import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity , Image, Switch,StatusBar, Modal, Dimensions } from 'react-native';
import  Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function CategoryScreen() {
  const navigation = useNavigation();
  const [modal,setModal] = useState(false);
  const [sound, setSound] = useState(false);
  const [text,setText] = useState("Use our quiz app to check your general Knowledge.Question and answer are suffled randomly every time you play.")
  const [explanation, setExplanation] = useState(false);
  const toggleSoundSwitch = () => setSound(previousState => !previousState);
  const toggleExplanationSwitch = () => setExplanation(previousState => !previousState);

  return (
  	<View style={styles.container}>
    <StatusBar backgroundColor="#414145"  />
     <View style={styles.headerView}>
        <View>
          <Entypo style={styles.headerIcon} name="home" size={32} color="white" onPress={()=>navigation.navigate('Home')}/>
        </View>
        <View>
          <Text style={styles.headerText}>   Settings   </Text>
        </View>
        <View>
          <Entypo style={styles.headerIcon2} name="dots-three-vertical" size={20} color="white" onPress={()=>setModal(true)}/>
          <Modal animationType="slide" transparent={true}  visible={modal} 
                onRequestClose={()=>setModal(false)} 
                style={{height:100,botom:5}} >
              <View style={styles.modalView}>
                <View style={styles.modalTextView}>
                  <Text style={styles.modalText}>{text}</Text>
                  <Text style={styles.modalText}>Contact developer</Text>
                  <Text style={styles.modalText}>janakbastakot@gmail.com</Text>
                </View>
                <TouchableOpacity style={styles.modalButton} onPress={() => setModal( false)} >
                  <Text style={styles.touchableText} >cancel</Text>
                </TouchableOpacity>
              </View>
        </Modal>
        </View>
      </View> 
    <View>
      <View style={styles.firstView}>
        <Text style={styles.text}>Sound</Text>
        <View style={styles.switchBox}>
        <Switch
          trackColor={{ false: "#131414", true: "#81b0ff" }}
          thumbColor={sound ? "#131414" : "#f4f3f4"}
          ios_backgroundColor="#131414"
          onValueChange={toggleSoundSwitch}
          value={sound}          
        />
        </View>
      </View>

      <View style={styles.firstView}>
        <Text style={styles.text}>Show Explanation</Text>
        <View style={styles.switchBox}>
        <Switch
          trackColor={{ false: "#131414", true: "#81b0ff" }}
          thumbColor={explanation ? "#131414" : "#f4f3f4"}
          ios_backgroundColor="#131414"
          onValueChange={toggleExplanationSwitch}
          value={explanation}          
        />
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text1}>Remove ads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
           <Text style={styles.text1}>Restore</Text>
        </TouchableOpacity>
      </View>
    </View>
  	</View>
  	);
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4f4d',
    height: Dimensions.get("screen").height

  },
  firstView: {
    flexDirection: 'row' ,
    justifyContent:  'space-between', 
    backgroundColor: '#383d3d',
    marginTop: 4,
  },
  text: {
    fontSize: 22,
    color: '#F5FCFF',
    margin: 10,
    paddingTop: 10,
    marginLeft: 15,
  },
  switchBox: {
    margin:10,
    paddingTop: 15,
    marginRight: 5,
  },
  button:{
    backgroundColor: '#262929',
    margin: 5,
    width:160,

  },
  buttonView: {
    alignItems:  'center' ,
    marginTop: 30,
  },
  text1: {
    fontSize: 20,
    color: '#F5FCFF',
    margin: 10,
    paddingTop: 10,
    marginLeft: 15,
  },
   headerView:{
    flexDirection: 'row' ,
    backgroundColor: '#1e1e21',
    height: 60,
    justifyContent:'space-between' 
  },
  headerIcon: {
    margin: 9,
    paddingLeft: 5,

  },
  headerText: {
    color: '#F5FCFF',
    fontSize: 20,
    margin:5,
    paddingTop: 5,
  },
  headerIcon2: {
    margin: 9,
    paddingLeft: 5,
    paddingTop: 5,
  },


  modalView: {
    position: 'absolute',
    bottom:5,
    width:'100%',
    height:490,
    backgroundColor: '#383d3d',
    alignItems: 'center',

  },
  modalTextView:{
    width:330,
    height:250,
    backgroundColor: '#8f8b8b',
    marginTop: 20,
    alignItems:  'center' , 
  },
  modalText:{
    color: '#F5FCFF',
    fontSize:18,
    margin:8,
  },
  modalButton: {
    height:40,
    width: 160,
    backgroundColor: '#1e1e21',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,


  },
  touchableText:{
    fontSize:18,
    color:"#F5FCFF",
    margin:8,
  },

});
