import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native'

const Screen02 = (navigation) => {
    const [todos, setTodos] = useState();
    const getTodoData = () => {
        fetch('https://6544365a5a0b4b04436c25bb.mockapi.io/learn')
            .then(response => response.json())
            .then((json) => {
                setTodos(json);
                console.log(json)
            })
    }

    useEffect(() => {
        getTodoData();
    }, [])

    return (
        <View style={styles.container}>
          <ScrollView>
          <View style={styles.view1}>
                <Image source={require('../assets/Frame3.png')} style={{width:25,height:25}}></Image>
                <TextInput placeholder='Search' style={{fontSize:15}}></TextInput>
            </View>
          <View style={styles.view2}>   
                    {!!todos?.length && todos?.map((todo) => {
                        return (
                            <View style={styles.todo}>
                                <Image source={require('../assets/Frame (1).png')} style={{width:25,height:25,right:50}}></Image>
                                <Text>{todo?.name}</Text>
                                <Image source={require('../assets/Frame (2).png')} style={{width:25,height:25,left:50}}></Image>
                            </View>
                        )
                    })}
          </View>
          <View style={styles.view3}>
            <TouchableOpacity onPress={() => navigation.navigate("Screen03")}>
                <Text style={{fontSize:50,fontWeight:700,color:'white'}}>+</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
    )
}

export default Screen02

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height:'100%',
        overflow: "hidden",
    },
    view1:{
        flexDirection:'row',
        alignItems:'center',
        width:'80%',
        height:50,
        top:30,
        left:30,
        borderColor:'gray',
        borderWidth:1,
    },
    view2:{
        width:'100%',
        height:500,
        top:30,
    },
    view3:{
        width:90,
        height:90,
        top:80,
        left:120,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'skyblue',
        borderRadius:50,
    },
    todo: {
        top:50,
        flexDirection: 'row',
        width: '90%',
        marginVertical: 10,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        left:20,
        borderRadius: 20,
        backgroundColor: 'lightgray'
    }
})