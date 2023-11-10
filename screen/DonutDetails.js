import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
const DonutDetail =  ({route, navigation}) => {
    const [todos, setTodos] = useState(route.params ?.todo);
return (
    <View style={styles.container}>
            <Image source={{uri: todos.image}} style={{width:275,height:275,left:20,top:20}}></Image>  
            <Text style={{fontSize:30,fontWeight:700}}>{todos.type}</Text>
            <View style={{flexDirection:'row',top:20,height:100}}>
                <Text style={{fontSize:20,fontWeight:700}}>Spicy tasty donut family</Text>
                <Text style={{left:100,fontSize:20,fontWeight:700}}>{todos.price}</Text>
            </View>
           <View style={{width:'90%',backgroundColor:'orange',height:50,justifyContent:'center',alignItems:'center',left:30}}>
                <TouchableOpacity>
                    <Text style={{fontSize:20,fontWeight:700,color:'white'}}>ADD TO CART</Text>
                </TouchableOpacity>
           </View>

    </View>
  )
}
export default DonutDetail
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width:'100%',
    height:'100%',
  },
  
});