
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.constain}>
            <View style={styles.view1}>
                <Image source={require('../assets/Image 95.png') } style={{width:250,height:250}}></Image>
                <Text style={styles.text1}>MANAGE YOUR TASK</Text>
            </View>
            <View style={styles.view2}>
                <Image source={require('../assets/Frame.png')} style={{width:30,height:30}}></Image>
                <TextInput placeholder='  Enter Your Name' style={{color:'#9095A0',fontSize:25}}></TextInput>
            </View>
            <View style={styles.view3}> 
                <TouchableOpacity  onPress={() => navigation.navigate("Screen02")}>
                    <Text style={{color:'white'}}>GET STARTED </Text>

                </TouchableOpacity>
            </View>
        </View>
        
    )
}
export default HomeScreen
const styles = StyleSheet.create({
    constain: {
        backgroundColor: "#fff",
        width: "100%",
        height:'100%',
        overflow: "hidden",
    },
    view1:{
        backgroundColor: "#fff",
        width: "100%",
        height: 300,
        overflow: "hidden",
        alignItems: 'center',
    },
    text1: {
        fontSize:30,
        fontFamily:'Epilogue',
        fontWeight:700,
        color:'#8353E2',
        lineHeight:36,
        top:20,
    },
    view2:{
        backgroundColor: "#fff",
        width: "90%",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        height:50,
        top:50,
        left:20,
        borderColor:'gray',
        borderWidth:1,
    },
    view3:{
        backgroundColor: "#00BDD6",
        width: "70%",
        alignItems:'center',
        justifyContent:'center',
        height:50,
        top:100,
        left:50,
        borderRadius:12,
    }
})
