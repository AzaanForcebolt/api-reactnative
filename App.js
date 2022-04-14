import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView,Image } from 'react-native';import LinearGradient from 'react-native-linear-gradient';
import Card from "./Component/Card";
const App=()=>{
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    // console.log(task)
  }
  const Finish =(index)=>{
    let work = [...taskItems];
    work.splice(index,1);
    setTaskItems(work)
  }
  return(   
    <LinearGradient colors={['#33ccff', '#ff99cc']} style={styles.body}>

    <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      
      <View style={styles.content}>

        <Text style={styles.title}>Todays Task's </Text>
        
        <View style={styles.items}>

         {
           taskItems.map((item, index)=>{
              return(
                <TouchableOpacity key={index} onPress={()=>Finish(index)}>
                  <Card text={item}/>
                </TouchableOpacity>
                ) 
           })
         }
        </View>

      </View>
      </ScrollView>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bottom}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            {/* <Text style={styles.addText}>+</Text> */}
            <Image style={styles.addText} source={require('./assets/plus.png')} />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  body:{
    flex:1
  },
  title:{
    fontSize:24,
    fontWeight: 'bold'
  },
  content:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  items:{
    marginTop:30,
  },
  bottom: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingLeft:90,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#ff99cc',
    borderWidth: 2,
    width: 250,
    fontWeight:'bold',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ff99cc',
    borderWidth: 2,
  },
  addText:{
    height:30,
    width:30
  }
})
export default App;