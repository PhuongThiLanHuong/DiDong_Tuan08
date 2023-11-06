import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
const Screen02 = ({navigation}) => {
    var [dt, setDt] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [flag, setFlag] = useState(false);

  const handleUpdateData = () => {
    fetch("https://653f2fdd9e8bd3be29e00ea4.mockapi.io/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setDt(json);
      });
  };

  console.log(dt);
  const handleCheck = (name) => {
    setDt({
      ...dt,
      todoList: dt.todoList.map((item) =>
        item.name === name ? { ...item, check: !item.check } : item
      ),
    });
    setFlag(!flag);
  };
  useEffect(() => {
    handleUpdateData();
    fetch(`https://653f2fdd9e8bd3be29e00ea4.mockapi.io/todos/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todoList: dt.todoList,
      }),
    });
  }, [flag]);
    return (
        <View style={styles.constain}>
            <View style={styles.view1}>
                <Image source={require('../assets/Frame3.png')} style={{width:20,height:20}}></Image>
                <TextInput placeholder='  Search' style={{fontSize:20}}></TextInput>
            </View>
            
        </View>
        
    )
}
export default Screen02
const styles = StyleSheet.create({
    constain: {
        backgroundColor: "#fff",
        width: "100%",
        height:'100%',
        overflow: "hidden",
    },
    view1:{
        backgroundColor: "#fff",
        width: "80%",
        left:40,
        overflow: "hidden",
        alignItems: 'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'gray',
    }
})