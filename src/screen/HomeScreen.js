import React from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar,TouchableOpacity, Image,Dimensions} from 'react-native';
import  AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();
  return (
  	<ScrollView >
    <View style={styles.container}>
    <StatusBar backgroundColor="#414145"  />
    <View style={styles.headerView}>
        <View>
          <AntDesign style={styles.headerIcon} name="setting" size={32} color="white" onPress={()=>navigation.navigate('Settings')}/>
        </View>
        <View>
          <Text style={styles.headerText}>General Knowledge Quiz</Text>
        </View>
        <View>
          <Entypo style={styles.headerIcon2} name="dots-three-vertical" size={20} color="white" onPress={()=>console.log('pressed')}/>
        </View>
    </View>

    <View style={styles.mainView}>
    <TouchableOpacity onPress={()=>navigation.navigate('Category')}>
      <View style={styles.secView}>
        <View>
           <Image style={styles.logo} source={require('../img/logo1.png')}/>
        </View>
        <View>
          <Text style={styles.text}> Play Quiz</Text>
        </View>
      </View>
      </TouchableOpacity>


      <TouchableOpacity>
      <View style={styles.secView}>
        <View>
          <Image style={styles.logo} source={require('../img/logo2.png')}/>
        </View>
        <View>
          <Text style={styles.text}> Send Feedback</Text>
        </View>
      </View>
      </TouchableOpacity>


      <TouchableOpacity>
      <View style={styles.secView}>
        <View>
          <Image style={styles.logo} source={require('../img/logo3.png')}/>
        </View>
        <View>
          <Text style={styles.text}> Our Quiz Apps</Text>
        </View>
      </View>
      </TouchableOpacity>


    </View>








    </View>
    </ScrollView>
       
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4f4d',
    height: Dimensions.get("screen").height
  },
  headerView:{
    flexDirection: 'row' ,
    backgroundColor: '#1e1e21',
    height: 60,
    justifyContent:'space-around' 
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






  mainView:{
    marginTop: 160,

  },
  secView: {
    flexDirection: 'row' ,
    backgroundColor: '#414145',
    margin: 5,
    height: 80,
    borderRadius: 2,

  },
  logo:{
    width:80,
    height: 60,
    margin:9

  },
  text: {
    fontSize: 25,
    color: '#F5FCFF',
    margin: 10,
    paddingTop: 10
  },
 
});

