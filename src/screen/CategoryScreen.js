import React from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, SafeAreaView, Dimensions,FlatList} from 'react-native';

import Category from '../components/Category';
import  AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function CategoryScreen() {
  const navigation = useNavigation();
  const data = [
  {id:'1',label:'level 1',color:'#099409',category:"9"},
  {id:'2',label:'level 2',color:'#c41a0e',category:"21"},
  {id:'3',label:'level 3',color:'#a3c40e',category:"23"},
  {id:'4',label:'level 4',color:'#0e3cc4',category:"27"},

  ]



  return (
  	
    <View style={styles.container}>
     <StatusBar backgroundColor="#414145"  />
    <View style={styles.mainView}>
        <View>
          <AntDesign style={styles.headerIcon} name="arrowleft" size={32} color="white" onPress={()=>navigation.navigate('Home')}/>
        </View>
        <View>
          <Text style={styles.headerText}>Choose Category</Text>
        </View>
        <View>
          <Entypo style={styles.headerIcon2} name="dots-three-vertical" size={20} color="white" onPress={()=>console.log('pressed')}/>
        </View>
      </View> 

     <FlatList 
	    data={data}
	    renderItem={({item})=>{
	      return <Category 
	        label = {item.label} 
	        color = {item.color}
	        category= {item.category}

	      />
	    }}
	     keyExtractor = {item=> item.id}
	   />


    </View>
    
       
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4f4d',
    height: Dimensions.get("screen").height
  },
   mainView:{
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
 
});
