import React from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
const Screen03 = (navigation) => {
    return(
        <View style={styles.contain}>
            <View style={styles.view1}>
                <Text style={{color:'#171A1F',fontSize:30,fontWeight:700}}>ADD YOUR JOB</Text>
            </View>
            <View style={styles.view2}>
                <Image source={require('../assets/Frame1.png')} style={{width:20,height:20,right:30}}></Image>
                <TextInput placeholder='input your job' style={{fontSize:20,fontWeight:500}}></TextInput>
            </View>
            <View style={styles.view3}>
                <TouchableOpacity onPress={() => navigation.navigate("Screen02")}>
                    <Text style={{fontSize:20,fontWeight:700,color:'white'}}>FINISH</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/Image 95.png') } style={{width:250,height:250,left:70,top:80}}></Image>
        </View>
    )
}
export default Screen03
const styles = StyleSheet.create({
    contain: {
        backgroundColor: "#fff",
        width: "100%",
        height:'100%',
        overflow: "hidden",
    },
    view1:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:50,
        marginTop:20,
    },
    view2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:80,
        marginTop:50,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:10,
    },
    view3:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'50%',
        left:80,
        height:50,
        marginTop:50,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'skyblue',
        color:'white',
    }
})