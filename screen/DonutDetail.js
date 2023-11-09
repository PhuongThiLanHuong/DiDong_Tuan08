import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
const DonutDetail =  ({route, navigation}) => {
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
        {!!todos?.length && todos?.map((todo) => {
             return (
                <View>
                    <Image source={{uri: todo.image}} style={{width:80,height:80}}></Image>
                </View>  
            )
        })}
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
