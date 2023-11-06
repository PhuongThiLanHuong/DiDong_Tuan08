return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={{fontSize:10,fontWeight:700}}>Hello,Huong!</Text>
        <Text style={{fontSize:20,fontWeight:700}}>Choose Your Best Food</Text>
        <TextInput placeholder="Search" style={{borderColor:'yellow',borderWidth:1,width:'60%'}}></TextInput>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
        <View style={{borderWidth:1,borderColor:'gray',width:'30%',alignContent:'center',borderRadius:5}}>
          <TouchableOpacity>
            <Text style={{fontSize:18,fontWeight:700,left:20}}>Donut</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderWidth:1,borderColor:'gray',width:'35%',alignContent:'center',borderRadius:5}}>
          <TouchableOpacity>
            <Text style={{fontSize:18,fontWeight:700,left:20}}>Pink Donut</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderWidth:1,borderColor:'gray',width:'30%',alignContent:'center',borderRadius:5}}>
          <TouchableOpacity>
            <Text style={{fontSize:18,fontWeight:700,left:20}}>Floating</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width:'100%'
  },
  view1:{
    height:100,
    flexDirection:'column',
    top:10,
    left:10
  }
});
