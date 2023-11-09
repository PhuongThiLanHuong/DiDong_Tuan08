import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
const Donut = ({navigation}) => {
    const [todos, setTodos] = useState();
    const getTodoData = () => {
        fetch('https://6544365a5a0b4b04436c25bb.mockapi.io/dbdonut')
            .then(response => response.json())
            .then((json) => {
                setTodos(json);
                console.log(json)
            })
    }

    useEffect(() => {
        getTodoData();
    }, [])
    const [type, setType] = useState("Donut");
return (
    <View style={styles.container}>
        <View style={styles.view1}>
            <Text style={{fontSize:15,fontWeight:700}}>Hello,Huong!</Text>
            <Text style={{fontSize:20,fontWeight:700}}>Choose Your Best Food</Text>
            <TextInput placeholder="Search" style={{borderColor:'yellow',borderWidth:1,width:'60%'}}></TextInput>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <View style={{borderWidth:1,borderColor:'gray',width:'30%',alignContent:'center',borderRadius:5}}>
            <TouchableOpacity
             onPress={()=>{
                setType("Donut")
            }}
            >
                <Text style={{fontSize:18,fontWeight:700,left:20}}>Donut</Text>

            </TouchableOpacity>
            </View>
            <View style={{borderWidth:1,borderColor:'gray',width:'35%',alignContent:'center',borderRadius:5}}>
            <TouchableOpacity onPress={()=>{
                setType("Pink Donut")
            }}>
                <Text style={{fontSize:18,fontWeight:700,left:20}}>Pink Donut</Text>
            </TouchableOpacity>
            </View>
            <View style={{borderWidth:1,borderColor:'gray',width:'30%',alignContent:'center',borderRadius:5}}>
            <TouchableOpacity
            onPress={()=>{
                setType("Floating")
            }}>
                <Text style={{fontSize:18,fontWeight:700,left:20}}>Floating</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.view2}>
                    {!!todos?.length && todos?.map((todo) => {
                        return (
                           <TouchableOpacity onPress={() => navigation.navigate("DonutDetail")}>
                                <View style={styles.todo}>
                                    <Image source={{uri: todo.image}} style={{width:80,height:80}}></Image>
                                    <View style={{flexDirection:'column',left:10}}>
                                        <Text style={{fontSize:25,fontWeight:700}}>{todo?.type}</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{fontSize:25,fontWeight:700}}>{todo?.price}</Text>
                                                <Text style={{fontSize:30,fontWeight:700,backgroundColor:'orange',left:0,color:'white'}}>+</Text>
                                            </View>
                                    </View>
                                </View>
                           </TouchableOpacity>
                        )
                    })}
        </View>
    </View>
  )
}
export default Donut
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width:'100%',
    height:'100%',
  },
  view1:{
    height:100,
    flexDirection:'column',
    top:10,
    left:10
  },
  view2:{
    width:'100%',
    height:'100%',
    top:20,
    },
    todo: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        paddingHorizontal: 8,
        alignItems: 'center',
        height: 100,
        borderRadius: 20,
        backgroundColor: 'pink',
        left:10,
    }
});
